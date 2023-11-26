import { Component } from "react"
import SupportTO from "../../to/SupportTO"
import SupportManager from "../../manager/SupportManager"
import ProblemTypeTO from "../../to/ProblemTypeTO"
import ProblemTypeManager from "../../manager/ProblemTypeManager"


interface SoporteProps{}

interface SoporteState{
    tipoProblemas: ProblemTypeTO[]
    nombre: string
    apellido: string
    email: string
    tipo: number
    descripcion: string
    fgPresential: string
    checked: boolean
}

class Soporte extends Component<SoporteProps, SoporteState>{

    constructor(props: SoporteProps){
        super(props)
        this.state = {
            tipoProblemas: [],
            nombre: '',
            apellido: '',
            email: '',
            tipo: 0,
            descripcion: '',
            fgPresential: '0',
            checked: false
        }
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }
    
    componentDidMount() {
        this.cargarTipoProblemas()
    }



    private cargarTipoProblemas() {
        const problemTypeManager = new ProblemTypeManager()
        problemTypeManager.findAll()
            .then((data: ProblemTypeTO[]) => {
                this.setState({ tipoProblemas: data })
            })
    }

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        console.log(name)
        this.setState({
          [name]: value,
        } as unknown as Pick<SoporteState, keyof SoporteState>);
      }

    private handleCheckBox(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.checked) {
            this.setState({ fgPresential: '1' , checked: true})
        }else {
            this.setState({ fgPresential: '0', checked: false})
        }
        
    }

    private handleSelectChange (event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ tipo: Number(event.target.value) });
      };

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const supportManager = new SupportManager()

        const supportTO = new SupportTO()
        supportTO.firstName = this.state.nombre
        supportTO.lastName = this.state.apellido
        supportTO.email = this.state.email
        supportTO.idProblemType = this.state.tipo
        supportTO.description = this.state.descripcion
        supportTO.fgPresential = this.state.fgPresential
        console.log(supportTO)
        supportManager.create(supportTO)
            .then((data) => {
                console.log('Creado supp:', data)
            })
            .then(() => {
                window.location.replace('/soporte');
              })
            .catch((err) => {
                console.error('Error al crear supp:', err)
            })

    }

    render() {
        return (
            <div className="flex p-20">
                <div className="w-full">
                <img
                    className="w-full p-2.5"
                    src="https://www.agromarketing.mx/wp-content/uploads/2019/07/BB5B6BBE-F012-4191-9F50-581A4A2F1112-730x463.jpeg"
                    alt="Agricultor"
                ></img>
                <img
                    className="w-full p-2.5"
                    src="https://i0.wp.com/foro.pdc.pe/wp-content/uploads/2022/05/Agricultura.jpg?fit=800%2C450"
                    alt="Agricultor"
                ></img>
                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-2 md:space-y-10 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Soporte
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={this.handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input onChange={this.handleInputChange} type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su nombre"></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                <input onChange={this.handleInputChange} type="text" name="apellido" id="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su apellido"></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input onChange={this.handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@compañía.com"></input>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de problema</label>

                                <select
                                    onChange={this.handleSelectChange}
                                    placeholder="Tipo de problema"
                                    value={this.state.tipo}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={0} disabled>Selecciona un tipo de problema</option>
                                        {this.state.tipoProblemas.map((item: ProblemTypeTO) => (
                                        <option key={item.id} value={item.id}>
                                        {item.name}
                                        </option>
                                    ))}
                                </select>

                                
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                                <input onChange={this.handleInputChange} type="text" name="descripcion" id="descripcion" className="h-40 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe el problema aquí"></input>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" checked={this.state.checked} onChange={this.handleCheckBox} aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label  className="font-light text-gray-500 dark:text-gray-300">Deseo recibir ayuda presencial</label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Enviar
                                </button>
                            </div>   
                                                          
                        </form>
                    </div> 
                </div>
          </div>
        )
    }

    
}

export default Soporte