import LandingNavBarCanasta from "../components/NavBar/LandingNavBarCanasta"
import CardPedidoModificar from "../components/Cards/CardPedidoModificar"

function MisPedidos() {

    let pedidos = [
        {
            id: 1,
            logoEmpresa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Wong_Cencosud.png',
            empresa: "Wong",
            fecha: "14/05/24",
            producto: "Papa",
            detalle: "in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
            cant: 1000
        },
        {
            id: 2,
            logoEmpresa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Wong_Cencosud.png',
            empresa: "Wong",
            fecha: "16/06/23",
            producto: "Uvas",
            detalle: "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,",
            cant: 690
        },
        {
            id: 3,
            logoEmpresa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Wong_Cencosud.png',
            empresa: "Wong",
            fecha: "24/05/23",
            producto: "Quinoa",
            detalle: "risus, at fringilla purus mauris a nunc. In at",
            cant: 900
        },
        {
            id: 4,
            logoEmpresa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Wong_Cencosud.png',
            empresa: "Wong",
            fecha: "03/09/24",
            producto: "Azucar",
            detalle: "aliquet nec, imperdiet nec, leo. Morbi",
            cant: 200
        },
        {
            id: 5,
            logoEmpresa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Wong_Cencosud.png',
            empresa: "Wong",
            fecha: "22/09/23",
            producto: "Zanahoria",
            detalle: "in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula",
            cant: 150
        }
    ]

    return (
        <>
            <LandingNavBarCanasta></LandingNavBarCanasta>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Mis pedidos</h2>
            <div className="flex flex-wrap gap-20 justify-center mx-auto">
                {pedidos.map(element => (
                        <CardPedidoModificar 
                            key={element.id}
                            logoEmpresa={element.logoEmpresa} 
                            empresa={element.empresa}
                            fecha={element.fecha}
                            producto={element.producto}
                            detalle={element.detalle}
                            cant={element.cant}
                        ></CardPedidoModificar>
                    ))}
            </div>
        </>
    )
}

export default MisPedidos