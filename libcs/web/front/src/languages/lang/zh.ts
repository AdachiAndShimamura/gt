export namespace zh {
  export const susage = {
    // 通用设置

    Config: "加载配置文件的路径",
    Addr: "要侦听的地址。支持值如：'80'、':80' 或 '0.0.0.0:80'",
    TLSAddr: "用于 TLS 侦听的地址。支持值如：'443'、':443' 或 '0.0.0.0:443'",
    TLSMinVersion: "TLS 的最小版本。支持的值：tls1.1、tls1.2、tls1.3",
    CertFile: "证书文件的路径",
    KeyFile: "密钥文件的路径",
    WebAddr: "Web服务地址，默认地址为：127.0.0.1:8000，当地址为0.0.0.0:8000时，可以向外部网络主机提供服务",

    IDs: "用户 ID",
    Secrets: "用户 ID 的密钥",
    Users: "要加载的用户 YAML 文件",
    AuthAPI: "用于验证用户 ID 和密钥的 API",
    AllowAnyClient: "允许任何GT-Client连接到服务器",
    TCPRanges: "TCP 端口范围，如 1024-65535",
    TCPNumber: "允许为每个 ID 打开的 TCP 端口数",
    Speed: "客户端每秒可传输的最大字节数",
    Connections: "客户端的隧道连接的最大数目",
    ReconnectTimes: "客户端重新连接失败的最大次数",
    ReconnectDuration: "在失败的重新连接次数达到最大次数后，客户端无法连接的时间",
    HostNumber: "用户可以启动的基于主机的服务的数量",
    HostRegex: "用户启动的主机前缀必须符合其中一条规则",
    HostWithID: "主机的前缀将成为 id-host 的形式",

    HTTPMUXHeader: "要使用的 HTTP 多路复用头部",
    MaxHandShakeOptions: "握手选项的最大数目",

    Timeout: "连接的超时时间。支持值如 '30s'、'5m'",
    TimeoutOnUnidirectionalTraffic: "当流量是单向时会发生超时",

    APIAddr: "用于内部 API 服务侦听的地址。支持值如：'8080'、':8080' 或 '0.0.0.0:8080'",
    APICertFile: "API TLS 证书文件路径",
    APIKeyFile: "密钥文件的路径",
    APITLSMinVersion: "TLS 的最小版本。支持的值：tls1.1、tls1.2、tls1.3",

    STUNAddr: "用于 STUN 服务侦听的地址。支持值如：'3478'、':3478' 或 '0.0.0.0:3478'",
    STUNLogLevel: "日志级别：trace、debug、info、warn、error、disable",

    SNIAddr: "用于原始 TLS 代理侦听的地址。主机来自服务器名称指示。支持值如：'443'、':443' 或 '0.0.0.0:443'",

    SentryDSN: "要使用的 Sentry DSN",
    SentryLevel: 'Sentry 级别：trace、debug、info、warn、error、fatal、panic（默认 ["error", "fatal", "panic"]）',
    SentrySampleRate: "Sentry 事件提交的采样率：[0.0 - 1.0]",
    SentryRelease: "要与事件一起发送的 Sentry 版本",
    SentryEnvironment: "要与事件一起发送的 Sentry 环境",
    SentryServerName: "要报告的 Sentry 服务器名称",
    SentryDebug: "Sentry 调试模式，将打印调试信息以帮助您了解 Sentry 的操作",

    LogFile: "保存日志文件的路径",
    LogFileMaxSize: "日志文件的最大大小",
    LogFileMaxCount: "日志文件的最大数量",
    LogLevel: "日志级别：trace、debug、info、warn、error、fatal、panic、disable",
    Version: "显示此程序的版本",

    tcp: {
      Range: "TCP 端口范围",
      Number: "TCP 端口数",
      PortRange: "TCP 端口范围",
      usedPort: "已使用的 TCP 端口"
    },
    user: {
      ID: "用户 ID", // 用于映射键的标识
      Secret: "用户密钥",
      TCPs: "用户 TCP 端口",
      Speed: "用户的字节速度限制",
      Connections: "用户的最大连接数",
      Host: "用户主机",
      temp: "用户临时"
    },
    host: {
      Number: "主机数量",
      RegexStr: "主机正则表达式字符串",
      Regex: "主机正则表达式",
      WithID: "携带ID",
      usedHost: "已使用的主机"
    }
  };
  export const cusage = {
    // 通用设置
    Config: "要加载的配置文件路径",
    ID: "用于连接服务器的唯一标识",
    Secret: "用于验证标识的密钥",
    ReconnectDelay: "重新连接之前的延迟。支持值如 '30s'、'5m'",
    Remote: "GT-Server的 URL。支持 tcp:// 和 tls://，默认为 tcp://",
    RemoteSTUN: "STUN 服务器地址",
    RemoteAPI: "获取GT-Server URL 的 API",
    RemoteCert: "证书的文件路径",
    RemoteCertInsecure: "接受自签名的 SSL 证书",
    RemoteConnections: "连接池中的服务器连接的最大数量。有效值为 1 到 10",
    RemoteIdleConnections: "保持在连接池中的空闲服务器连接数",
    RemoteTimeout: "远程连接的超时时间。支持值如 '30s'、'5m'",
    Version: "显示此程序的版本",
    WebAddr: "Web服务地址，默认地址为：127.0.0.1:7000，当地址为0.0.0.0:7000时，可以向外部网络主机提供服务",

    // 服务设置
    HostPrefix: "服务器将识别此主机前缀并将数据转发到本地",
    RemoteTCPPort: "GT-Server将打开的 TCP 端口",
    RemoteTCPRandom: "GT-Server是否随机选择一个端口",
    Local: "本地服务的 URL",
    LocalURL: "本地服务的 URL",
    LocalTimeout: "本地连接的超时时间。支持值如 '30s'、'5m'",
    UseLocalAsHTTPHost: "使用本地主机作为GT-Server主机",

    // Sentry 设置
    SentryDSN: "要使用的 Sentry DSN",
    SentryLevel: 'Sentry 级别：trace、debug、info、warn、error、fatal、panic（默认 ["error", "fatal", "panic"]）',
    SentrySampleRate: "Sentry 事件提交的采样率：[0.0 - 1.0]",
    SentryRelease: "要与事件一起发送的 Sentry 版本",
    SentryEnvironment: "要与事件一起发送的 Sentry 环境",
    SentryServerName: "要报告的 Sentry 服务器名称",
    SentryDebug: "Sentry 调试模式，将打印调试信息以帮助您了解 Sentry 的操作",

    // WebRTC 设置
    WebRTCConnectionIdleTimeout: "WebRTC 连接的超时时间。支持值如 '30s'、'5m'",
    WebRTCLogLevel: "WebRTC 日志级别：verbose、info、warning、error",
    WebRTCMinPort: "WebRTC 对等连接的最小端口",
    WebRTCMaxPort: "WebRTC 对等连接的最大端口",

    // TCP 转发设置
    TCPForwardAddr: "TCP 转发的地址",
    TCPForwardHostPrefix: "TCP 转发的主机前缀",
    TCPForwardConnections: "连接池中的 TCP 转发对等连接的最大数量。有效值为 1 到 10",

    // 日志设置
    LogFile: "保存日志文件的路径",
    LogFileMaxSize: "日志文件的最大大小",
    LogFileMaxCount: "日志文件的最大数量",
    LogLevel: "日志级别：trace、debug、info、warn、error、fatal、panic、disable",
    SelectLogLevel: "请选择日志等级"
  };
  export const sconfig = {
    WebAddr: "Web 服务地址",
    APIAddr: "API 地址",
    APITLSMinVersion: "API TLS 最小版本",
    APICertFile: "API 证书文件",
    APIKeyFile: "API 密钥文件",
    Speed: "传输速度",
    Connections: "连接数",
    ReconnectTimes: "重连次数",
    ReconnectDuration: "重连时间间隔",
    Timeout: "超时时间",
    TimeoutOnUnidirectionalTraffic: "单向流量超时",
    Users: "用户",
    AuthAPI: "认证 API",
    TCPNumber: "TCP 端口数",
    HostNumber: "主机数",
    WithID: "携带 ID",
    HostRegex: "主机正则表达式",
    Done: "完成",
    Addr: "地址",
    TLSAddr: "TLS 地址",
    TLSMinVersion: "TLS 最小版本",
    STUNAddr: "STUN 地址",
    STUNLogLevel: "STUN 日志级别",
    SNIAddr: "SNI 地址",
    HTTPMUXHeader: "HTTP 多路复用头",
    MaxHandShakeOptions: "最大握手选项",
    CertFile: "证书文件",
    KeyFile: "密钥文件",
    AllowAnyClient: "允许任意GT-Client",
    TCPRanges: "TCP 端口范围",
    Operation: "操作",
    Add: "添加",
    ID: "ID",
    Secret: "密钥",
    Edit: "编辑",
    Delete: "删除",
    AddUser: "添加用户",
    ConnectionSetting: "连接设置",
    GeneralSetting: "通用设置",
    SecuritySetting: "安全设置",
    NetworkSetting: "网络设置",
    APISetting: "API设置",
    HostSetting: "主机设置",
    TCPSetting: "TCP设置",
    LogSetting: "日志设置",
    SentrySetting: "Sentry设置",
    User: "用户",
    Setting: "设置",
    Submit: "提交",
    GetFromFile: "获取配置",
    AddService: "添加服务",
    DetailSettings: "更多配置项",
    BasicSettings: "基本配置",
    OptionSettings: "可选配置",
    //server config form index
    AddTcpRanges: "请添加TCP端口范围",
    AddHostRegex: "请添加主机正则表达式",
    SelectApiTLSMin: "请选择API的最小TLS版本",
    SelectTLSMin: "请选择最小TLS版本",
    SelectSTUNLogLevel: "请选择STUN日志等级",

    IDConflictError: "用户设置中存在ID冲突，请检查。",
    SaveConfigConfirm: "确认是否保存配置文件",
    SaveConfigTitle: "保存配置",
    SaveConfigConfirmBtn: "确认",
    SaveConfigCancelBtn: "取消",
    SubmitSuccess: "提交成功",
    FailedToSaveConfig: "无法保存配置文件！",

    GetFromFileConfirm:
      "确认是否从文件获取配置，如果无法从文件获取，则将从运行系统获取。注意：请确保所做的更改已保存，否则将被丢弃。",
    GetFromFileTitle: "获取配置",
    GetFromFileConfirmBtn: "确认",
    GetFromFileCancelBtn: "取消",
    GetFromFileSuccess: "配置获取成功",
    FailedToGetFromFile: "无法获取配置！"
  };

  export const cconfig = {
    ID: "ID",
    ReconnectDelay: "重连延迟",
    WebAddr: "Web 服务地址",
    RemoteTimeout: "GT-Server超时时间",
    Remote: "GT-Server地址",
    RemoteSTUN: "STUN 地址",
    RemoteAPI: "GT-Server API",
    RemoteCert: "GT-Server 证书",
    RemoteCertInsecure: "接受自签名证书",
    RemoteConnections: "GT-Server连接数",
    RemoteIdleConnections: "GT-Server空闲连接数",
    LogFile: "日志文件",
    LogFileMaxSize: "日志文件最大大小",
    LogFileMaxCount: "日志文件最大数量",
    LogLevel: "日志级别",
    SentryDSN: "Sentry DSN",
    SentryServerName: "Sentry 服务器名称",
    SentryLevel: "Sentry 日志级别",
    SentrySampleRate: "Sentry 事件提交采样率",
    SentryRelease: "Sentry 版本",
    SentryEnvironment: "Sentry 环境",
    SentryDebug: "Sentry 调试模式",
    HostPrefix: "主机前缀",
    RemoteTCPPort: "GT-Server TCP端口",
    RemoteTCPRandom: "GT-Server TCP随机端口",
    LocalURL: "本地 URL",
    LocalTimeout: "本地连接超时时间",
    UseLocalAsHTTPHost: "使用本地主机运行GT-Server",
    TcpForwardAddr: "TCP 转发地址",
    TcpForwardHostPrefix: "TCP 转发主机前缀",
    TcpForwardConnections: "TCP 转发连接数",
    WebRTCConnectionIdleTimeout: "WebRTC 连接空闲超时",
    WebRTCLogLevel: "WebRTC 日志级别",
    WebRTCMinPort: "WebRTC 最小端口",
    WebRTCMaxPort: "WebRTC 最大端口",
    GeneralSetting: "通用设置",
    LogSetting: "日志设置",
    SentrySetting: "Sentry设置",
    ServiceSetting: "服务设置",
    TCPForwardSetting: "TCP转发设置",
    WebRTCSetting: "WebRTC设置",
    Submit: "提交",
    GetFromFile: "获取配置",
    GetFromRunning: "从运行中获取",
    ReloadServices: "重新加载服务",
    AddService: "添加服务",
    Delete: "删除",
    Secret: "密钥",
    Service: "服务",
    Setting: "设置",
    DetailSettings: "更多配置项",
    AddNewRemote: "添加",
    BasicSettings: "基本配置",
    OptionSettings: "可选配置",
    false: "关闭",
    true: "开启",
    //sentences
    SelectWebRtcLogLevel: "选择日志等级",
    SaveConfigConfirm: "确保您要将配置保存到文件。",
    SaveConfigTitle: "保存配置",
    SaveConfigConfirmBtn: "确认",
    SaveConfigCancelBtn: "取消",
    OperationSuccess: "操作成功！",
    FailedOperation: "操作失败！",

    GetFromFileConfirm:
      "确保您要从文件获取配置，如果无法从文件获取，则将从运行系统获取。注意：请确保您所做的更改已保存，否则将被丢弃。",
    GetFromFileTitle: "获取配置",
    GetFromFileConfirmBtn: "确认",
    GetFromFileCancelBtn: "取消",

    ReloadServicesConfirm: "您需要确保您所做的更改仅在服务部分生效，并确保已保存，否则系统将不会重新加载服务。",
    ReloadServicesTitle: "重新加载服务",
    ReloadServicesConfirmBtn: "确认",
    ReloadServicesCancelBtn: "取消",
    InconsistentOptionsWarning: "您更改的选项与运行系统不一致！"
  };
  export const serror = {
    APISettingValidationFailed: "API设置验证失败，请检查输入！",
    APISettingNotReady: "API设置尚未准备好！",
    ConnectionSettingValidationFailed: "连接设置验证失败，请检查输入！",
    ConnectionSettingNotReady: "连接设置尚未准备好！",
    GeneralSettingValidationFailed: "常规设置验证失败，请检查您的输入！",
    GeneralSettingNotReady: "常规设置尚未准备好！",
    GeneralSettingValidationPassed: "常规设置验证通过！",
    PleaseInputHostNumber: "请输入主机编号",
    PleaseInputANumber: "请输入数字",
    PleaseInputHostRegex: "请输入主机正则表达式",
    PleaseInputAValidRegex: "请输入有效的正则表达式",
    PleaseCheckYourHostRegexInput: "请检查您的主机正则表达式输入",
    PleaseFinishEditingBeforeSubmit: "请在提交之前完成编辑",
    HostSettingValidationFailed: "主机设置验证失败，请检查您的输入",
    HostSettingNotReady: "主机设置尚未准备好",
    NetworkSettingValidationFailed: "网络设置验证失败，请检查您的输入！",
    NetworkSettingNotReady: "网络设置尚未准备好！",
    SecuritySettingValidationFailed: "安全设置验证失败，请检查您的输入！",
    SecuritySettingNotReady: "安全设置尚未准备好！",
    PleaseInputValidTCPRange: "请输入有效的TCP范围",
    PleaseCheckYourInput: "请检查您的输入",
    TCPSettingFormValidateFailed: "TCP设置表单验证失败，请检查您的输入",
    TCPSettingNotReady: "TCP设置尚未准备好",
    PleaseInputID: "请输入ID",
    PleaseInputSecret: "请输入Secret",
    UserSettingValidationFailed: "用户设置验证失败，请检查您的输入",
    UserSettingNotReady: "用户设置尚未准备好！",
    UserSettingValidationPassed: "用户设置验证通过！"
  };
  export const cerror = {
    PleaseInputRemoteIdleConnections: "请输入有效的RemoteIdleConnections",
    PleaseEnterValidRemote: "请输入有效的Remote地址！",
    PleaseEnterValidRemoteAPI: "请输入有效的RemoteAPI格式（http://或https://）",
    PleaseInputID: "请输入ID",
    PleaseInputSecret: "请输入Secret",
    PleaseInputRemoteConnections: "请输入RemoteConnections",
    PleaseInputRemoteConnectionsBetween1And10: "请输入1到10之间的RemoteConnections",
    PleaseInputRemoteOrRemoteAPI: "请输入Remote或RemoteAPI",
    PleaseInputLocalUrl: "请输入LocalUrl!",
    GeneralSettingValidationFailedCheckInput: "General Setting验证失败，请检查您的输入",
    GeneralSettingNotReady: "General Setting尚未准备好",
    GeneralSettingValidationPassed: "General Setting验证通过",
    LogSettingValidationFailedCheckInput: "日志设置验证失败，请检查输入",
    LogSettingNotReady: "日志设置未准备就绪",
    SentrySettingValidationFailedCheckInput: "SentrySetting验证失败，请检查输入",
    SentrySettingNotReady: "SentrySetting未准备就绪",
    LocalURLIsRequired: "LocalURL是必填项",
    RemoteTCPPortOrRandomRequired: "当LocalURL以tcp://开头时，RemoteTCPPort或RemoteTCPRandom选项应设置",
    ServiceSettingValidationFailedCheckInput: "服务设置验证失败，请检查输入",
    ServiceSettingNotReady: "服务设置尚未准备就绪",
    ServiceSettingValidationPassed: "ServiceSetting验证通过！",
    TCPForwardSettingValidationFailedCheckInput: "TCPForward设置验证失败，请检查输入",
    TCPForwardSettingNotReady: "TCPForward设置尚未准备就绪",
    WebRTCSettingValidationFailedCheckInput: "WebRTC设置验证失败，请检查输入",
    WebRTCSettingNotReady: "WebRTC设置尚未准备就绪"
  };

  export const view_home = {
    Runtime: "运行状态",
    Used: "已使用",
    Ram: "内存",
    Total: "总数",
    Core_Number: "核心数量",
    CPU: "处理器",
    Disk: "硬盘",
    os: "操作系统",
    cpu_num: "处理器线程数量",
    compiler: "编译器",
    go_version: "GO语言版本",
    goroutine_nums: "协程数量",
    core: "核心"
  };
  export const view_login = {
    Username: "用户名",
    Password: "密码",
    Login: "登录",
    Reset: "重设"
  };
  export const view_connection = {
    Server_Pool_Info: "服务器池信息",
    External_Connection: "外部连接"
  };
  export const layout_header = {
    UserSetting: "用户设置",
    Logout: "退出登录",
    RestartSystem: "重启系统",
    ShutdownSystem: "关闭系统",
    TerminateSystem: "终止系统",
    Username: "用户名",
    Password: "密码",
    Login: "登录",
    Reset: "重置",
    EnablePprof: "启用 Pprof",
    large: "大",
    default: "默认",
    small: "小",
    Home: "主页",
    DoneBtnText: "完成",
    CloseBtnText: "关闭",
    NextBtnText: "下一步",
    PrevBtnText: "上一步",
    SettingTheme: "主题设置",
    CollapseIconTitle: "折叠图标",
    CollapseIconDescription: "切换侧边栏的打开或关闭。",
    BreadcrumbTitle: "面包屑",
    BreadcrumbDescription: "指示当前页面位置",
    GuideTitle: "指南",
    GuideDescription: "引导用户使用系统",
    AssemblySizeTitle: "切换组件大小",
    AssemblySizeDescription: "调整系统的显示大小。",
    ThemeSettingTitle: "主题设置",
    ThemeSettingDescription: "自定义系统的主题。",
    FullScreenTitle: "全屏",
    FullScreenDescription: "进入或退出全屏模式。",
    UserTitle: "用户",
    UserDescription:
      "单击此处打开系统设置。<br/>首次启动时，系统会为您自动生成随机用户名和密码。 <strong>我们强烈建议您在30分钟内更新这些详细信息</strong> 以确保未来的登录顺利进行。",
    UsernameRequired: "请输入用户名",
    PasswordRequired: "请输入密码",
    ChangeInfoWarning: "您确定要更改帐户信息吗？如果要应用此新更改，请重新启动系统！",
    Warning: "警告",
    OK: "确定",
    Cancel: "取消",
    Change: "修改",
    ChangeInfoSuccess: "成功更改帐户信息",
    ChangeInfoFailure: "无法更改帐户信息",
    CancelChangeInfo: "取消更改帐户信息",
    ConfirmLogout: "确定要注销吗？",
    Tips: "提示",
    Confirm: "确定",
    ConfirmRestartSystem: "确定要重新启动系统吗？",
    RestartSuccess: "重新启动成功！",
    RestartFailed: "重新启动失败",
    RestartCanceled: "重新启动已取消",
    ConfirmShutdownSystem: "确定要关闭系统吗？",
    ShutdownSuccess: "关闭成功",
    ShutdownFailed: "关闭失败",
    ShutdownCanceled: "关闭已取消",
    ConfirmKillSystem: "确定要终止系统吗？",
    KillSuccess: "终止成功",
    KillFailed: "终止失败",
    KillCanceled: "终止已取消",
    LogoutSuccess: "注销成功"
  };
  export const layout_tabs = {
    Refresh: "刷新",
    Maximize: "最大化",
    CloseCurrentTab: "关闭当前标签页",
    CloseOtherTabs: "关闭其他标签页",
    CloseAllTabs: "关闭所有标签页",
    More: "更多"
  };
  export const layout_theme = {
    InvertedAsideColor: "反色侧边栏颜色",
    Theme: "主题",
    SwitchAside: "切换侧边栏至暗色模式",
    ThemeColor: "主题颜色",
    DarkMode: "深色模式",
    GreyMode: "灰度模式",
    ColorAccessibilityMode: "颜色辅助模式",
    UISettings: "UI 设置",
    CollapseMenu: "折叠菜单",
    Breadcrumb: "面包屑",
    BreadcrumbIcon: "面包屑图标",
    Tab: "标签页",
    TabIcon: "标签页图标",
    Footer: "页脚",
    Layout: "布局",
    LayoutSetting: "布局设置"
  };
  export const connection_table = {
    ID: "ID",
    Family: "协议族",
    Type: "类型",
    LocalAddress: "本地地址",
    RemoteAddress: "远程地址",
    Status: "状态",
    ConnectionPoolStatus: "连接池状态",
    Running: "运行中",
    Idle: "空闲",
    Wait: "等待"
  };
  export const result = {
    RequestFailed: "请求失败！请稍后重试。",
    LoginExpired: "登录已过期！请重新登录。",
    NoPermission: "您没有访问此资源的权限。",
    ResourceNotFound: "您尝试访问的资源不存在！",
    InvalidRequestMethod: "无效的请求方法！请稍后重试。",
    RequestTimedOut: "请求超时！请稍后重试。",
    InternalServerError: "内部服务器错误。",
    BadGateway: "网关错误。",
    ServiceUnavailable: "服务当前不可用。请稍后重试。",
    GatewayTimeout: "网关超时。服务器响应时间过长。",
    UnexpectedError: "发生了意外错误。请重试。"
  };
}