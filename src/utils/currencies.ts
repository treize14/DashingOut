// Common African currencies
export const currencies = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    exchangeRate: 1550, // Example rate: 1 USD = 1550 NGN
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    name: 'Kenyan Shilling',
    exchangeRate: 130, // Example rate: 1 USD = 130 KES
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    name: 'South African Rand',
    exchangeRate: 19, // Example rate: 1 USD = 19 ZAR
  },
  GHS: {
    code: 'GHS',
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    exchangeRate: 12.5, // Example rate: 1 USD = 12.5 GHS
  },
  UGX: {
    code: 'UGX',
    symbol: 'USh',
    name: 'Ugandan Shilling',
    exchangeRate: 3800, // Example rate: 1 USD = 3800 UGX
  },
} as const;

export type CurrencyCode = keyof typeof currencies;