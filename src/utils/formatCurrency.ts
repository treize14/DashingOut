import { currencies, CurrencyCode } from './currencies';

export function formatCurrency(
  amount: number,
  currencyCode: CurrencyCode = 'NGN'
): string {
  const currency = currencies[currencyCode];
  const localAmount = amount * currency.exchangeRate;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol',
  }).format(localAmount);
}

export function convertToLocalAmount(
  usdAmount: number,
  currencyCode: CurrencyCode = 'NGN'
): number {
  return usdAmount * currencies[currencyCode].exchangeRate;
}

export function convertToUSD(
  localAmount: number,
  currencyCode: CurrencyCode = 'NGN'
): number {
  return localAmount / currencies[currencyCode].exchangeRate;
}