import React ,{ useContext } from 'react'
import { DataContext } from '../App'
import { Container , HomeLaout } from '../styles/styles'



function Home() {

    const data = useContext(DataContext)
    console.log(data)

  return (

    <Container>

        <h1> Home </h1>

        <HomeLaout>

            <img style={{ borderRadius: '10px '}} src={data.basics?.picture} alt={data.basics?.name} />
            <ul style={{ listStyle: 'none' ,padding: '15px'}} >

                <li style={{ fontSize: ' 2rem '}}><strong> Name </strong> : {data.basics?.name} </li>

                <li style={{ fontSize: '1.2rem'}}><strong> Title </strong> : {data.basics?.headline} </li>     

                {data.education?.map((val , idx) => (
                    <li key={idx}>
                      <strong>University</strong>: {val.institution}
                      <br/>
                      <strong>Area</strong>: {val.area}
                    </li>
                ))}

                  <h1> Work Experiecne</h1>
                   {data.work?.map(( val , idx) => (
                    <li key={idx}>

                      <strong> {val.name} </strong>: {val.isCurrentRole}  {val.startDate}   {val.endDate} <br/>
                      <strong>Position</strong>: {val.position} <br/> <br/><br/>
  
                    </li>
                ))}
                    
            </ul>
        </HomeLaout>
    </Container>
  )
}

export default Home