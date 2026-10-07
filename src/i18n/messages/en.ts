import type { Messages } from '../types';

export const en: Messages = {
  meta: {
    title: 'ra2web — Real-time strategy on every platform',
    description:
      'An unofficial remake of Command & Conquer: Red Alert 2, rebuilt with web technology. Open it in your browser and play anywhere — fight players worldwide in real time, or take on the AI.',
    keywords:
      'ra2web, Red Alert 2, browser RTS, play Red Alert 2 online, Red Alert 2 on Mac, Red Alert 2 on iPad, Red Alert 2 on phone',
    ogLocale: 'en_US',
  },
  switcher: {
    label: 'Language',
    zh: '中文',
    en: 'English',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    community: 'Community',
    media: 'Media',
    news: 'News',
    play: 'Play now!',
    logoAria: 'Back to home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  banner: {
    welcome: 'Welcome back,',
    commander: 'Commander!',
    line1: 'Time to revisit a true classic of real-time strategy…',
    line2: '…right in your browser.',
    playNow: 'Play now',
    stable: 'Stable server',
    slides: [
      { title: 'Soviets vs. Allies across the sea', subtitle: 'Match footage' },
      {
        title: 'Play on an Android tablet',
        subtitle: 'Mobile demo (ghosting shows up because the stick is panning the map quickly)',
      },
      { title: 'Defeat the enemy!', subtitle: 'Match footage' },
    ],
    goToSlide: 'Go to slide {n}',
  },
  about: {
    title: 'About ra2web',
    paragraphs: [
      'ra2web is the mirror site for **Chronodivide**. **Chronodivide** is the first engine built entirely on web technology to stand alongside the real-time strategy game Command & Conquer: Red Alert 2. It is a closed-source project with its own intellectual property. Players nicknamed it “网页红警”, and more than 200,000 people around the world play it.',
      'ra2web works to make **Chronodivide** feel better on every platform. It contributed the Chinese translation and the mobile quick panels (virtual stick, shortcuts, and more), which made the game much easier to play across Greater China, and it works with **Chronodivide** to fight piracy and keep the community in good shape.',
      '**Chronodivide** is aiming for a cross-platform real-time strategy engine, and that direction is already visible. If you want to help the community grow, you are welcome.',
    ],
    tabNews: 'News',
    tabSpecs: 'Requirements',
    lobbyAlt: 'Game lobby',
    progressTitle: 'Development',
    progressStatus: 'Still updating…',
    progressBody:
      'Online matches and skirmishes are already supported. The map pool keeps growing, custom maps are playable, and you can watch replays for free.',
    progressBefore: 'Check the ',
    progressLink: 'newsroom',
    progressAfter:
      ' for the latest updates, or follow the WeChat account 王二火大 for extras (accelerators, guides, QQ groups, and more).',
    specsTitle: 'Recommended specs',
    specs: [
      'CPU: Intel Atom Z3700+ @1.33GHz (for Android, Apple, and similar devices, use hardware from 2018 or newer)',
      'OS: a 64-bit operating system that can run a web browser',
      'Memory: 4GB (more is better)',
      'GPU: Intel HD Graphics (for Android, Apple, and similar devices, use hardware from 2018 or newer)',
      'Resolution: 1024x768 minimum',
      'Browser: the latest Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari (avoid Firefox when you can)',
    ],
  },
  features: {
    title: 'Features',
    items: [
      {
        title: 'Cross-platform',
        description:
          'Play on almost anything: classic PCs and laptops, Mac, iPhone, Android phones, even a fridge or a kids’ phone watch 😂',
      },
      {
        title: 'Browser–server',
        description:
          'This is not LAN-only play. You can match players worldwide, and because it runs over HTTP you no longer need the extra firewall setup that old real-time strategy netplay demanded.',
      },
      {
        title: 'Modern controls',
        description:
          'On a computer you get the classic keyboard and mouse. On mobile it switches to touch, buttons, and a virtual stick. One implementation, two ways to play.',
      },
      {
        title: 'Peripheral API and mods',
        description:
          'Build your own stick and shortcut panel, or create a community mod in the spirit of 共和国之辉. Both are possible, and neither is a research project.',
      },
    ],
  },
  community: {
    title: 'Community',
    intro: 'Follow the WeChat account 王二火大 for extras (accelerators, guides, QQ groups, and more).',
    qrAlt: 'WeChat account QR code',
    followBefore: 'Scan to follow the WeChat account ',
    followName: '王二火大',
    followAfter: ' for more news',
  },
  media: {
    title: 'Media',
    screenshot: 'Screenshot {n}',
    screenshotFull: 'Enlarged screenshot',
    close: 'Close',
  },
  sponsors: {
    title: 'Sponsors & partners',
    intro: 'Thanks to these partners for supporting ra2web',
    gold: 'Gold sponsor',
    goldAlt: 'Gold sponsor',
    personal: 'Individual sponsors',
    namingNote: 'Donors of ¥200 or more may choose what name or text is shown.',
    loading: 'Loading…',
    empty: 'No individual sponsors yet',
  },
  support: {
    title: 'Support ra2web',
    p1: 'ra2web stays online because ChronoDivide can keep going. Servers, bandwidth, and the rest of the infrastructure are not free. If you are having fun, please consider donating to ChronoDivide.',
    p2: 'To move funds across borders and make sure donations reach the ChronoDivide author in the open, we accept cryptocurrency. BTC, ETH, and DOGE are supported, along with a monthly Buy Me a Coffee subscription. The addresses below belong directly to the ChronoDivide author, and every donation is visible on-chain. If you are new to this, follow the WeChat account 王二火大 for a short primer. Thank you again for the support.',
    copy: 'Copy address',
    copied: 'Address copied!',
    addressHint: '{name} address — please double-check',
    currencies: { btc: 'Bitcoin', eth: 'Ethereum', doge: 'Dogecoin' },
    donate: { btc: 'Donate Bitcoin', eth: 'Donate Ethereum', doge: 'Donate Dogecoin' },
  },
  donors: {
    loading: 'Loading donations…',
    title: 'Thank you',
    intro:
      'This list is published after a manual check. Thank you to everyone who supports ChronoDivide. 100% of donations made here go directly to the ChronoDivide author’s account.',
    empty: 'No public donations yet',
    anonymous: 'Anonymous supporter',
    supporter: 'Supporter',
    supported: 'Supported',
    other: 'Other',
    crypto: 'Cryptocurrency',
    bmc: 'Buy Me A Coffee',
    receipt: 'Receipt',
  },
  footer: {
    playNow: 'Play now',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    tos: 'Terms of Service',
    contact: 'Contact us',
    legal:
      'Legal notice: RA2WEB® is a registered trademark of RA2WEB LTD. 红色井界™, 王二火大™, 网页红井™, the “红围巾鸟” cartoon, and the “战争策略游戏” logo are trademarks of RA2WEB LTD and are protected by law. Red Alert 2 artwork shown on this page and in the game is downloaded and imported by players and is not affiliated with RA2WEB LTD.',
    linksTitle: 'Friends',
    more: 'More links',
    less: 'Show less',
    links: [
      { name: '盼之游戏交易', description: 'A leading marketplace for game-account trading' },
      { name: '共和国之辉', description: 'Official 共和国之辉 site' },
      { name: '王二火大', description: 'Official 王二火大 site' },
      { name: 'Bun中文网', description: 'Bun documentation in Chinese' },
      { name: 'Dogecoin', description: 'Official Dogecoin site' },
      { name: 'OpenRA', description: 'Official OpenRA site' },
      { name: 'GTA5MOD', description: 'GTA5MOD' },
    ],
  },
  subpage: { back: 'Back to home' },
  news: {
    title: 'News',
    latest: 'Latest',
    author: 'By {name}',
    readMore: 'Read more →',
    empty: 'No news yet',
    published: 'Published {date}',
    updated: 'Last updated: {date}',
    back: 'Back to news',
    share: 'Share',
    shareTo: 'Share on {name}',
    print: 'Print article',
    shareArticle: 'Share this article:',
    categories: {
      公告: 'Notice',
      新闻: 'News',
      百科: 'Wiki',
      活动: 'Event',
    },
    defaultCategory: 'Notice',
  },
  notFound: {
    title: 'Page not found',
    body: 'That page does not exist, or it has moved.',
  },
  privacy: {
    title: 'Privacy Policy',
    heading: 'ra2web Privacy Policy',
    updated: 'Last updated: April 1, 2024',
    sections: [
      {
        heading: '1. Introduction',
        blocks: [
          {
            type: 'p',
            text: 'Thank you for using ra2web. This privacy policy explains how we collect, use, store, and share your personal information.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { type: 'p', text: 'We may collect the following kinds of information:' },
          {
            type: 'ul',
            items: [
              'Information you provide when you register and use the service, such as an email address and username',
              'Game data, such as statistics and progress',
              'Device information, such as IP address, browser type, and operating system',
              'Log data, such as when you visit and which features you use',
            ],
          },
        ],
      },
      {
        heading: '3. How we use information',
        blocks: [
          { type: 'p', text: 'We use the information we collect to:' },
          {
            type: 'ul',
            items: [
              'Provide, maintain, and improve the service',
              'Develop new services and features',
              'Understand how people use the service',
              'Monitor and analyze trends, usage, and activity',
              'Detect, investigate, and prevent fraud and abuse',
            ],
          },
        ],
      },
      {
        heading: '4. Sharing',
        blocks: [
          {
            type: 'p',
            text: 'We do not sell your personal information. We share it only in these cases:',
          },
          {
            type: 'ul',
            items: [
              'When you agree or ask us to',
              'With service providers and partners who help us run the service',
              'To comply with law and regulation',
              'If our organization changes, such as a merger, acquisition, or asset sale',
            ],
          },
        ],
      },
      {
        heading: '5. Your rights',
        blocks: [
          {
            type: 'p',
            text: 'You may access, correct, or delete your personal information. To exercise these rights, contact us at contact@chronodivide.com.',
          },
        ],
      },
      {
        heading: '6. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Questions about this privacy policy can be sent to contact@chronodivide.com.',
          },
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    heading: 'ra2web Cookie Policy',
    updated: 'Last updated: April 1, 2024',
    sections: [
      {
        heading: '1. What are cookies?',
        blocks: [
          {
            type: 'p',
            text: 'Cookies are small text files stored on your computer or mobile device. They let a site remember your actions and preferences (such as sign-in, language, font size, and other display settings) so you do not have to set them again on every visit.',
          },
        ],
      },
      {
        heading: '2. How we use cookies',
        blocks: [
          { type: 'p', text: 'We use cookies for several purposes, including:' },
          {
            type: 'ul',
            items: [
              'Keeping you signed in',
              'Remembering your game settings and preferences',
              'Remembering the interface language you choose',
              'Collecting information about how you interact with the site',
              'Improving the site’s features and performance',
              'Analyzing and measuring traffic and usage',
            ],
          },
        ],
      },
      {
        heading: '3. Types of cookies we use',
        blocks: [
          {
            type: 'h4',
            heading: 'Strictly necessary cookies',
            text: 'These cookies are required for the site to work, and you cannot switch them off in our system. They are usually set in response to something you do, such as submitting a form, setting privacy preferences, signing in, or using a cart.',
          },
          {
            type: 'h4',
            heading: 'Performance cookies',
            text: 'These cookies let us count visits and traffic sources so we can measure and improve performance. They help us see which pages are popular and how visitors move through the site.',
          },
          {
            type: 'h4',
            heading: 'Functional cookies',
            text: 'These cookies enable enhanced features and personalization. They may be set by us or by third parties whose services we have added to a page. If you block them, some of those services may not work.',
          },
          {
            type: 'h4',
            heading: 'Targeting cookies',
            text: 'These cookies may be set through our site by advertising partners. Those companies may use them to build a profile of your interests and show you relevant ads on other sites.',
          },
        ],
      },
      {
        heading: '4. How to manage cookies',
        blocks: [
          { type: 'p', text: 'Most browsers let you control cookies in their settings. You can:' },
          {
            type: 'ul',
            items: [
              'See the cookies stored in your browser',
              'Allow or block cookies',
              'Ask the browser to notify you when a cookie is set',
              'Delete cookies',
            ],
          },
          {
            type: 'p',
            text: 'Deleting or blocking cookies can affect your experience on this site, and some features may stop working.',
          },
        ],
      },
      {
        heading: '5. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Questions about this cookie policy can be sent to contact@chronodivide.com.',
          },
        ],
      },
    ],
  },
  tos: {
    title: 'Terms of Service',
    heading: 'ra2web Terms of Service',
    updated: 'Last updated: April 1, 2024',
    sections: [
      {
        heading: '1. Acceptance',
        blocks: [
          {
            type: 'p',
            text: 'By using ra2web, you agree to these terms. If you do not agree, do not use the service.',
          },
        ],
      },
      {
        heading: '2. The service',
        blocks: [
          {
            type: 'p',
            text: 'ra2web is a browser-based real-time strategy game you can play on a wide range of devices. We may update, change, or interrupt the service from time to time without separate notice.',
          },
        ],
      },
      {
        heading: '3. Accounts',
        blocks: [
          { type: 'p', text: 'Some features may require an account. You agree to:' },
          {
            type: 'ul',
            items: [
              'Provide accurate, complete, and current information',
              'Keep your account secure, including your password',
              'Take responsibility for activity under your account',
              'Follow applicable laws and rules',
            ],
          },
        ],
      },
      {
        heading: '4. Conduct',
        blocks: [
          { type: 'p', text: 'You agree not to:' },
          {
            type: 'ul',
            items: [
              'Use the service in a way that could damage, disable, or overload it',
              'Use bots, scrapers, or other automated means to access the service',
              'Attempt to gain unauthorized access',
              'Interfere with the service or the servers connected to it',
              'Distribute malware or other harmful code',
              'Harass, threaten, or harm other users',
            ],
          },
        ],
      },
      {
        heading: '5. Intellectual property',
        blocks: [
          {
            type: 'p',
            text: 'ra2web and its content (including text, graphics, logos, button icons, images, audio clips, data compilations, and software) belong to RA2WEB LTD and are protected by international copyright law. You may not copy, modify, or distribute that content without our explicit permission.',
          },
        ],
      },
      {
        heading: '6. Disclaimer',
        blocks: [
          {
            type: 'p',
            text: 'The service is provided “as is”, without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, timely, secure, or error-free, or that results obtained through it will be accurate or reliable.',
          },
        ],
      },
      {
        heading: '7. Limitation of liability',
        blocks: [
          {
            type: 'p',
            text: 'To the fullest extent permitted by law, RA2WEB LTD and its employees, officers, directors, agents, suppliers, and licensors are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, the service.',
          },
        ],
      },
      {
        heading: '8. Changes',
        blocks: [
          {
            type: 'p',
            text: 'We may change these terms from time to time. Updated terms take effect when they are posted on the site. Continuing to use the service means you accept the updated terms.',
          },
        ],
      },
      {
        heading: '9. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Questions about these terms can be sent to contact@chronodivide.com.',
          },
        ],
      },
    ],
  },
  patchNotes: {
    title: 'Patch notes',
    heading: 'Game updates',
    version: 'Version {version}',
    latest: 'Latest',
    entries: [
      {
        version: '1.0.5',
        date: '2025-03-25',
        changes: [
          'Fixed occasional desyncs in multiplayer',
          'Improved touch controls on mobile devices',
          'Added a new map: Red Canyon',
          'Improved AI unit micro',
        ],
      },
      {
        version: '1.0.4',
        date: '2025-02-15',
        changes: [
          'Added replay playback',
          'Faster game loading',
          'Fixed incorrect abilities on some units',
          'Balance: weakened the Soviet Tesla Tank and strengthened the Allied Mirage Tank',
        ],
      },
      {
        version: '1.0.3',
        date: '2025-01-20',
        changes: [
          'Added custom game settings',
          'More stable network connections',
          'Fixed several UI issues',
          'Improved in-game chat',
        ],
      },
      {
        version: '1.0.2',
        date: '2024-12-12',
        changes: [
          'Added a single-player challenge mode',
          'Fixed several crashes',
          'Improved rendering at high resolutions',
          'Added a new achievement system',
        ],
      },
      {
        version: '1.0.1',
        date: '2024-11-10',
        changes: [
          'Fixed multiple balance issues',
          'Improved controls on mobile devices',
          'Added an in-game tutorial',
          'Improved performance',
        ],
      },
      {
        version: '1.0.0',
        date: '2024-10-01',
        changes: [
          'Official release',
          'Cross-platform play',
          'Multiplayer matches',
          'Single-player matches against the AI',
          'Classic Red Alert 2 units and buildings',
        ],
      },
    ],
  },
};
