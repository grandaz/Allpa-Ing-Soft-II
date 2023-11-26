import ProductTO from "../to/ProductTO";
import ProductManager from "../manager/ProductManager";
import { Component} from 'react'
import { RouteComponentProps } from 'react-router-dom';
import GreenButton from "../components/Inputs/GreenButton";

interface DetalleProductoPageProps extends RouteComponentProps<{ id: string }> {}
interface DetalleProductoPageState{ 
    productoId: number
    producto: ProductTO
}

export default class DetalleProductoPage extends Component<DetalleProductoPageProps, DetalleProductoPageState>{

    constructor(props: DetalleProductoPageProps) {
        super(props)
        this.state = {
            productoId: 0,
            producto: new ProductTO,
        };
    }

    componentDidMount(): void {
        const { id } = this.props.match.params
        const numeroId = parseInt(id, 10)

        this.setState({ productoId: numeroId }, () => {
          
          this.cargarProducto();
        })
        
      }
    
      private cargarProducto() {
        const productManager = new ProductManager()
        console.log(this.state.productoId)
        productManager.findOne(this.state.productoId)
          .then((data: ProductTO) => {
            this.setState({
              producto: data
            })
          })
    
      }


    render() {
        return (
            <>
                <div className="m-10 p-4 mt-32 flex">
                    <img
                        src={this.state.producto.image}
                        alt="card-image"
                        className="h-1/2 w-1/2"
                    />
                    <div className="m-10 p-10">
                        <h1 className="text-2xl font-bold">{this.state.producto.name}</h1>
                        <p className="mb-12">{this.state.producto.description}</p>
                    <a className="m-6" href={"/pedidos"}><GreenButton type="button" label="Ver pedidos"></GreenButton></a>
                    </div>
                </div>
            </>
        )
    }


}