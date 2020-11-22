import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import contactFormSchema from '../helpers/contactFormSchema';

const formElements = [
  {
    name: 'name',
    label: 'Nombre',
    type: 'input',
  },
  {
    name: 'lastname',
    label: 'Apellido',
    type: 'input',
  },
  {
    name: 'email',
    label: 'Correo electrónico',
    type: 'input',
  },
  {
    name: 'message',
    label: 'Mensaje',
    type: 'textarea',
  },
];
const ContactForm = () => {
  const formMapJSX = errors =>
    formElements.map(el => {
      const { name, label, type } = el;
      return (
        <InputContainer className="w-80">
          <label className="font-c-secondary margin-b-1">{label}</label>
          <FieldContainer>
            <Field
              as={type}
              name={name}
              type="text"
              className={`margin-b-1 ${errors[name] ? 'input-error' : null}`}
            />
          </FieldContainer>
          <ErrorMessage name={name}>
            {msg => (
              <ErrorContainer>
                <ErrorSpan>{msg}</ErrorSpan>
              </ErrorContainer>
            )}
          </ErrorMessage>
        </InputContainer>
      );
    });

  return (
    <Formik validationSchema={contactFormSchema} initialValues={{ name: '' }}>
      {({ errors }) => <StyledForm>{formMapJSX(errors)}</StyledForm>}
    </Formik>
  );
};

export default ContactForm;

const FieldContainer = styled.div`
  margin-top: 5px;
`;

const StyledForm = styled(Form)`
  width: 70%;
`;
const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const ErrorContainer = styled.div`
  position: absolute;
  width: 50%;
  top: 25px;
  left: 399px;
`;
const ErrorSpan = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.terciary};
`;
