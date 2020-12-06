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
    formElements.map((el, i, arr) => {
      const { name, label, type } = el;
      const isPreviousElementHasError =
        i > 0 && errors[arr[i - 1].name] ? true : false; //condicion que dispara animacion de moverse hacia abajo del elemento
      return (
        <InputContainer isError={isPreviousElementHasError} key={i}>
          <label className="font-c-primary margin-b-1">{label}</label>
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
  width: 85%;
  @media (min-width: 800px) {
    width: 70%;
  }
`;
const InputContainer = styled.div`
  transition: all 300ms ease;
  position: relative;
  margin-bottom: 10px;
  margin-top: ${({ isError }) => (isError ? '36px' : '0')};

  @media (min-width: 800px) {
    margin-top: 0;
    width: 80%;
  }
`;
const ErrorContainer = styled.div`
  position: absolute;
  top: 62px;
  @media (min-width: 800px) {
    width: 50%;
    top: 25px;
    left: 399px;
  }
`;
const ErrorSpan = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.terciary};
`;
