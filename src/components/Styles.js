import styled from 'styled-components'

export const Main = styled.main`
background-image: url('https://images.unsplash.com/photo-1543443436-bc6deeff2eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
background-position-y: -600px;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
color: white;

span {
    font-size: 80px;
    font-family:'Alegreya Sans SC', sans-serif;
    color: rgba(255, 255, 255, 0.774);
}

.project-preview {
    display: flex;
    width: 100%;
    height: 500px;
}
@media (max-width: 750px){
   background-position-y: -200px;
}
`


export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color:rgba(17, 17, 17, 0.842);
    color: white;
    padding: 105px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    h1 {font-size: 72px; font-weight: 900; line-height: 72px; text-align:center;
    animation:slide 1s ease forwards; 
    /* transition-delay: .5s; */

}
    h2 {font-size: 20px; line-height: 33px; margin: 30px; font-weight: 400; 

    animation: slide 1.5s ease forwards;
    }
    p { 
    animation: slide 2s ease forwards;    
    width: 70%; text-align: center; font-weight: 400; line-height: 26px;}

    @keyframes slide {
        0% {transform: translateY(800px);}
        100% { transform: translateY(0px);}
    }
    @media (max-width: 750px){
        padding: 50px;
        h1 {font-size: 50px;}
    }
    @media (max-width: 600px){
        padding: 20px;
        h1 {font-size: 40px; width: 80%;}
    }
    @media (max-width: 450px){
        padding: 10px;
        h1 {font-size: 32px;}
    }

    `
    
export const Wrapper = styled.div`
    background-color: black;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
    flex-shrink: 2;
    position: relative;
    h1 {
        font-size: 40px;
        line-height: 43px;
        font-family: 'Raleway', sans-serif;
        animation: slide-reverse 2s ease forwards;
    }
    img {
        max-width: 400px;

        animation: slide-reverse 1s ease forwards;
    }
    p {
        width: 50%;
        text-align: center;
        font-size: 15px;
        line-height: 29px;
        font-weight: 400;
        margin-bottom: 3%;
        animation: slide 1s ease forwards;
    }
    button {
        animation: slide 2s ease forwards;
    }
    
    @keyframes slide {
        0% {transform: translateY(900px);}
        100% { transform: translateY(0px);}
    }
    @keyframes slide-reverse {
        0% {transform: translateY(-100px);}
        100% { transform: translateY(0px);}
    }
    @media (max-width: 800px){
        p { width: 80%;}
    }
   
   
`

