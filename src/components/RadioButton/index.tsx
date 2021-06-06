import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  name: string,
  onChange: any

}

const Wrapper = styled.div`
    transition: 200ms;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
    &: hover {
        box-shadow: 0 0 1px 1px #c3c3c3;
        border-radius: 10px;
    }
`

const RadioButton:FC<RadioButtonProps> = (props) => {
    return (
        <Wrapper>
            <input onChange={props.onChange} type="radio" id={props.id} name={props.name} checked={props.checked} />
            <label style={{display: 'inline-block', padding: '1rem', width: '100%', marginLeft:'2rem'}} htmlFor={props.id}>{props.children}</label>
        </Wrapper>
    )
}

export default RadioButton