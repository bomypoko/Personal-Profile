import React, {useContext} from 'react'

import { DataContext } from '../App'

import { Container , SkillCom} from '../styles/styles'


function About() {

    const data = useContext(DataContext)

  return (


    <Container>

        <h1> 
            About 
        </h1>
        
        <hr /> 

            <div style={{ textAlign: 'center' , margin: '2rem 0'}}>

            <img style={{borderRadius: '100%'}} src={data.basics?.picture} alt={data.basics?.name} width="200px"/>

                    <ul style={{listStyle: 'none'}}>
                        <li> Name: {data.basics.name }</li>
                        <li>{data.basics.headline }</li>
                        <li>{data.basics.region }</li>
                    </ul>

                <hr/> 

                <h3> My Skill</h3>

                    <SkillCom>
                        {data.skills?.map((val , idx) => (
                            <li key={idx}>
                                <strong> {val.name} </strong>
                                <br />
                                Level: {val.level}
                            </li>
                        ))}
                    </SkillCom>
            </div>
      
    </Container>
  )
}

export default About