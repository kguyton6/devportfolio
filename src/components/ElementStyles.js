import styled from 'styled-components'

export const Image = styled.img`
    width: auto;
    height: 500px;
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


