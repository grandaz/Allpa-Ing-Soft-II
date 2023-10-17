import InputField from "../components/Inputs/InputField"
import Logo from '../assets/icon1.png'
import { Link } from "react-router-dom"
import { Component } from "react"
import UserAPI from "../api/user"
import User from "../classes/User"

interface LoginPageProps { }

interface LoginPageState {
    users: User[];
    email: string;
    password: string;
    errors: string[];
}

class LoginPage extends Component<LoginPageProps, LoginPageState>{

    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            users: [],
            email: '',
            password: '',
            errors: [],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.cargarUsuarios();
    }

    private cargarUsuarios() {
        UserAPI.findAll()
            .then((promise) => {
                const data = promise.data;
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
        } as unknown as Pick<LoginPageState, keyof LoginPageState>);
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { email, password, users } = this.state;

        const user = users.find((user) => user.email === email);

        if (user) {
            if (user.password === password) {
                console.log('Authentication successful');
                window.localStorage.setItem('user', JSON.stringify(user));
                window.location.replace('/inicio');
            } else {
                console.log('Incorrect password');
            }
        } else {
            console.log('User not found');
        }
    }
    
    IniciarSesion = () => {
        const { email, password } = this.state;
      
        // Validar correo electrónico
        if (!email || !email.trim()) {
          this.setState({ errors: ['El correo electrónico es obligatorio.'] });
          return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          this.setState({ errors: ['El correo electrónico no es válido.'] });
          return;
        }
      
        // Validar contraseña
        if (!password || !password.trim()) {
          this.setState({ errors: ['La contraseña es obligatoria.'] });
          return;
        } else if (password.length < 6) {
          this.setState({ errors: ['La contraseña debe tener al menos 6 caracteres.'] });
          return;
        }
      
        // Realizar la petición al backend
        UserAPI.findAll()
            .then((promise) => {
                const data = promise.data;
                this.setState({ users: data });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error cargando usuarios:", error);
            });
    };

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
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/inicio">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <InputField type="email" name="email" id="email" placeholder="name@company.com"></InputField>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <InputField type="password" name="password" id="passdword" placeholder="••••••••"></InputField>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required></input>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                <p className="text-sm font-light text-gray-500">
                                    Don't have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline"><Link to="/register">Sign up</Link></a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default LoginPage
