export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number; // Rate relative to USD
}

export interface Price {
  amount: number;
  currency: Currency;
}