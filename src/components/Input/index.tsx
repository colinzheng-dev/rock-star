import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    name?: string
}

const Label = styled.label`
    display: block;
    font-size: 18px;
    margin: 1rem 0; 
`

const Input: FC<InputProps> = styled.input`
    line-height: 40px;
    border-radius: 5px;
    width: 85%;
    border: 1px solid #eee;
    font-size: 18px;
    padding: 0 1rem;
    transition: 200ms;
    color: #565656;
`

const Wrapper = styled.div`
    color: #565656;
    padding: 1rem;
`

const Component: FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} {...rest} />
        </Wrapper>
    )
}

export default Component