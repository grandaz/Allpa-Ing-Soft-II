import { Component } from "react"
import { ButtonProps } from "./InputProps"

class GreenButton extends Component<ButtonProps> {

    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return (
            <button {...this.props} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{this.props.label}</button>
        )
    }

}

export default GreenButton