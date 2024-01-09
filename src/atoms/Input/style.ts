import styled from 'styled-components'

export const StyleInput = styled.input`
  width: 653px;
  height: 49px;
  border-radius: 8px;
  background-color: #262626;
  border: 1px solid #0d0d0d;
  color: #ffff;
  font-size: 16px;
  padding-left: 12px;
  transition: border-color 0.3s;
  ::placeholder {
    color: #808080;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    border: 1px solid #ffff;
  }
`
