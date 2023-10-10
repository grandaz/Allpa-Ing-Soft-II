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
  cant: number
}

function CardPedido(props: CardPedidoProps) {
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
            {props.cant + " " + "kg"}
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
        <GreenButton type="button" label="Inscribirse"></GreenButton>
      </CardFooter>
    </Card>
  );
}

export default CardPedido