import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components'
import Image from 'next/image'

import Burger from '../assets/BurgerMenu.svg'

const BurgerStyles = styled.div`
  width: 50px;
  height: 50px;
  @media(min-width: 1000px) {
    display: none;
  }
`

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <BurgerStyles>
        <Image src={Burger} width={50} height={50} alt="burger menu"/>
      </BurgerStyles>
      </Button>
    </div>
  );
}
