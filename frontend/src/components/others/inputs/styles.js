import styled from 'styled-components';

export const Error = styled.span`
  color: red;
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
`
export const EInput = styled.input`
  border: ${props => props.error ? '2px solid red' : 'none'};
`