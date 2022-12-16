import Yup from "./yup";




export const schema = Yup.object().shape({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email('Formato de email inválido').required(),
    address1: Yup.string().required(),
    address2: Yup.string(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipCode: Yup.string().required(),
    number: Yup.string().required(),
    nameOnCard: Yup.string().required(),
    expDate: Yup.string()
        .required()
        .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, 'Validade do cartão incorreta')
        .min(
            7,
            'Data de validade deve conter mês com 2 dígitos e ano com 4 dígitos',
        ),
    cvc: Yup.string().max(3).min(3).required(),

});