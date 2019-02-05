import React from 'react'
import { Wrapper } from '../Styles';
import mobile from '../../assets/mobileview.png'
import {Link} from 'react-router-dom'


const Privy = () => {
    return (
        <Wrapper>
               <Link to='/projects'>{`<< Go Back`}</Link>
            PrivyChic
            <img width='20%' height='20%' src={mobile} alt='preview'/>
        </Wrapper>
    )
}

export default Privy