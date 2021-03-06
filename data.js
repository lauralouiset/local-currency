/*
	Follows ISO 4217, https://www.iso.org/iso-4217-currency-codes.html
	See https://www.currency-iso.org/dam/downloads/lists/list_one.xml
	Data last updated 2020-06-30
*/

const localCurrencyData = {
  AED: {
    currency: 'Dirham',
    countryOfOrigin: 'United Arab Emirates',
    locale: 'ar-AE',
    symbol: 'د.إ',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  AFN: {
    countryOfOrigin: 'Afghanistan',
    currency: 'Afghani',
    symbol: '؋',
    locale: 'ps-AF',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  ALL: {
    countryOfOrigin: 'Albania',
    currency: 'Lek',
    plural: 'Lekë',
    symbol: 'L',
    locale: 'sq-AL',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  AMD: {
    countryOfOrigin: 'Armenia',
    currency: 'Dram',
    locale: 'hy-AM',
    symbol: '֏',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  ANG: {
    currency: 'Netherlands Antilles Guilder',
    locale: 'nl-CW',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
    countryOfOrigin: ['Curaçao', 'Sint Maartin'],
  },
  AOA: {
    countryOfOrigin: 'Angola',
    currency: 'Kwanza',
    locale: 'pt-AO',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  ARS: {
    countryOfOrigin: 'Argentina',
    currency: 'Peso',
    locale: 'es-AR',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  AUD: {
    countryOfOrigin: 'Australia',
    currency: 'Dollar',
    locale: 'en-AU',
    symbol: '$',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
  AWG: {
    countryOfOrigin: ['Aruba'],
    currency: 'Guilder',
    locale: '',
    symbol: 'ƒ',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },

  BBD: {
    countryOfOrigin: 'Barbados',
    currency: 'Dollar',
    plural: 'Dollars',
    symbol: '$',
    locale: 'en-BB',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BDT: {
    countryOfOrigin: 'Bangladesh',
    currency: 'Taka',
    locale: 'bn-BD',
    symbol: '৳',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BGN: {
    countryOfOrigin: 'Bulgaria',
    currency: 'Lev',
    symbol: 'лв',
    locale: 'bg-BG',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BHD: {
    countryOfOrigin: 'Bahrain',
    currency: 'Dinar',
    locale: 'ar-BH',
    symbol: '.د.ب',
    fractionDigits: 5,
  },
  BIF: {
    countryOfOrigin: 'Burundi',
    currency: 'Franc',
    locale: 'en-BI',
    symbol: 'Fr',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BMD: {
    countryOfOrigin: 'Bermuda',
    currency: 'Dollar',
    locale: 'en-BM',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BND: {
    countryOfOrigin: 'Brunei Darussalam',
    currency: 'Dollar',
    locale: 'ms-BN',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BOB: {
    countryOfOrigin: 'Bolivia',
    currency: 'Bolíviano',
    locale: 'es-BO',
    symbol: 'Bs.',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BSD: {
    countryOfOrigin: 'Bahamas',
    currency: 'Dollar',
    locale: 'en-BS',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BTN: {
    countryOfOrigin: 'Bhutan',
    currency: 'Ngultrum',
    locale: 'dz-BT',
    symbol: 'Nu.',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BWP: {
    countryOfOrigin: 'Botswana',
    currency: 'Pula',
    locale: 'en-BW',
    symbol: 'P',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BYN: {
    countryOfOrigin: 'Belarus',
    currency: 'Ruble',
    locale: 'ru-BY',
    symbol: 'Br',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  AZN: {
    countryOfOrigin: 'Azerbaijan',
    currency: 'Manat',
    locale: 'az-AZ',
    symbol: '₼',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BAM: {
    countryOfOrigin: 'Bosnia and Herzegovina',
    currency: 'Bosnia and Herzegovina Convertible Mark',
    locale: 'bs-BA',
    symbol: 'KM',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BRL: {
    countryOfOrigin: 'Brazil',
    currency: 'Real',
    locale: 'pt-BR',
    symbol: 'R$ ',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  BZD: {
    countryOfOrigin: 'Belize',
    currency: 'Dollar',
    symbol: 'BZ$',
    locale: 'pt-BR',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  CAD: {
    countryOfOrigin: 'Canada',
    currency: 'Dollar',
    locale: 'en-CA',
    symbol: '$',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
  CRC: {
    countryOfOrigin: 'Costa Rica',
    currency: 'Colon',
    locale: 'es-CR',
    symbol: '₡',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  CNY: {
    countryOfOrigin: 'China',
    currency: 'Yuan Renminbi',
    locale: 'zh-CN',
    symbol: '¥',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  },
  CUC: {
    countryOfOrigin: 'Cuba',
    currency: 'Convertible Peso',
    locale: 'es-CU',
    symbol: '$',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
  CUP: {
    countryOfOrigin: 'Cuba',
    currency: 'Peso',
    locale: 'es-CU',
    symbol: '$',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
  DKK: {
    countryOfOrigin: 'Denmark',
    currency: 'Krone',
    locale: 'da-DE',
    symbol: 'kr',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  },
  EUR: {
    countryOfOrigin: 'Euro Member Countries',
    currency: 'Euro',
    locale: 'de-DE',
    symbol: '€',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  FJD: {
    countryOfOrigin: 'Fiji',
    currency: 'Dollar',
    symbol: 'FJ$',
    locale: 'en-FJ',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  GBP: {
    countryOfOrigin: 'United Kingdom',
    currency: 'Pound',
    symbol: '£',
    locale: 'en-UK',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
  GTQ: {
    countryOfOrigin: 'Guatemala',
    currency: 'Quetzal',
    symbol: 'Q',
    locale: 'es-GT',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  HKD: {
    countryOfOrigin: 'Hong Kong',
    currency: 'Dollar',
    locale: 'zh-HK',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  HNL: {
    countryOfOrigin: 'Honduras',
    currency: 'Lempira',
    locale: 'es-HN',
    symbol: 'L',
  },
  INR: {
    countryOfOrigin: 'India',
    currency: 'Rupee',
    symbol: '₹',
    locale: 'hi-IN',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  },
  ISK: {
    countryOfOrigin: 'Iceland',
    currency: 'Krona',
    symbol: 'kr',
    locale: 'is-IS',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  JPY: {
    countryOfOrigin: 'Japan',
    currency: 'Yen',
    locale: 'ja-JP',
    symbol: '¥',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  },
  KPW: {
    countryOfOrigin: 'Korea (North)',
    currency: 'Won',
    locale: 'ko-KR',
    symbol: '₩',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  KRW: {
    countryOfOrigin: 'Korea (South)',
    currency: 'Won',
    locale: 'ko-KR',
    symbol: '₩',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  MXN: {
    countryOfOrigin: 'Mexico',
    currency: 'Peso',
    locale: 'es-MX',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  RUB: {
    countryOfOrigin: 'Russia',
    currency: 'Ruble',
    locale: 'ru-RU',
    symbol: '₽',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  SEK: {
    countryOfOrigin: 'Sweden',
    currency: 'Krona',
    locale: 'sv-SE',
    symbol: 'kr',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  SGD: {
    countryOfOrigin: 'Singapore',
    currency: 'Dollar',
    locale: 'zh-SG',
    symbol: '$',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  SYP: {
    countryOfOrigin: 'Syria',
    currency: 'Pound',
    locale: 'ar-SY',
    symbol: '£S',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  THB: {
    countryOfOrigin: 'Thailand',
    currency: 'Baht',
    locale: 'th-TH',
    symbol: '฿',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  TJS: {
    countryOfOrigin: 'Tajikistan',
    currency: 'Somoni',
    locale: 'tg-TJ',
    symbol: 'SM',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  TMT: {
    countryOfOrigin: 'Turkmenistan',
    currency: 'Manat',
    locale: 'tk-TM',
    symbol: 'm',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  TRY: {
    countryOfOrigin: 'Turkey',
    currency: 'Lira',
    locale: 'tr-TR',
    symbol: '₺',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  TZS: {
    countryOfOrigin: 'Tanzania',
    currency: 'Shilling',
    locale: 'sw-TZ',
    symbol: 'Sh',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  UAH: {
    countryOfOrigin: 'Ukraine',
    currency: 'Hryvnia',
    locale: 'uk-UA',
    symbol: '₴',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  UGX: {
    countryOfOrigin: 'Uganda',
    currency: 'Shilling',
    locale: 'lg-UG',
    symbol: 'USh',
    maximumFractionDigits: 2,
    // minimumFractionDigits: 2,
  },
  USD: {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'Dollar',
    locale: 'en-US',
    symbol: '$',
    countryOfOrigin: 'United States',
  },
  ZAR: {
    currency: 'Rand',
    locale: 'en-ZA',
    symbol: 'R',
    countryOfOrigin: 'South Africa',
    // minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
}

const localizedCurrency = (currencyCode, amount, display = 'symbol') => {
  const currency = localCurrencyData[currencyCode]

  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: display,
    // minimumFractionDigits: currency.minimumFractionDigits,
    maximumFractionDigits: currency.maximumFractionDigits,
  }).format(amount)
}

const intlCurrency = (currencyCode, amount, locale, display = 'symbol') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: display,
  }).format(amount)
}

const costaRica = localizedCurrency('AUD', 300.43)

console.log(Object.keys(localCurrencyData).length)
