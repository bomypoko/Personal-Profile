import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;

`
export const NavBar = styled.div`
    background: #333;
    height: 50px;
`
export const Navcon = styled.div`
    height: 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled(Link)`

    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
`
export const Menu = styled.ul`
    display: flex;
    list-style:none;

    li {
        margin: 0 1rem;
    }
    a{
        color: #ffff;
        text-decoration: none;
    }
`

export const HomeLaout = styled.div`
    display:flex;
    justify-content: space-between;
`
export const SkillCom = styled.ul`

    display: flex;
    justify-content: center;
    list-style:none;
        
        li{
            margin: 1rem;
            background: #333;
            color: #fff;
            border-radius: 5px;
            padding: 10px;

        }

        strong{

            color: #ffc14f;
        }
        
`
export const FooterCon = styled.footer`
    background: #333;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: white;
    li{
        list-style: none;
    }
    
    
`