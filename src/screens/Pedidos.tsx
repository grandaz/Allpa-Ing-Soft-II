import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardPedido from "../components/Cards/CardPedido"

function Pedidos() {
    return (
        <>
            <LandingNavBar></LandingNavBar>
            <div className="flex flex-wrap gap-20 justify-center mx-auto">
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>
                <CardPedido></CardPedido>   
            </div>



        </>
    )
}

export default Pedidos