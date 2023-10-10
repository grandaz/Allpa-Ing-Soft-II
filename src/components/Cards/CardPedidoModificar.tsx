import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import GreenButton from "../Inputs/GreenButton";

interface CardPedidoProps {
  logoEmpresa: string
  empresa: string
  fecha: string
  producto: string
  detalle: string
  precio: number
}

function CardPedidoModificar(props: CardPedidoProps) {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-26">
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src={props.logoEmpresa} alt=""></img>
          <div className="font-medium dark:text-white">
            <div>{props.empresa}</div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Publicado: {props.fecha}
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {props.producto}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {'$' + props.precio}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {props.detalle}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex">
          <GreenButton type="button" label="Modificar"></GreenButton>
          <div className="w-4"></div>
          <GreenButton type="button" label="Eliminar"></GreenButton>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardPedidoModificar