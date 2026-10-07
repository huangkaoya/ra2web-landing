import type { Messages } from '../types';

export const zh: Messages = {
  meta: {
    title: '红色井界-全平台即时战略爽游',
    description:
      '非官方的红色警戒2重制版，用前端技术完全重构，支持浏览器直接打开随时随地畅玩，和全球玩家实时对战，或者爆锤电脑AI',
    keywords:
      '红色警戒下载, 如何玩红警, webra2, 苹果如何玩红警, 平板上如何玩红警, 手机上如何玩红警, 红警, 红警2, 红色警戒2, 网页红警',
    ogLocale: 'zh_CN',
  },
  switcher: {
    label: '语言',
    zh: '中文',
    en: 'English',
  },
  nav: {
    home: '首页',
    features: '核心特色',
    community: '社区',
    media: '频道',
    news: '新闻中心',
    play: '点此开玩！',
    logoAria: '返回首页',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  banner: {
    welcome: '欢迎回来,',
    commander: '指挥官！',
    line1: '是时候体验和重温真正经典的即时战略游戏玩法……',
    line2: '……居然可以直接在您的浏览器！！',
    playNow: '立即开始',
    stable: '稳定服',
    slides: [
      { title: '激烈跨海苏盟对决', subtitle: '对战实况展示' },
      {
        title: '安卓平板上畅玩',
        subtitle: '移动端演示（图为摇杆高速移动地图中所以会有重影）',
      },
      { title: '击败敌人！', subtitle: '对战实况展示' },
    ],
    goToSlide: '转到第 {n} 张',
  },
  about: {
    title: '关于红色井界™',
    paragraphs: [
      '红色井界™当前是 **Chronodivide** 的镜像运营站点。**Chronodivide** 是首个完全基于网页技术开发的、对标知名即时战略游戏 《红色警戒2》 的游戏引擎，具有完全知识产权的闭源项目，人们称其为"网页红警"，深受全球20余万用户喜爱。',
      '红色井界™致力于提升 **Chronodivide** 在全平台的用户体验，贡献了中文翻译、移动端快捷面板（摇杆、快捷键等）等功能，极大提升了大中华区玩家游戏体验，并协助 **Chronodivide** 共同打击盗版和持续净化游戏生态。',
      '**Chronodivide** 的终极目标是打造跨平台的即时战略类游戏引擎，当前已经初步证明了这一点。真诚欢迎各位有志之士一同参与社区建设，共同促进社区繁荣！',
    ],
    tabNews: '新闻',
    tabSpecs: '配置要求',
    lobbyAlt: '游戏大厅',
    progressTitle: '开发进展',
    progressStatus: '持续更新中……',
    progressBody:
      '当前已经支持联机、单机，游戏地图持续增加中，并支持游玩自定义地图，而且可以免费查看对战录像回放。',
    progressBefore: '你可以在 ',
    progressLink: '新闻中心',
    progressAfter:
      ' 查看游戏更新的最新情报，或者微信关注公众号 王二火大 获取各类周边资讯（包括加速器、攻略、QQ群等）。',
    specsTitle: '建议游戏配置',
    specs: [
      'CPU: Intel Atom Z3700+ @1.33GHz (安卓、苹果等建议使用2018年及之后的新设备)',
      'OS: 64位操作系统 (并且需要支持能打开浏览器)',
      'Memory: 4GB (如果更大则更好)',
      'GPU: Intel HD Graphics (安卓、苹果等建议使用2018年及之后的新设备)',
      '分辨率: 1024x768 最低',
      '浏览器: 最新版本的 Google Chrome, Mozilla Firefox, Microsoft Edge or Safari (尽可能避免使用 Firefox)',
    ],
  },
  features: {
    title: '核心特色',
    items: [
      {
        title: '跨平台',
        description:
          '几乎在所有的设备上游玩，包括经典的个人电脑、笔记本、MAC、Iphone、安卓手机，甚至电冰箱或者小天才电话手表😂',
      },
      {
        title: 'B-S架构',
        description:
          '并非局域网联机意味着你可以和全球玩家在线切磋，使用HTTP访问意味着不再有古早即时战略类游戏打联机需要额外的防火墙配置这一场景！',
      },
      {
        title: '现代操作体验',
        description:
          '在电脑端打开可以体验经典的键盘+鼠标操作，而转到移动端则会自动切换到触摸+按钮+摇杆操作，一套实现，妙不可言。',
      },
      {
        title: '支持外设API和MOD',
        description:
          '无论是想开发属于自己的摇杆和快捷面板来增强操控体验，还是开发类似"共和国之辉"这样风靡华人的经典MOD提升游戏乐趣，都可行且易于上手！',
      },
    ],
  },
  community: {
    title: '社区',
    intro: '从微信公众号 王二火大 获取各类周边资讯（包括加速器、攻略、QQ群等）。',
    qrAlt: '微信公众号二维码',
    followBefore: '扫描关注微信公众号',
    followName: '王二火大',
    followAfter: '获取更多资讯',
  },
  media: {
    title: '频道',
    screenshot: '游戏截图 {n}',
    screenshotFull: '游戏截图大图',
    close: '关闭',
  },
  sponsors: {
    title: '赞助与合作',
    intro: '感谢以下伙伴对红色井界™的支持与合作',
    gold: '金牌赞助商',
    goldAlt: '金牌赞助商',
    personal: '个人赞助',
    namingNote: '捐赠 200 元以上的，可以自由决定挂名内容。',
    loading: '加载中…',
    empty: '暂无个人赞助记录',
  },
  support: {
    title: '支持红色井界™',
    p1: '红色井界™ 能够成功运作离不开 ChronoDivide 的可持续发展，基础设施（服务器、带宽）等都需要不菲的费用来维持运转，您如果觉得好玩，还请为 ChronoDivide 捐款！',
    p2: '为了满足跨国资金流动需要，确保捐赠可以透明地支持到 ChronoDivide 作者，我们决定采用加密货币的形式，目前支持BTC、ETH、DOGE三种加密货币，以及支持按月订阅（类似于充电）的Buy Me A Coffee，下方的地址直接为 ChronoDivide 作者账户，您可以在区块链上透明地查看到每一笔捐助。如果您不知道如何操作，可以微信关注公众号 王二火大 了解加密货币基础知识，再次感谢您的关注和支持！',
    copy: '复制地址',
    copied: '地址已复制！',
    addressHint: '{name}地址，请仔细核对',
    currencies: { btc: '比特币', eth: '以太坊', doge: '狗狗币' },
    donate: { btc: '捐赠比特币', eth: '捐赠以太坊', doge: '捐赠狗狗币' },
  },
  donors: {
    loading: '加载捐赠记录…',
    title: '感谢捐赠',
    intro:
      '以下名单经人工核对后公开，感谢每一位支持 ChronoDivide 的朋友。通过此处捐赠的金额100%直接到账 Chronodivide 作者账户',
    empty: '暂无公开捐赠记录',
    anonymous: '匿名支持者',
    supporter: '热心支持者',
    supported: '已支持',
    other: '其他',
    crypto: '加密货币',
    bmc: 'Buy Me A Coffee',
    receipt: '凭证',
  },
  footer: {
    playNow: '现在开玩',
    privacy: '隐私政策',
    cookies: 'Cookie政策',
    tos: '服务条款',
    contact: '联系我们',
    legal:
      '法律声明：RA2WEB® 是 RA2WEB LTD 的注册商标，红色井界™ 王二火大™ 网页红井™ 及 "红围巾鸟"卡通形象 和 "战争策略游戏" 徽标 是 RA2WEB LTD 的商标，受法律保护。本页面宣传和游戏中出现的《Red Alert2》相关美术素材为玩家自行下载导入，与 RA2WEB LTD 无关。',
    linksTitle: '友情链接',
    more: '更多链接',
    less: '收起',
    links: [
      { name: '盼之游戏交易', description: '领先的游戏交易代售网站' },
      { name: '共和国之辉', description: '共和国之辉官网' },
      { name: '王二火大', description: '王二火大官网' },
      { name: 'Bun中文网', description: 'Bun中文网' },
      { name: '狗狗币官网', description: '狗狗币官网' },
      { name: 'OpenRA', description: 'OpenRA官网' },
      { name: 'GTA5MOD', description: 'GTA5MOD' },
    ],
  },
  subpage: { back: '返回主页' },
  news: {
    title: '新闻中心',
    latest: '最新动态',
    author: '作者：{name}',
    readMore: '阅读全文 →',
    empty: '暂无新闻动态',
    published: '发布于 {date}',
    updated: '最后更新：{date}',
    back: '返回新闻中心',
    share: '分享',
    shareTo: '分享到 {name}',
    print: '打印文章',
    shareArticle: '分享文章:',
    categories: {
      公告: '公告',
      新闻: '新闻',
      百科: '百科',
      活动: '活动',
    },
    defaultCategory: '公告',
  },
  notFound: {
    title: '页面不存在',
    body: '这个页面不存在，或已经挪走了。',
  },
  privacy: {
    title: '隐私政策',
    heading: '红色井界™ 隐私政策',
    updated: '最后更新日期：2024年4月1日',
    sections: [
      {
        heading: '1. 引言',
        blocks: [
          {
            type: 'p',
            text: '感谢您使用红色井界™！本隐私政策旨在帮助您了解我们如何收集、使用、存储和共享您的个人信息。',
          },
        ],
      },
      {
        heading: '2. 我们收集的信息',
        blocks: [
          { type: 'p', text: '我们可能会收集以下类型的信息：' },
          {
            type: 'ul',
            items: [
              '您在注册和使用我们服务时提供的信息，如电子邮件地址、用户名',
              '游戏数据，如游戏统计数据、游戏进度',
              '设备信息，如IP地址、浏览器类型、操作系统',
              '日志数据，如您访问我们服务的时间、所用功能',
            ],
          },
        ],
      },
      {
        heading: '3. 我们如何使用信息',
        blocks: [
          { type: 'p', text: '我们使用收集的信息用于：' },
          {
            type: 'ul',
            items: [
              '提供、维护和改进我们的服务',
              '开发新的服务和功能',
              '理解用户如何使用我们的服务',
              '监控和分析趋势、使用情况和活动',
              '检测、调查和预防欺诈行为和违规活动',
            ],
          },
        ],
      },
      {
        heading: '4. 信息共享',
        blocks: [
          { type: 'p', text: '我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：' },
          {
            type: 'ul',
            items: [
              '当您同意或指示我们这样做时',
              '与我们的服务提供商和合作伙伴共享，以帮助我们提供服务',
              '为遵守法律法规',
              '在我们的组织结构发生变更时，如合并、收购或资产出售',
            ],
          },
        ],
      },
      {
        heading: '5. 您的权利',
        blocks: [
          {
            type: 'p',
            text: '您有权访问、更正或删除您的个人信息。如需行使这些权利，请通过contact@chronodivide.com联系我们。',
          },
        ],
      },
      {
        heading: '6. 联系我们',
        blocks: [
          {
            type: 'p',
            text: '如果您对本隐私政策有任何疑问，请通过contact@chronodivide.com联系我们。',
          },
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie政策',
    heading: '红色井界™ Cookie政策',
    updated: '最后更新日期：2024年4月1日',
    sections: [
      {
        heading: '1. 什么是Cookie？',
        blocks: [
          {
            type: 'p',
            text: 'Cookie是存储在您计算机或移动设备上的小型文本文件。它们使网站能够记住您的操作和偏好（如登录、语言、字体大小和其他显示偏好）以便您每次访问该网站时不必再次设置这些偏好。',
          },
        ],
      },
      {
        heading: '2. 我们如何使用Cookie',
        blocks: [
          { type: 'p', text: '我们使用Cookie出于多种目的，包括：' },
          {
            type: 'ul',
            items: [
              '保持您的登录状态',
              '记住您的游戏设置和偏好',
              '记住您手动选择的界面语言',
              '收集关于您如何与我们的网站互动的信息',
              '提高我们网站的功能和性能',
              '分析和测量我们网站流量和使用情况',
            ],
          },
        ],
      },
      {
        heading: '3. 我们使用的Cookie类型',
        blocks: [
          {
            type: 'h4',
            heading: '必要Cookie',
            text: '这些Cookie对于网站的运行至关重要，您不能在我们的系统中关闭它们。它们通常只是为了响应您的操作而设置，如填写表格、设置您的隐私偏好、登录或购物车功能。',
          },
          {
            type: 'h4',
            heading: '性能Cookie',
            text: '这些Cookie使我们能够统计访问量和流量来源，以便我们可以衡量和改进我们网站的性能。它们帮助我们了解哪些页面最受欢迎和最不受欢迎，以及访问者如何在网站上移动。',
          },
          {
            type: 'h4',
            heading: '功能性Cookie',
            text: '这些Cookie使网站能够提供增强的功能和个性化。它们可能由我们或我们已经添加到页面上的第三方提供商设置。如果您不允许这些Cookie，那么这些服务可能无法正常工作。',
          },
          {
            type: 'h4',
            heading: '定向Cookie',
            text: '这些Cookie可能由我们的广告合作伙伴通过我们的网站设置。这些公司可能使用它们来建立您的兴趣档案，并在其他网站上向您展示相关广告。',
          },
        ],
      },
      {
        heading: '4. 如何管理Cookie',
        blocks: [
          { type: 'p', text: '大多数网络浏览器允许您通过浏览器设置控制Cookie。您可以：' },
          {
            type: 'ul',
            items: [
              '查看您的浏览器中存储的Cookie',
              '允许或阻止Cookie',
              '设置浏览器通知您何时收到Cookie',
              '删除Cookie',
            ],
          },
          {
            type: 'p',
            text: '请注意，删除或阻止Cookie可能会影响您在我们网站上的体验，某些功能可能无法正常工作。',
          },
        ],
      },
      {
        heading: '5. 联系我们',
        blocks: [
          {
            type: 'p',
            text: '如果您对我们的Cookie政策有任何疑问，请通过contact@chronodivide.com联系我们。',
          },
        ],
      },
    ],
  },
  tos: {
    title: '服务条款',
    heading: '红色井界™ 服务条款',
    updated: '最后更新日期：2024年4月1日',
    sections: [
      {
        heading: '1. 接受条款',
        blocks: [
          {
            type: 'p',
            text: '通过使用红色井界™，您同意受本服务条款的约束。如果您不同意这些条款，请勿使用我们的服务。',
          },
        ],
      },
      {
        heading: '2. 服务描述',
        blocks: [
          {
            type: 'p',
            text: '红色井界™是一款基于浏览器的实时战略游戏，允许用户在各种设备上进行游戏。我们可能会不时更新、修改或暂时中断服务，恕不另行通知。',
          },
        ],
      },
      {
        heading: '3. 用户账户',
        blocks: [
          { type: 'p', text: '您可能需要创建账户才能使用某些功能。您同意：' },
          {
            type: 'ul',
            items: [
              '提供准确、完整和最新的信息',
              '保护您的账户安全，包括密码',
              '对您账户下的所有活动负责',
              '遵守所有适用的法律和规定',
            ],
          },
        ],
      },
      {
        heading: '4. 用户行为',
        blocks: [
          { type: 'p', text: '您同意不会：' },
          {
            type: 'ul',
            items: [
              '以任何可能损害、禁用或过度负担我们服务的方式使用我们的服务',
              '使用任何机器人、爬虫或其他自动化方式访问我们的服务',
              '尝试获取未经授权的访问',
              '干扰或中断服务或与服务相连的服务器',
              '传播恶意软件或其他有害代码',
              '骚扰、威胁或伤害其他用户',
            ],
          },
        ],
      },
      {
        heading: '5. 知识产权',
        blocks: [
          {
            type: 'p',
            text: '红色井界™及其内容（包括但不限于文本、图形、徽标、按钮图标、图像、音频剪辑、数据编辑和软件）是RA2WEB LTD的财产，受国际版权法保护。未经我们明确许可，您不得复制、修改、分发我们的内容。',
          },
        ],
      },
      {
        heading: '6. 免责声明',
        blocks: [
          {
            type: 'p',
            text: '我们的服务按"原样"提供，不附带任何形式的明示或暗示的保证。我们不保证服务将不间断、及时、安全或无错误，也不保证通过使用服务获得的结果将准确或可靠。',
          },
        ],
      },
      {
        heading: '7. 责任限制',
        blocks: [
          {
            type: 'p',
            text: '在法律允许的最大范围内，RA2WEB LTD及其员工、管理人员、董事、代理人、供应商或许可方对因使用或无法使用我们的服务而导致的任何直接、间接、偶然、特殊、后果性或惩罚性损害不承担责任。',
          },
        ],
      },
      {
        heading: '8. 条款修改',
        blocks: [
          {
            type: 'p',
            text: '我们可能会不时修改这些条款。修改后的条款将在我们的网站上发布时生效。您继续使用我们的服务即表示您同意修改后的条款。',
          },
        ],
      },
      {
        heading: '9. 联系我们',
        blocks: [
          {
            type: 'p',
            text: '如果您对这些条款有任何疑问，请通过contact@chronodivide.com联系我们。',
          },
        ],
      },
    ],
  },
  patchNotes: {
    title: '更新日志',
    heading: '游戏更新记录',
    version: '版本 {version}',
    latest: '最新版本',
    entries: [
      {
        version: '1.0.5',
        date: '2025-03-25',
        changes: [
          '修复了多人游戏中偶尔出现的同步问题',
          '优化了移动设备上的触控操作',
          '增加了新地图：红色峡谷',
          '改进了AI对单位的微操控制',
        ],
      },
      {
        version: '1.0.4',
        date: '2025-02-15',
        changes: [
          '加入了录像回放功能',
          '优化了游戏加载速度',
          '修复了部分单位技能错误的问题',
          '调整了平衡性：弱化了苏联的磁暴坦克，增强了盟军的幻影坦克',
        ],
      },
      {
        version: '1.0.3',
        date: '2025-01-20',
        changes: [
          '增加了自定义游戏设置选项',
          '优化了网络连接稳定性',
          '修复了一些与UI相关的问题',
          '改进了游戏内聊天系统',
        ],
      },
      {
        version: '1.0.2',
        date: '2024-12-12',
        changes: [
          '增加了单人游戏挑战模式',
          '修复了若干崩溃问题',
          '优化了高分辨率下的显示效果',
          '增加了新的成就系统',
        ],
      },
      {
        version: '1.0.1',
        date: '2024-11-10',
        changes: [
          '修复了多个游戏平衡性问题',
          '改进了移动设备上的操作体验',
          '增加了游戏内教程',
          '优化了游戏性能',
        ],
      },
      {
        version: '1.0.0',
        date: '2024-10-01',
        changes: [
          '游戏正式发布',
          '支持跨平台游玩',
          '多人游戏对战功能',
          '单人游戏AI对战',
          '经典红警2单位和建筑',
        ],
      },
    ],
  },
};
