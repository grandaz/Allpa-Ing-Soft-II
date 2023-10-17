import Logo from '../assets/icon1.png'
import { Component } from "react"
import User from '../classes/User';
import UserAPI from '../api/user';

interface SignInPageProps { }

interface SignInPageState {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

class SignInPage extends Component<SignInPageProps, SignInPageState> {

    constructor(props: SignInPageProps) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        } as unknown as Pick<SignInPageState, keyof SignInPageState>);
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const usuario = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        console.log(JSON.stringify(usuario));
        UserAPI.create(usuario)
            .then((data) => {
                console.log('User created successfully:', data);

                window.localStorage.setItem('user', JSON.stringify(usuario)); 

                window.location.replace('/inicio');
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
    }

    render() {
        return (
            <section className="bg-gray-50" >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-6 h-8 mr-2" src={Logo} alt="logo"></img>
                        <p className="font-logo text-3xl text-primary-700">Allpa</p>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/inicio" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input onChange={this.handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required></input>
                                </div>
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input onChange={this.handleInputChange} type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="First name" required></input>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                    <input onChange={this.handleInputChange} type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Last name" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input onChange={this.handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" required></input>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input onChange={this.handleInputChange} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" required></input>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required></input>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underlin " href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default SignInPage