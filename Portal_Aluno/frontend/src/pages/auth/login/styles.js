import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #07a7e3, #32dac3 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  height: 40%;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  outline: 0;

  &::placeholder {
    color: #1a2f3a;
  }
`;
export const Label = styled.label`
  color: #1a2f3a;
  font-size: 2rem;
`;

export const AuxIconLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuxInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  background-color: #1a2f3a;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 40px;
  outline: none;
  border: none;
  color: #fff;
  &:hover {
    background: linear-gradient(135deg, #07a7e3, #32dac3 100%);
    color: #fff;
    border: 1px solid #1a2f3a;
  }
`;

export const ButtonLoading = styled.button`
  display: flex;
  justify-content: center;
  background-color: #1a2f3a;
  align-items: center;
  border-radius: 4px;
  height: 40px;
  outline: none;
  border: none;
  color: #fff;
`;

export const LabelError = styled.p`
  text-align: center;
  color: #ff0f07;
  font-weight: 600;
`;
