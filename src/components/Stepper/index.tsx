import React, { FC, ReactNode } from 'react'

interface StepperProps {
    children: ReactNode [],
    current: number 
}

interface StepProps {
    children: ReactNode
}

const Stepper: FC<StepperProps> =  ({ children, current }) => {
    return <>{children[current]}</>
}

export default Stepper 

export const Step:FC<StepProps> = ({ children }) => <>{children}</>

