import InputField from "../components/Inputs/InputField"
import Logo from '../assets/icon1.png'
import { Link } from "react-router-dom"
import { Component } from "react"
import UserManager from "../manager/UserManager"

import UserTO from "../to/UserTO"

interface RestablecerContraPageProps { }

interface RestablecerContraPageState {
    users: UserTO[];
    email: string;
    new_password: string;
    confirm_password: string;
    dni: string;
    tel: string
}

export default class RestablecerContraPage extends Component<RestablecerContraPageProps, RestablecerContraPageState>{

    constructor(props: RestablecerContraPageProps) {
        super(props);
        this.state = {
            users: [],
            email: '',
            new_password: '',
            confirm_password: '',
            dni: '',
            tel: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.cargarUsuarios();
    }

    private cargarUsuarios() {

        const userManager = new UserManager()

        userManager.findAll()
            .then((data) => {
                this.setState({ users: data });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error cargando usuarios:", error);
            });

    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        } as unknown as Pick<RestablecerContraPageState, keyof RestablecerContraPageState>);
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { 
            email, 
            new_password, 
            users, 
            confirm_password,
            tel,
            dni
        } = this.state;

        const user = users.find((user) => user.email === email);

        if(user?.noDoc !== dni || user.telephone !== tel) {
            alert('Datos no coinciden')
            return false
        }
        if(new_password !== confirm_password){
            alert('Contraseñas no coinciden')
            return false
        }

        const userManager = new UserManager()
        user.password = new_password
        userManager.update(user)
            .then(() => {
                console.log('Constraseña actualizada')
                window.location.replace('/inicio');
            })
            .catch((err) => {
                console.error('Error al restablecer contraseña:', err)
            })
    }

    render() {
        return (
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-6 h-8 mr-2" src={Logo} alt="logo"></img>
                        <p className="font-logo text-3xl text-primary-700">Allpa</p>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Restablecer contraseña
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <InputField onChange={this.handleInputChange} type="email" name="email" id="email" placeholder="name@company.com"></InputField>
                                </div>
                                <div>
                                    <label htmlFor="dni" className="block mb-2 text-sm font-medium text-gray-900">Your DNI</label>
                                    <InputField onChange={this.handleInputChange} type="text" name="dni" id="dni" placeholder="Your dni"></InputField>
                                </div>
                                <div>
                                    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900">Your telephone</label>
                                    <InputField onChange={this.handleInputChange} type="text" name="tel" id="tel" placeholder="45467467"></InputField>
                                </div>
                                <div>
                                    <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900">New password</label>
                                    <InputField onChange={this.handleInputChange} type="password" name="new_password" id="new_password" placeholder="••••••••"></InputField>
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm new password</label>
                                    <InputField onChange={this.handleInputChange} type="password" name="confirm_password" id="confirm_password" placeholder="••••••••"></InputField>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"><Link to="/login">Cambiar Contraseña</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

