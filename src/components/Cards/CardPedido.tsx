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
  id: number
  profileImage: string
  nombre: string
  fechaCrea: string
  titulo: string
  descripcion: string
  fechaEntrega: string
}

class CardPedido extends Component<CardPedidoProps> {

  constructor(props: CardPedidoProps) {
    super(props);
  }

  render() {
    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-26">
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={this.props.profileImage} alt=""></img>
            <div className="font-medium dark:text-white">
              <div>{this.props.nombre}</div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Publicado: {this.props.fechaCrea}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {this.props.titulo}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {this.props.fechaEntrega}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {this.props.descripcion}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={"/detallePedido/" + this.props.id}><GreenButton type="button" label="Inscribirse"></GreenButton></a>
        </CardFooter>
      </Card>
    )
  }


}

export default CardPedido