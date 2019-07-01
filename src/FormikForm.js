import React, { useRef } from 'react';
import { TextField } from '@material-ui/core';
import { withFormik } from 'formik';

// using submit approach described here:
// https://github.com/jaredpalmer/formik/issues/556

const FormikForm = () => {
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
      <TextField type="text" name="text" placeholder="Enter info here" />
      <button type="submit">Submit</button>
    </form>
  ));

  return <InnerForm />;
};

export default FormikForm;
