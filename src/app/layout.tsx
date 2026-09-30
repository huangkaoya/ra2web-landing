import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocaleContext } from "@/i18n/get-locale";
import { getMessages } from "@/i18n/messages";
import { htmlLang } from "@/i18n/format";
import { localeAlternates } from "@/i18n/seo";
import { LOCALE_BOOTSTRAP } from "@/i18n/cookie";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pathname } = await getLocaleContext();
  const meta = getMessages(locale).meta;
  const alternateLocale = locale === "zh" ? "en_US" : "zh_CN";
  const { canonical, languages } = localeAlternates(pathname, locale);

  return {
    metadataBase: new URL("https://www.ra2web.com"),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      alternateLocale: [alternateLocale],
      siteName: "ra2web",
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = await getLocaleContext();
  const messages = getMessages(locale);

  return (
    <html lang={htmlLang(locale)} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script dangerouslySetInnerHTML={{ __html: LOCALE_BOOTSTRAP }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider locale={locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
