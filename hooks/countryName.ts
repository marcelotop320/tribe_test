import currencyCodes from 'currency-codes';

export const getCountry = (currency: string) => {
    return currencyCodes.code(currency)?.countries.join(" , ");
}