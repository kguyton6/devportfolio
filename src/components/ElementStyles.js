import styled from 'styled-components'

//Dropdown
export const Menu = styled.menu`
    background-color: white;
    padding: 15px;
    width: 115px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    top: ${props => props.top || "100px"};
    right: ${props => props.right || "5%"};
    color: black;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(135, 135, 165);
    justify-content: space-evenly;
    animation: drop .5s ease forwards;
    
    a {color: black; font-size: 20px;}
    a:hover {background-color:rgba(0, 0, 0, 0.698); color: white; font-size: 24px; }

    @keyframes drop {
        0% {height: 0;}
        100% {height: 200px;}
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


