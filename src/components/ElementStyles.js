import styled from 'styled-components'

//Dropdown
export const Menu = styled.menu`
    background-color: white;
    padding: 20px;
    width: 140px;
    position: absolute;
    z-index: 100;
    top: ${props => props.top || "60px"};
    right: ${props => props.right || "3%"};
    color: black;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(135, 135, 165);

    li {
     list-style: none;
     text-align: left;
     line-height: 30px;
    }
`

//Input
export const StyledInput = styled.input`
  width: ${props => props.width || "80%"};
  height: ${props => props.height || "40px"};
  font-size: ${props => props.fontSize || "18px"};
  margin: ${props => props.margin};
`;

//Form
export const Form = styled.form`
width: 100%;
height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


