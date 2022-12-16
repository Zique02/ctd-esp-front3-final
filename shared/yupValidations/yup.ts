/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

const locale = {
    mixed: {
        default: 'Campo inválido',
        required: 'Campo obrigatório',
        notType: 'Campo inválido',
        oneOf: 'Este campo não corresponde',
        max: 'Esse campo deve ter no máximo ${max} caracteres',
        min: 'Esse campo deve ter no mínimo ${min} caracteres',
    },
    string: {
        email: 'Esse campo precisa ser um email válido',
        max: 'Esse campo deve ter no máximo ${max} caracteres',
        min: 'Esse campo deve ter no mínimo ${min} caracteres',
    },
    number: {
        max: 'Esse campo deve ter no máximo ${max} caracteres',
        min: 'Esse campo deve ter no mínimo ${min} caracteres',
    },
};

Yup.setLocale(locale);

export default Yup;