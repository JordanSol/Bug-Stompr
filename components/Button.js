import React from 'react'
import styled from 'styled-components'

  const StyledButton = styled.div`
    padding: 0.75rem 1.5rem;
    background-color: #009699;  
    background: rgb(0,150,153);
    background: linear-gradient(90deg, rgba(0,150,153,1) 0%, rgba(0,134,136,1) 100%);
    border-radius: 25px;
    color: #d8d6ff;
    border: none;
    font-size: 14px;
    font-weight: 400;
    &:hover {
      cursor: pointer;
    }
  `

const Button = ({ text, func }) => {

    return (
        <StyledButton onClick={func}>
            {text}
        </StyledButton>
    )
}

export default Button