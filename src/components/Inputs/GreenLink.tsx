import { LinkProps } from "./InputProps"
import { Component } from "react"

function GreenLink(props: LinkProps) {
    return (
        <a href={props.href} className="font-medium text-primary-600 hover:underline">{props.label}</a>
    )
}

export default GreenLink





