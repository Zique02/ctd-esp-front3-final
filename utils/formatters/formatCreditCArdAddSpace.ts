export function formatCreditCardAddSpace(value: string) {
    let valueFormatted = value.replace(/[^\d]/g, '');

    valueFormatted = valueFormatted.replace(/(\d{4})(\d)/, '$1 $2');
    valueFormatted = valueFormatted.replace(/(\d{4})(\d)/, '$1 $2');
    valueFormatted = valueFormatted.replace(/(\d{4})(\d)/, '$1 $2');

    if (valueFormatted.length > 19) {
        valueFormatted = valueFormatted.substring(0, valueFormatted.length - 1);
    }

    return valueFormatted;
}