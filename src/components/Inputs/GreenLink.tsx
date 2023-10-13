import { LinkProps } from "./InputProps"
import { Component } from "react"

class GreenLink extends Component<LinkProps> {

    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.href} className="font-medium text-primary-600 hover:underline">{this.props.label}</a>
        )
    }
    
}

export default GreenLink





