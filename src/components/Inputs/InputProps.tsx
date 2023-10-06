import { DetailedHTMLProps } from "react"

export type InputProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}
export type ButtonProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {label: string}

export interface LinkProps {
    href: string,
    label: string
}