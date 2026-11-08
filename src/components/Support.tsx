"use client";

// 感谢捐赠名单已隐藏。这些款项都直接打给了 Chronodivide 创始人，与本站点无关。
// import DonorList from './DonorList';
import { useI18n } from '@/i18n/LocaleProvider';
import BrandText from '@/i18n/BrandText';

export default function Support() {
  const { m } = useI18n();

  return (
    <section 
      id="donate" 
      className="py-16 bg-[#0d2033] text-[#e8f1f8] border-y border-[#18334d]"
    >
      <div className="container mx-auto px-4 max-w-[1100px] text-center">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8"><BrandText text={m.support.title} /></h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto"></div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#b9c7d4] md:text-base">
          {m.support.channelNotice}
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-[4px] border border-[#2a4660] bg-[#122a40]/50 px-4 py-6 text-left sm:px-6">
          <h3 className="text-center font-['Oswald',sans-serif] text-2xl font-normal uppercase leading-tight text-[#e8f1f8] md:text-3xl">
            {m.support.costsTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#b9c7d4] md:text-base">
            {m.support.costsLead}
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-[4px] border border-[#2a4660] border-l-[3px] border-l-[#ff9408] bg-[#0d2033] px-4 py-5 text-center">
              <dt className="text-sm text-[#9eb1c3]">{m.support.cdnLabel}</dt>
              <dd className="mt-2 text-lg leading-snug text-[#e8f1f8]">{m.support.cdnDetail}</dd>
            </div>
            <div className="rounded-[4px] border border-[#2a4660] border-l-[3px] border-l-[#ff9408] bg-[#0d2033] px-4 py-5 text-center">
              <dt className="text-sm text-[#9eb1c3]">{m.support.serversLabel}</dt>
              <dd className="mt-2">
                <span className="block font-['Oswald',sans-serif] text-3xl leading-none text-[#ff9408]">{m.support.serversAmount}</span>
                <span className="mt-2 block text-sm text-[#e8f1f8]">{m.support.serversCaption}</span>
              </dd>
            </div>
          </dl>
        </div>
        {/*
          感谢捐赠
          以下名单经人工核对后公开，感谢每一位支持红色井界™的朋友。
          已隐藏：这些款项都直接打给了 Chronodivide 创始人，与本站点无关。
          <DonorList />
        */}
      </div>
    </section>
  );
}
