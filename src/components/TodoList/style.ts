import styled from 'styled-components'

export const InputContainer = styled.div`
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
`

export const Container = styled.div`
  background-color: #333333;
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #8284fa;
  font-weight: bold;
  margin-top: 100px;

  :nth-child(1) {
    color: #4ea8de;
  }
`

export const NumberStyle = styled.div`
  background-color: #333333;
  text-align: center;
  border-radius: 999px;
  min-width: 25px;
  font-size: 15px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  color: white;
  margin-left: 5px;
  padding-right: 7px;
  padding-left: 7px;
`

export const Line = styled.div`
  height: 1px;
  background-color: #333;
  position: relative;
  border-top-left-radius: 8px; /* Bordas superiores arredondadas */
  border-top-right-radius: 8px;
  margin-top: 30px;
  overflow: hidden; /* Para esconder a parte inferior da linha */
`
export const ListItem = styled.div`
  width: 100%;
  margin: 10px auto;
  background-color: #262626;
  padding: 12px;
  border-radius: 8px;
  color: #f2f2f2;
  display: flex;
  font-size: 14px;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  svg {
    width: 50px;
    cursor: pointer;
  }
`
