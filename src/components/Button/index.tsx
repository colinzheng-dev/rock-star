import React, { FC, ButtonHTMLAttributes  } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = styled.button`
    background-color: rgb(80, 0, 202);
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 18px;
    padding: 0.5rem 1rem;
    transition: 200ms;
    cursor: pointer;
    &: hover {
        background-color: rgba(80, 0, 202, 0.8);
    } 
    &: disabled {
        background: unset;
        color: lightgray;
        cursor: not-allowed;
    }
`

const Component: FC<ButtonProps> = (props) => (
    <Button {...props} >{props.children}</Button>
) 

export default Component