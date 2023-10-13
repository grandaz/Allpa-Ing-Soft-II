import { Component } from "react"
import { ButtonProps } from "./InputProps"

function GreenButton(props: ButtonProps) {
    return (
        <button {...props} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{props.label}</button>
    )
}

export default GreenButton