"use client";

import { useState, useEffect, useMemo } from 'react';
import type { DonationRecord, DonationsFile, DonationCurrency, DonationChannel } from '@/types/donation';
import { useI18n } from '@/i18n/LocaleProvider';
import { formatDate } from '@/i18n/format';
import type { Messages } from '@/i18n/types';

const VISIBLE_ROWS = 5;
const ROW_HEIGHT_PX = 44;

function currencyLabel(currency: DonationCurrency, copy: Messages['donors']): string {
  if (currency === 'bmc') return copy.bmc;
  if (currency === 'other') return copy.other;
  return currency.toUpperCase();
}

function channelLabel(channel: DonationChannel, copy: Messages['donors']): string {
  if (channel === 'crypto') return copy.crypto;
  if (channel === 'bmc') return copy.bmc;
  return copy.other;
}

function formatAmount(record: DonationRecord, copy: Messages['donors']): string {
  if (record.amount && record.currency) {
    return `${record.amount} ${currencyLabel(record.currency, copy)}`;
  }
  if (record.currency && record.currency !== 'other') {
    return currencyLabel(record.currency, copy);
  }
  return copy.supported;
}

function displayName(record: DonationRecord, copy: Messages['donors']): string {
  if (record.anonymous) return copy.anonymous;
  return record.displayName?.trim() || copy.supporter;
}

function sortDonations(records: DonationRecord[]): DonationRecord[] {
  return [...records]
    .filter((r) => r.published !== false)
    .sort((a, b) => new Date(b.donatedAt).getTime() - new Date(a.donatedAt).getTime());
}

function DonationRow({ record, copy, locale }: { record: DonationRecord; copy: Messages['donors']; locale: 'zh' | 'en' }) {
  return (
    <div
      className="flex items-center gap-3 px-4 border-b border-[#2a4660] text-sm shrink-0"
      style={{ height: ROW_HEIGHT_PX }}
    >
      <span className="text-[#e8f1f8] font-medium shrink-0 min-w-[5rem] max-w-[8rem] truncate">
        {displayName(record, copy)}
      </span>
      <span className="text-[#b9c7d4] shrink-0 hidden sm:inline">
        {channelLabel(record.channel, copy)}
      </span>
      <span className="text-[#b9c7d4] shrink-0">{formatAmount(record, copy)}</span>
      <span className="text-[#9eb1c3] shrink-0 text-xs">{formatDate(record.donatedAt, locale)}</span>
      {record.message && (
        <span className="text-[#9eb1c3] truncate flex-1 min-w-0">{record.message}</span>
      )}
      {record.txUrl && (
        <a
          href={record.txUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-[#ff9408] hover:text-[#fda93c] text-xs underline shrink-0 ml-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {copy.receipt}
        </a>
      )}
    </div>
  );
}

export default function DonorList() {
  const { locale, m } = useI18n();
  const copy = m.donors;
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/donations.json');
        if (!res.ok) throw new Error('Failed to fetch donations');
        const data: DonationsFile = await res.json();
        if (!Array.isArray(data.donations)) throw new Error('Invalid donations format');
        setDonations(sortDonations(data.donations));
        setLoadState('ready');
      } catch (err) {
        console.error('Error fetching donations:', err);
        setLoadState('error');
      }
    };
    load();
  }, []);

  const shouldScroll = donations.length > VISIBLE_ROWS;
  const scrollItems = useMemo(
    () => (shouldScroll ? [...donations, ...donations] : donations),
    [donations, shouldScroll]
  );

  const scrollDurationSec = Math.max(donations.length * 3, 12);

  if (loadState === 'loading') {
    return (
      <div className="mt-16 text-left">
        <p className="text-[#9eb1c3] text-sm text-center">{copy.loading}</p>
      </div>
    );
  }

  if (loadState === 'error') {
    return null;
  }

  const viewportHeight = VISIBLE_ROWS * ROW_HEIGHT_PX;

  return (
    <div className="mt-16 text-left">
      <h3 className="text-2xl md:text-3xl font-normal uppercase font-['Oswald',sans-serif] text-center text-[#e8f1f8] mb-2">
        {copy.title}
      </h3>
      <p className="text-center text-[13px] text-[#9eb1c3] mb-8 max-w-2xl mx-auto">
        {copy.intro}
      </p>

      {donations.length === 0 ? (
        <p className="text-center text-[#9eb1c3] text-sm">{copy.empty}</p>
      ) : (
        <div
          className="relative mx-auto max-w-3xl rounded border border-[#2a4660] bg-[#122a40]/40 overflow-hidden"
          style={{ height: viewportHeight }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-[#0d2033] to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-[#0d2033] to-transparent"
            aria-hidden
          />

          <div
            className={shouldScroll ? 'donor-scroll-track' : ''}
            style={
              shouldScroll
                ? ({
                    ['--donor-scroll-distance' as string]: `-${donations.length * ROW_HEIGHT_PX}px`,
                    ['--donor-scroll-duration' as string]: `${scrollDurationSec}s`,
                    animationPlayState: paused ? 'paused' : 'running',
                  } as React.CSSProperties)
                : undefined
            }
          >
            {scrollItems.map((record, index) => (
              <DonationRow key={`${record.id}-${index}`} record={record} copy={copy} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
