import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import GreenButton from "../Inputs/GreenButton";
import { Component } from "react"

class CardProducto extends Component {

    render() {
        return (
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src="https://nutricionyfarmacia.com/blog/wp-content/uploads/2022/09/Uvas.jpg"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            Uvas
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
                    <a href="/crearPedido"><GreenButton type="button" label="Añadir"></GreenButton></a>
                </CardFooter>
            </Card>
        )
    }

    
}

export default CardProducto