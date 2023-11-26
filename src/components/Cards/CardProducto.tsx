import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import GreenButton from "../Inputs/GreenButton";
import { Component } from "react"

interface CardProductoProps {
    idProducto: number,
    nombre: string;
    image: string;
}

class CardProducto extends Component<CardProductoProps> {

    private userItem = localStorage.getItem("user");
    private user = this.userItem !== null ? JSON.parse(this.userItem) : null;

    constructor(props: CardProductoProps) {
        super(props);
    }

    render() {
        return (
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={this.props.image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {this.props.nombre}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            +
                        </Typography>
                    </div>

                    {/*
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                    </Typography>
                */}
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex gap-2">
                        <a href={this.user !== null ? "/crearPedido" : "/login"}><GreenButton type="button" label="Añadir"></GreenButton></a>
                        <a href={"/detalleProducto/" + this.props.idProducto}><GreenButton type="button" label="Ver detalle"></GreenButton></a>
                    </div>
                </CardFooter>
            </Card>
        )
    }


}

export default CardProducto