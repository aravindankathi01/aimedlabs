import React, { useState } from "react";
import { LoginContainer } from "./styled/LoginContainer.styled";
import { InputContainer } from "./styled/InputTag.styled";
import { FlexContainer } from "./styled/FlexContainer.styled";
import { StyledSpan } from "./styled/Span.styled";
import { CheckboxContainer } from "./styled/CheckBoxContainer.styled";
import { StyledButton } from "./styled/Button.styled";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    loginid: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <LoginContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label for='loginid'>Login ID</label>
          <br />
          <input
            type='text'
            id='loginid'
            name='loginid'
            placeholder='Enter Login ID'
            value={formData.loginid}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label for='password'>Password</label>
          <br />
          <input
            type='text'
            id='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
          />
        </InputContainer>

        <FlexContainer>
          <CheckboxContainer>
            <input
              type='checkbox'
              id='Rememberme'
              name='Rememberme'
              value='Remember me'
            />
            <label for='Rememberme'> Remember me</label>
          </CheckboxContainer>

          <StyledSpan>Change Password</StyledSpan>
        </FlexContainer>

        <CheckboxContainer>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            value='terms and conditions'
          />
          <label for='terms'>
            Agree to <StyledSpan>Terms & Conditions</StyledSpan>
          </label>
        </CheckboxContainer>
        <StyledButton>Login</StyledButton>
      </form>
      <p>
        Don’t have an account? <StyledSpan>Register Here</StyledSpan>
      </p>
    </LoginContainer>
  );
};

export default LoginForm;
