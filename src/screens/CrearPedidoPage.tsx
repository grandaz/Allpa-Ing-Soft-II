import React from 'react'; // Import React
import InputField from '../components/Inputs/InputField';
import GreenButton from '../components/Inputs/GreenButton';
import { Component } from 'react';

import ProductTO from '../to/ProductTO';
import MeasureTO from '../to/MeasureTO';
import OrderTO from '../to/OrderTO';
import OrderItemTO from '../to/OrderItemTO';
import ProductManager from '../manager/ProductManager';
import MeasureManager from '../manager/MeasureManager';
import OrderItemManager from '../manager/OrderItemManager';
import OrderManager from '../manager/OrderManager';

interface CrearPedidoPageProps {}

interface CrearPedidoPageState {
  listaProductosForm: {
    product_id: number;
    cuantity: number;
    price: number;
    measure_id: number;
  }[];
  productos: ProductTO[];
  unidades: MeasureTO[];
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

    const productoManager = new ProductManager()

    productoManager.findAll()
      .then(data => {
        this.setState({ productos: data });
      })
      .catch((error) => {
        console.error('Error cargando productos:', error);
      });
  }

  private cargarUnidades() {

    const measureManager = new MeasureManager()

    measureManager.findAll()
      .then(data => {
        this.setState({ unidades: data });
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

    const orderTO = new OrderTO()
    let orderId: number;

    orderTO.idUser = this.user.idUser
    orderTO.title = this.state.titulo
    orderTO.description = this.state.descripcion
    orderTO.deliveryDate = this.state.fecha_entrega
    orderTO.address = this.state.direccion
    orderTO.fgState = '1'
    console.log(orderTO)

    const orderManager = new OrderManager()

    orderManager.create(orderTO)
      .then(data => {
        orderId = data.idOrder;
        console.log(orderId);
        console.log(data)

        const promises = this.state.listaProductosForm.map(values => {
          const orderItemTO = new OrderItemTO()

          orderItemTO.idOrder = orderId
          orderItemTO.idProduct = +values.product_id
          orderItemTO.ammount = +values.cuantity
          orderItemTO.idMeasure = +values.measure_id
          orderItemTO.price = +values.price

          const orderItemManager = new OrderItemManager()
          return orderItemManager.create(orderItemTO)
        });
        
        return Promise.all(promises);
      })
      .then((results) => {
        console.log('Order items created successfully:', results);
      })

    /*
    orderManager.create(orderTO)
      .then(data => {
        orderId = data.id;
        console.log(orderId);
      })
      .then(() => {
        const promises = this.state.listaProductosForm.map(values => {
          const orderItemTO = new OrderItemTO()

          orderItemTO.id = orderId
          orderItemTO.idProduct = +values.product_id
          orderItemTO.ammount = +values.cuantity
          orderItemTO.idMeasure = +values.measure_id
          orderItemTO.price = +values.price

          const orderItemManager = new OrderItemManager()
          return orderItemManager.create(orderItemTO)
        })
        return Promise.all(promises);
      })
      .then((results) => {
        console.log('Order items created successfully:', results);
      })
      .then(() => {
        //window.location.replace('/pedidos');
      })
      .catch((error) => {
        console.error('Error creating order detail or items:', error);
      });
      */
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
                    <option key={element.idProduct} value={element.idProduct}>
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
                    <option key={element.idMeasure} value={element.idMeasure}>
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
