import * as Yup from 'yup';

const messages = {
  longText: 'muy corto',
  shortText: 'demasiado largo',
  invalidText: 'Formato invalido, solo letras, sin espacios ni números',
  required: 'es requerido',
};
export default Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-zñÑ]+$/, messages.invalidText)
    .min(2, `Nombre ${messages.shortText}`)
    .max(70, `Nombre ${messages.longText}`)
    .required(`Nombre ${messages.required}`),
  lastname: Yup.string()
    .matches(/^[a-zA-zñÑ]+$/, messages.invalidText)
    .min(2, `Apellido ${messages.shortText}`)
    .max(70, `Apellido ${messages.longText}`)
    .required(`Apellido ${messages.required}`),

  email: Yup.string()
    .email('Email debe ser válido')
    .required('Tu email es requerido'),
  message: Yup.string().min(2, 'Tu mensaje es muy corto').optional(),
});
