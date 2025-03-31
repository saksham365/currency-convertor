import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_sTPBwBH6L3Rb6ztC9tRnLX95eZtqPfaAZJAbWr5I');
currencyConvertor("USD", "INR", 5);

export async function currencyConvertor(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    // console.log(multiplier);
    return multiplier * units;
}

