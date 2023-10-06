import { LinkProps } from "./InputProps"

function GreenLink(props: LinkProps) {
    return (
        <a href={props.href} className="font-medium text-primary-600 hover:underline">{props.label}</a>
    )
}

export default GreenLink





