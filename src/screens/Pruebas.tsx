import { Component } from "react"
import UserManager from "../manager/UserManager";
import UserTO from "../to/UserTO";

interface PruebasState {
    user: UserTO
}

interface PruebasProps { }

export default class Pruebas extends Component<PruebasProps, PruebasState> {



    constructor(props: Pruebas) {
        super(props);
        this.state = {
            user: new UserTO()
        }
    }

    componentDidMount() {
        this.cargarData();
    }

    private cargarData() {

        const userManager = new UserManager()
        userManager.findOne(1)
            .then( data => {
                this.setState({ user: data})
            })
        
    }

    render() {
        return (
            <>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>{this.state.user.id}</h1>

                {/*
                    this.state.user.map((item, key) => (
                        <>
                        <h1 key={key}>{item.id}</h1>
                        <h1 key={key}>{item.firstName}</h1>
                        </>
                    ))
                */
                }
            </>
        )
    }

}