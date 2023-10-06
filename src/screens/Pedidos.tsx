import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardPedido from "../components/Cards/CardPedido"

function Pedidos() {
    return (
        <>
            <LandingNavBar></LandingNavBar>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 mt-8">Subtitulo 1</h2>
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