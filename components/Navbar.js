import React, {useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'

//Components
import Modal from './Modal'
import Button from './Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Logo from '../assets/Logo.svg'
import Burger from '../assets/BurgerMenu.svg'

const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  padding-top: 3em;
  @media(min-width: 650px) {
    padding: 0 10%;
  }
`

const Links = styled.div`
  display: none;
  @media(min-width: 1000px) {
    display: flex;
    width: 15em;
    justify-content: space-between;
    align-items: center;
    color: #d8d6ff;
  }
`p

const BurgerMenu = styled.div`
  width: 50px;
  height: 50px;
  @media(min-width: 1000px) {
    display: none;
  }
`

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <StyledNav>
        <Image src={Logo} width={200} height={75} alt="logo"/>
        <BurgerMenu onClick={handleClick}>
          <Image src={Burger} width={50} height={50} alt="burger menu"/>
        </BurgerMenu>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <Modal toggler={<MenuItem onClick={handleClose}>Sign Up</MenuItem>}/>
        <MenuItem onClick={handleClose}>Guest</MenuItem>
      </Menu>
        <Links>
          <p>Guest</p>
          <p>Login</p>
          <Modal toggler={<Button text="Sign Up"/>}/>
        </Links>
      </StyledNav>
    )
}

export default Navbar