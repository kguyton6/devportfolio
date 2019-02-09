import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    center {
        font-size: 36px;
    }
    p { font-size: 20px;width: 80%;  padding-bottom: 30px;}
  .far {margin: 10px; font-size: 26px;}
  /* .arrow {display: none;} */
  @media (max-width: 750px){
    p, .far {font-size: 14px;}
    .arrow {display: inline; margin: 5px; cursor: pointer;}
  }
  
`

export const Card = styled.article`
        width: 90%;
        height: auto;
        box-sizing: border-box;
        padding: 20px 15px 15px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        position: relative;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .94) inset;
    p {font-weight: bold; height: 50px}
    label {font-size: 28px; font-weight: 700; color: gray; width: 100%;}
    p > i { margin-right: 10px; }

`

export const Right = styled.i`
  position: absolute;
  right: 15px;
  bottom: 45%;
  color: gray;
  font-size: 50px;
  @media (max-width: 750px){
   font-size: 30px;
  }
  @media (max-width: 500px){
    font-size: 20px;
    right: 5px;
  }
`;
export const Left = styled.i`
  position: absolute;
  left: 15px;
  bottom: 45%;
  color: grey;
  font-size: 50px;
  @media (max-width: 750px){
    font-size: 30px;
  }
  @media (max-width: 500px){
    font-size: 20px;
    left: 5px;
  }

`;


export const Img = styled.img`
    max-width: 60%;
    max-height:350px;
  @media(max-width: 750px){
    max-width: 90%;
  }
`

export const ProjectContainer = styled.main`
    display: flex;
    flex-direction: column;
    color: white;
    h1, h2 {text-align: center; margin: 20px;}
    h1 {font-size: 30px; }
    h2 {font-size: 20px;}
    
    .project-preview {
      display: flex;
      width: 100%;
      height: 400px;
      padding: 3%;
    }
    aside {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 3%;
      text-align: center;
      justify-content: space-evenly;
      height: auto;
      
    }
    #priv {flex-direction: row-reverse;}
    p {margin: 5%; line-height: 26px;}
    aside h3 { font-size: 24px; }
    aside h4 { font-size: 18px; }
    h3, h4 {line-height: 30px;}
    p h5 {margin: 5%;}

    @media (max-width: 900px){
      h4, h5 {display: none;}
      aside {width: 80%;}
      .project-preview {
        flex-direction: column-reverse;
        height: auto;
        align-items: center;
      }
      h3 {line-height: 20px;}
      #priv {flex-direction: column-reverse;}
      h2 {margin: 10px;}
    }
    @media(max-width: 600px){
     h1 { font-size: 25px}
    }
`