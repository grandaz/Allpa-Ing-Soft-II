import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import GreenButton from "../Inputs/GreenButton";
import RatingStars from "../Rating/RatingStars";
import Logo from '../../assets/icon1.png'

function CardPedido() {
    return (
        <Card className="w-96">
            
            <CardHeader shadow={false} floated={false} className="h-26">
            <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src={Logo} alt=""></img>
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <RatingStars></RatingStars>
                    </div>
                </div>
                

                
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        Apple AirPods
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        $95.00
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                
                <GreenButton type="button" label="Add to Cart"></GreenButton>
            </CardFooter>
        </Card>
    );
}

export default CardPedido