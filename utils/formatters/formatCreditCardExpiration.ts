export function formatCreditCardExpiration(value: string) {
    let valueFormatted = value.replace(/\D/g, '');
    valueFormatted = valueFormatted.replace(/(\d{2})(\d)/, '$1/$2');

    if (valueFormatted.length > 7) {
        valueFormatted = valueFormatted.substring(0, valueFormatted.length - 1);
    }

    return valueFormatted;
}