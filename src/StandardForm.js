import React from 'react';

const StandardForm = () => (
  <form method="POST" action="/api/posttarget">
    <input type="text" name="text" placeholder="Enter info here" />
    <button type="submit">Submit</button>
  </form>
);

export default StandardForm;
