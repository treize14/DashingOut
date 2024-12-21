import React from 'react';
import { Select } from './Select';
import { currencies, CurrencyCode } from '../../utils/currencies';
import { useCurrency } from '../../contexts/CurrencyContext';

export function CurrencySelect() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
      className="w-32"
    >
      {Object.entries(currencies).map(([code, { name }]) => (
        <option key={code} value={code}>
          {code} - {name}
        </option>
      ))}
    </Select>
  );
}