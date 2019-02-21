import React from 'react'
import { Card, Title } from './ProjectStyles'
import Frame from './Frame'


 
const Helo = () => {
  
    return (
        <center>
          <Card link={'helo'}>
            <label style={{textAlign: 'left', display:'flex'}} >
            <a href='https://github.com/kguyton6/helo' target='_blank' ><i style={{color: 'gray', marginRight: '10px'}}className="fab fa-github"></i></a>
            Helo
            </label>

            <Frame src='https://www.youtube.com/embed/-QSCTjlrrJY' />
           
            </Card>
            </center>

    )
}


export default Helo