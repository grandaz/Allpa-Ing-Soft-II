import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import GreenButton from "../Inputs/GreenButton";
import { Component } from "react"

interface CardPedidoProps {
  logoEmpresa: string
  empresa: string
  fecha: string
  producto: string
  detalle: string
  cant: number
}

class CardPedidoModificar extends Component<CardPedidoProps> {

  constructor(props: CardPedidoProps) {
    super(props);
  }

  

  

  render() {
    const redirect = () => {
      window.location.href = '/detallePedido';
    }
    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-26">
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={this.props.logoEmpresa} alt=""></img>
            <div className="font-medium dark:text-white">
              <div>{this.props.empresa}</div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Publicado: {this.props.fecha}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {this.props.producto}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {this.props.cant + " " + "kg"}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {this.props.detalle}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex">
            <GreenButton type="button" label="Modificar" onClick={redirect}>
            </GreenButton>
            <div className="w-4"></div>
            <GreenButton type="button" label="Eliminar"></GreenButton>
          </div>
        </CardFooter>
      </Card>
    );
  }


}

export default CardPedidoModificar