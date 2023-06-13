import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import axios from 'axios';

const years = Array.from({length: 21}, (_, i) => new Date().getFullYear() - i);

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 2%;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 100%;
`;

const StyledField = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007b5e;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2a9d8f;
  }
`;

const MyForm = () => {
  const submitForm = (values) => {
    axios.post('/api/admin/uploadInventory', values)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={{
        model: '',
        make: '',
        year: '',
        powerType: '',
        capacity: '',
        new: false,
        lifted: false,
        streetLegal: false,
        images: ''
      }}
      onSubmit={submitForm}
    >
      <StyledForm>
        <StyledLabel>
          Model:
          <StyledField as="select" name="model">
            <option value="">Select</option>
            <option value="Bintelli">Bintelli</option>
            <option value="Icon">Icon</option>
            <option value="Vivid">Vivid</option>
            <option value="Moke">Moke</option>
            <option value="Tomberlin">Tomberlin</option>
            <option value="EZ-GO">EZ-GO</option>
          </StyledField>
        </StyledLabel>

        <StyledLabel>
          Make:
          <StyledField as="select" name="make">
            <option value="">Select</option>
            <option value="Test1">Test1</option>
            <option value="Test2">Test2</option>
          </StyledField>
        </StyledLabel>

        <StyledLabel>
          Year:
          <StyledField as="select" name="year">
            <option value="">Select</option>
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </StyledField>
        </StyledLabel>

        <StyledLabel>
          Power Type:
          <StyledField as="select" name="powerType">
            <option value="">Select</option>
            <option value="Test1">Test1</option>
            <option value="Test2">Test2</option>
          </StyledField>
        </StyledLabel>

        <StyledLabel>
          Capacity:
          <StyledField as="select" name="capacity">
            <option value="">Select</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </StyledField>
        </StyledLabel>

        <StyledLabel>
          New:
          <StyledField type="checkbox" name="new" />
        </StyledLabel>

        <StyledLabel>
          Lifted:
          <StyledField type="checkbox" name="lifted" />
        </StyledLabel>

        <StyledLabel>
          Street Legal:
          <StyledField type="checkbox" name="streetLegal" />
        </StyledLabel>

        <StyledLabel>
          Image URL:
          <StyledField type="text" name="images" />
        </StyledLabel>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default MyForm;
