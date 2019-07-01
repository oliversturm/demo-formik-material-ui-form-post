import React from 'react';
import StandardForm from './StandardForm';
import FormikForm from './FormikForm';
import FormikMuiForm from './FormikMuiForm';

const Frame = ({ children, caption }) => (
  <div
    style={{ border: '1px solid grey', padding: '20px', marginBottom: '20px' }}
  >
    <h3>{caption}</h3>
    {children}
  </div>
);

const FormPage = () => (
  <>
    <Frame caption="Standard Form">
      <StandardForm />
    </Frame>
    <Frame caption="Formik Form with MUI TextField">
      <FormikForm />
    </Frame>
    <Frame caption="Formik Form with formik-material-ui TextField">
      <FormikMuiForm />
    </Frame>
  </>
);

export default FormPage;
