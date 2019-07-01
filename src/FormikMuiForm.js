import React, { useRef } from 'react';
//import { TextField } from '@material-ui/core';
import { Field, withFormik } from 'formik';
import { TextField } from 'formik-material-ui';

// using submit approach described here:
// https://github.com/jaredpalmer/formik/issues/556

const FormikMuiForm = () => {
  const formElement = useRef(null);

  const InnerForm = withFormik({
    mapPropsToValues: () => ({}),
    handleSubmit: () => {
      formElement.current.submit();
    }
  })(({ handleSubmit }) => (
    <form
      method="POST"
      action="/api/posttarget"
      onSubmit={handleSubmit}
      ref={formElement}
    >
      <Field
        type="text"
        name="text"
        placeholder="Enter info here"
        component={TextField}
      />
      <button type="submit">Submit</button>
    </form>
  ));

  return <InnerForm />;
};

export default FormikMuiForm;
