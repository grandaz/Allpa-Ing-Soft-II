import { InputProps } from "./InputProps"
import { Component } from "react"

class InputField extends Component<InputProps> {
    
    constructor(props: InputProps) {
        super(props);
    }

    render() {
        return (
            <input {...this.props} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
        )
    }
}

export default InputField