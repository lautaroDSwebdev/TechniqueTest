import React from 'react'
import { ButtonStyle } from '../styles'
interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const ButtonComponent = ({ children, ...props }: Button) => {
    return (
        <ButtonStyle {...props}>{children}</ButtonStyle>
    )
}
