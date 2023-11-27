import { Component, ReactNode, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import SliderSizes from '../components/Inputs/SliderSizes'
import ProgressBar from '../components/Inputs/ProgressBar'
import InputField from '../components/Inputs/InputField'
import { RouteComponentProps } from 'react-router-dom';

import OrderManager from '../manager/OrderManager'
import OrderTO from '../to/OrderTO'
import ProductTO from '../to/ProductTO'
import UserTO from '../to/UserTO'
import OrderItemTO from '../to/OrderItemTO'
import OrderParticipantTO from '../to/OrderParticipantTO'
import OrderItemManager from '../manager/OrderItemManager'
import ParticipationManager from '../manager/ParticipationManager'
import OrderParticipantManager from '../manager/OrderParticipantManager'
import ParticipationTO from '../to/ParticipationTO'


interface DetallePedidoProps extends RouteComponentProps<{ id: string }> {}

interface DetallePedidoState{
  listaProductosForm: OrderItemTO[];
  id: number
  order: OrderTO
}

export default class DetallePedido extends Component<DetallePedidoProps, DetallePedidoState> {
  
  private userItem = localStorage.getItem("user");
  private user: UserTO = this.userItem !== null ? JSON.parse(this.userItem) : new UserTO();

  constructor(props: DetallePedidoProps) {
    super(props)
    
    
    this.state = {
      listaProductosForm: [],
      id: 0,
      order: new OrderTO(),

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(): void {
    const { id } = this.props.match.params
    const numeroId = parseInt(id, 10)

    this.setState({ id: numeroId }, () => {
      
      this.cargarOrden();
    })
    
  }

  private cargarOrden() {
    const orderManager = new OrderManager()
    console.log(this.state.id)
    orderManager.findOneComplete(this.state.id)
      .then((data: OrderTO) => {
        this.setState({
          order: data,
          listaProductosForm: data.orderItems ?? []
        })
      })

  }

  private handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, idProducto: number,) {
    this.setState((prevState) => ({
      listaProductosForm: prevState.listaProductosForm.map((item) => {
        if (item.idProduct === idProducto) {
          return {
            ...item,
            [event.target.name]: event.target.value,
          };
        }
        return item;
      }),
    }));
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    this.state.listaProductosForm.map(async (values: OrderItemTO) => {
      const orderParticipantTO = new OrderParticipantTO()

      orderParticipantTO.idOrderItem = values.id
      orderParticipantTO.idUser = this.user.id
      orderParticipantTO.idProduct = values.idProduct
      orderParticipantTO.ammount = values.ammount

      const orderParticipantManager = new OrderParticipantManager()
      return orderParticipantManager.create(orderParticipantTO)
        .then((data: OrderParticipantTO) => {
          const participationTO = new ParticipationTO()

          participationTO.idOrderParticipant = data.id
          participationTO.idUser = this.user.id
          participationTO.idOrder = this.state.id

          const participationManager = new ParticipationManager()
          return participationManager.create(participationTO)
        })
        .then((results) => {
          console.log('Participation created successfully:', results);
        })
        .then(() => {
          window.location.replace('/pedidos');
        })
        .catch((error) => {
          console.error('Error registrando participación:', error);
        });
        
    })

  }

  render() {
    return (
      <>
      
      <div className="mt-6"></div>
      <div className="bg-white">
        <div className="pt-6">
          
          {/* TITULO */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{this.state.order.title}</h1>
            </div>
  
            {/* Fecha entrega */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900">{this.state.order.deliveryDate?.substring(0,10)}</p>
  
              {/* Progress */}
              {/*
                <div className="mt-6">
                <ProgressBar></ProgressBar>
              </div>
              */
              }
              
  
              <form className="mt-8" onSubmit={this.handleSubmit}>
                {/* Productos */}

                { 
                  this.state.order.orderItems?.map((item: OrderItemTO) => (
                    <div key={item.id}>
                      <p className="text-base font-bold text-gray-900 mb-1 flex"> {item.product?.name}: ({
                        item.orderParticipants?.reduce((total, x: OrderParticipantTO) => total + (x.ammount ?? 0), 0)
                      } / {item.ammount} {item.measure?.name}) </p>
                      <div className='mb-5 flex gap-2'>
                        <h3 className="text-sm font-medium text-gray-900 mt-2"> S/{item.price} por {item.measure?.name} </h3>
                        <div className=''>
                          <InputField type="number" min={0} max={
                            (item.ammount ?? 0) - (item.orderParticipants?.reduce((total, x: OrderParticipantTO) => total + (x.ammount ?? 0), 0) ?? 0)
                          } name="ammount" onChange={(event) => this.handleInputChange(event, item.idProduct ?? 0)}></InputField>
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 mt-2">Max {
                          (item.ammount ?? 0) - (item.orderParticipants?.reduce((total, x: OrderParticipantTO) => total + (x.ammount ?? 0), 0) ?? 0)
                        } {item.measure?.name} </h3>
                      </div>
                    </div>
                  ))
                  
                }
  
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none"
                >
                  Inscribirse
                </button>
              </form>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Descripcion */}
              <div>
                <h3 className="sr-only">Descripción</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{this.state.order.description}</p>
                </div>
              </div>
  
  
              {/* LISTAR PRODUCTOS */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Productos</h3>
  
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {
                      this.state.order.orderItems?.map((item: OrderItemTO) => (
                        <li key={item.id} className="text-gray-400">
                        <span className="text-gray-600">{item.product?.name}</span>
                      </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              {
                /*
                  <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
                
                */
              }
              
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
