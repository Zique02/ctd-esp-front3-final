export function formatCEP(cep: string) {
    let formattedCep = cep.replace(/\D/g, '');
    formattedCep = formattedCep.replace(/^(\d{2})(\d)/, '$1.$2');
    formattedCep = formattedCep.replace(/\.(\d{3})(\d)/, '.$1-$2');

    const cepLength = cep.length;

    if (cepLength > 10) {
        formattedCep = formattedCep.substring(0, cepLength - 1);
    }

    return formattedCep;
}