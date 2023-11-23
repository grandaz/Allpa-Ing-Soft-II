import React from 'react'; // Import React
import InputField from '../components/Inputs/InputField';
import GreenButton from '../components/Inputs/GreenButton';
import { Component } from 'react';
import Product from '../classes/Product';
import Measure from '../classes/Measure';
import ProductoAPI from '../api/product';
import MeasureAPI from '../api/measure';
import OrderAPI from '../api/order';
import OrderItem from '../api/order_item';

interface CrearPedidoPageProps {}

interface CrearPedidoPageState {
  listaProductosForm: {
    product_id: number;
    cuantity: number;
    price: number;
    measure_id: number;
  }[];
  productos: Product[];
  unidades: Measure[];
  titulo: string;
  fecha_entrega: string;
  direccion: string;
  descripcion: string;
  product_id: number;
  cuantity: number;
  price: number;
  measure_id: number;
}

class CrearPedidoPage extends Component<CrearPedidoPageProps, CrearPedidoPageState> {

  private userItem = localStorage.getItem("user");
  private user = this.userItem !== null ? JSON.parse(this.userItem) : null;

  constructor(props: CrearPedidoPageProps) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      listaProductosForm: [
        {
          product_id: 1,
          cuantity: 0,
          price: 0,
          measure_id: 1,
        },
      ],
      productos: [],
      unidades: [],
      titulo: 'string',
      fecha_entrega: 'string',
      direccion: 'string',
      descripcion: 'string',
      product_id: 1,
      cuantity: 1,
      price: 1,
      measure_id: 1,
    };
  }

  componentDidMount() {
    this.cargarProductos();
    this.cargarUnidades();
  }

  private cargarProductos() {
    ProductoAPI.findAll()
      .then((promise) => {
        const data = promise.data;
        this.setState({ productos: data });
        console.log(data);
      })
      .catch((error) => {
        console.error('Error cargando productos:', error);
      });
  }

  private cargarUnidades() {
    MeasureAPI.findAll()
      .then((promise) => {
        const data = promise.data;
        this.setState({ unidades: data });
        console.log(data);
      })
      .catch((error) => {
        console.error('Error cargando unidades de medida:', error);
      });
  }

  private agregarProducto() {
    this.setState((prevState) => {
      return {
        listaProductosForm: [
          ...prevState.listaProductosForm,
          {
            product_id: 1,
            cuantity: 0,
            price: 0,
            measure_id: 1,
          },
        ],
      };
    });
  }

  private eliminarProducto = (index: number) => {
    this.setState((prevState) => ({
      listaProductosForm: prevState.listaProductosForm.filter((_, i) => i !== index),
    }));
  };

  handleDynamicInputChange(index: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (index < 0 || index >= this.state.listaProductosForm.length) {
      return;
    }
  
    this.setState((prevState) => ({
      listaProductosForm: prevState.listaProductosForm.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [event.target.name]: event.target.value,
          };
        }
        return item;
      }),
    }));
  }


  private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as unknown as Pick<CrearPedidoPageState, keyof CrearPedidoPageState>);
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const orderObj = {
      user_id: this.user.id,
      payment_id: 1,
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      fecha_entrega: this.state.fecha_entrega,
      direccion: this.state.direccion,
    };

    let orderId: number;

    OrderAPI.create(orderObj)
      .then((data) => {
        console.log('Order detail created successfully:', data);
        orderId = data.ordetail_id;
        console.log(orderId);
      })
      .then(() => {
        const promises = this.state.listaProductosForm.map((values) => {
          const orderItemsObj = {
            order_id: orderId,
            product_id: +values.product_id,
            cuantity: +values.cuantity,
            measure_id: +values.measure_id,
            price: +values.price,
          };
          return OrderItem.create(orderItemsObj);
        });

        return Promise.all(promises);
      })
      .then((results) => {
        console.log('Order items created successfully:', results);
      })
      .then(() => {
        window.location.replace('/pedidos');
      })
      .catch((error) => {
        console.error('Error creating order detail or items:', error);
      });
      

  }

  render() {
    return (
      <>
        <div className="mt-24"></div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8 ml-48">Realiza un pedido</h2>
        <form className="mx-48 my-10" onSubmit={this.handleSubmit}>
          <div className="mb-5">
            <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900">
              Título
            </label>
            <InputField name="titulo" type={'text'} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            <label htmlFor="producto" className="block mb-2 text-sm font-medium text-gray-900">
              Producto
            </label>
            <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900">
              Cantidad
            </label>
            <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900">
              Precio unitario
            </label>
            <label htmlFor="medida" className="block mb-2 text-sm font-medium text-gray-900">
              Unidad
            </label>
          </div>
          {this.state.listaProductosForm.map((obj, index) => (
            <div key={index} className="grid gap-6 mb-5 md:grid-cols-5">
              <div>
                <select
                  name="product_id"
                  id="product_id"
                  defaultValue={obj.product_id}
                  onChange={(event) => this.handleDynamicInputChange(index, event)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600"
                >
                  {this.state.productos.map((element) => (
                    <option key={element.product_id} value={element.product_id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <InputField
                  name="cuantity"
                  type={'number'}
                  onChange={(event) => this.handleDynamicInputChange(index, event)}
                ></InputField>
              </div>
              <div>
                <InputField
                  name="price"
                  type={'number'}
                  onChange={(event) => this.handleDynamicInputChange(index, event)}
                ></InputField>
              </div>
              <div>
                <select
                  name="measure_id"
                  id="_measure_id"
                  defaultValue={obj.measure_id}
                  onChange={(event) => this.handleDynamicInputChange(index, event)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-600 focus:border-primary-600"
                >
                  {this.state.unidades.map((element) => (
                    <option key={element.measure_id} value={element.measure_id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => this.agregarProducto()}
                  type="button"
                  className="bg-gray-300 hover-bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mx-2 mb-0.5"
                >
                  Agregar
                </button>
                <button
                  onClick={() => this.eliminarProducto(index)}
                  type="button"
                  className="bg-red-500 hover-bg-red-600 text-white font-semibold py-2 px-4 rounded mx-2 mb-0.5 disabled:bg-gray-200"
                  disabled={this.state.listaProductosForm.length === 1}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="mb-5">
            <label htmlFor="fechaEntrega" className="block mb-2 text-sm font-medium text-gray-900">
              Fecha entrega
            </label>
            <InputField name="fecha_entrega" type={'date'} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="mb-5">
            <label htmlFor="direccion" className="block mb-2 text-sm font-medium text-gray-900">
              Dirección
            </label>
            <InputField name="direccion" type={'text'} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="mb-5">
            <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900">
              Descripción
            </label>
            <InputField name="descripcion" type={'text'} onChange={this.handleInputChange}></InputField>
          </div>
          <div className="w-28 m-auto">
            <GreenButton label="Publicar"></GreenButton>
          </div>
        </form>
      </>
    );
  }
}

export default CrearPedidoPage;
