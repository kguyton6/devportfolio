import React from 'react'
import { Card, Title } from './ProjectStyles'
import Frame from './Frame'


 
const Helo = () => {
  
    return (
        <center>
          <Card>
            <label style={{textAlign: 'left', display:'flex', justifyContent: 'flex-end'}} >Helo
            <a href='https://github.com/kguyton6/helo' ><i style={{color: 'gray', fontSize: '15px'}}className="fas fa-external-link-alt"></i></a>
            </label>

            <Frame src='https://www.youtube.com/embed/-QSCTjlrrJY' />
           
            </Card>
            </center>

    )
}


export default Helo