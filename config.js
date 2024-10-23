/**
 * Author Ares DN
 *
 * Website: https://www.iskydn.online
 *
 */

const assert = require("assert");
const {
  PAYPAL_MODE,
  DOMAIN,
  TITLE_SITE,
  CONTACT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_LOGO,
  IS_PLAY_SPOT,
  SO_GIAY_DEM_NGUOC,
  RATE_NHA_THUONG,
  BET_MAX,
  BINANCE_APIKEY,
  BINANCE_APISECRET,
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  DATA_HOST,
  DATA_USER,
  DATA_PASS,
  DATA_DB,
  DATA_PORT,
  TOKEN_KEY,
} = process.env;

assert(DATA_USER);
assert(DATA_PASS);
assert(DATA_DB);

module.exports = {
  USE_SSL: true,
  CF_SSL: {
    key: "certs/panazic.key",
    cert: "certs/panazic.crt",
  },

  DOMAIN: DOMAIN ?? "https://fionech.net",
  TITLE_SITE: TITLE_SITE ?? "FIONEECH",
  CONTACT: CONTACT ?? "CEO@finoech.net",

  MAIL_USERNAME: MAIL_USERNAME ?? "tqpcode@gmail.com",
  MAIL_PASSWORD: MAIL_PASSWORD ?? "xwlkgjeneathjyfl",
  MAIL_LOGO: MAIL_LOGO ?? "https://fionech.net//img/logo.87c4ea28.png",
  MAIL_IMG_FOOTER: MAIL_LOGO ?? "https://fionech.net//img/logo.87c4ea28.png",

  IS_PLAY_SPOT: IS_PLAY_SPOT ?? true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

  SO_GIAY_DEM_NGUOC: SO_GIAY_DEM_NGUOC ?? 30,
  RATE_NHA_THUONG: RATE_NHA_THUONG ?? 95,
  BET_MAX: BET_MAX ?? 1,

  BINANCE_APIKEY:
    BINANCE_APIKEY ??
    "srBGjy1ATl33Lzb5ZmeXneanYnygQw3QRCGNq0zKV9vvPM5O95CjV8aNX9C9HCUZ",
  BINANCE_APISECRET:
    BINANCE_APISECRET ??
    "AVoHbbQcrOuUhdvkhdxyGuTk9FJlTJBgH02LPwA9TcUxxMCTnF8p1WL3ZPWw4C1T",

  // THANH TOÁN PAYPAL
  //PAYPAL_MODE: 'live', //sandbox or live
  //PAYPAL_CLIENT_ID: 'AbubWI5Cc-21tFJnqK7B6cFuSa2es3nqJYY0McPI9EBLiCyDQjJEJ7_vUcZTBNdiHVhfOEWUsTPL0mcf',//'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',
  //PAYPAL_CLIENT_SECRET: 'EFX50IOpCcqREF8npYA9iavGBvqeW8W7zZ1wfM_dn147xyelQyGwSa9U-WJrl44BrSmnj7JFNqMcY8fk',//'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',

  PAYPAL_MODE: PAYPAL_MODE ?? "sandbox", //sandbox or live
  PAYPAL_CLIENT_ID:
    PAYPAL_CLIENT_ID ??
    "AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p", //'',
  PAYPAL_CLIENT_SECRET:
    PAYPAL_CLIENT_SECRET ??
    "EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_", //'',
  // KẾT THÚC THANH TOÁN PAYPAL

  DATA_HOST: DATA_HOST ?? "localhost",
  DATA_USER: DATA_USER ?? "root",
  DATA_PASS: DATA_PASS ?? "7020fe0a-8044-449f-8e53-29ce495ebc4a",
  DATA_DB: DATA_DB ?? "tqpcode",
  DATA_PORT: DATA_PORT ?? 3306,

  PORT_TRADE: 2096, // default 443 ssl
  PORT_SYS: 2087,
  PORT_NAP: 2083,
  PORT_NOTIFY: 2053,
  PORT_SERVER: 2001,

  TOKEN_KEY: TOKEN_KEY ?? "AAGPHg_1O65yS3w6ar1hK5ViendjRNa_pYY",
  // panazicbotrade2022pro
  // AAGPHg_1O65yS3w6ar1hK5ViendjRNa_pYY
  PATH_SYS_CONFIG: "stSys",
  PATH_SYS_COMMISSION: "stCommission",
  PATH_SYS_COMMISSION_VIP: "stCommissionVip",

  ABI_USDT_MAINNET: "USDT_BEP20_mainnet",
  ABI_USDT_TESTNNET: "USDT_BEP20_testnet",
};
