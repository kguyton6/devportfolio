import React from 'react'
import { Wrapper } from '../Styles';
import login from '../../assets/login.png'
import calendarMovie from '../../assets/Calendar.mov'
import styled from 'styled-components'
import calendar from '../../assets/calendar.png'
const Img = styled.img`
margin: 3%;
    width: 800px;
    height: 400px;

`
const ChevronRight = styled.i`
    font-size: 40px;

`

class Roadmap extends React.Component {
    state = {
        nextPhoto: false
    }
    togglePhotos = () => {
        this.setState(prevState => {
            return { nextPhoto: !prevState.nextPhoto }
        })
    }
    showImage = () => {
        if(this.state.nextPhoto){
            return  <Img src={calendar} alt='' />
        } else {
            return  <Img src={login} alt='' />
        }
    }

    render(){
    return (
        <Wrapper>
            <h1>Roadmap</h1>

         

          
        </Wrapper>
    )
}
}

export default Roadmap