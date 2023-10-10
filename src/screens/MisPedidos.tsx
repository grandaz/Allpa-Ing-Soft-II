import LandingNavBar from "../components/NavBar/LandingNavBar"
import CardPedidoModificar from "../components/Cards/CardPedidoModificar"

function MisPedidos() {

    let pedidos = [
        {
            id: 1,
            logoEmpresa: 'https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png',
            empresa: "Justin House",
            fecha: "14/05/24",
            producto: "iaculis odio.",
            detalle: "in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
            precio: 6.62
        },
        {
            id: 2,
            logoEmpresa: 'https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png',
            empresa: "Wendy Bush",
            fecha: "16/06/23",
            producto: "Quisque purus",
            detalle: "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,",
            precio: 6.92
        },
        {
            id: 3,
            logoEmpresa: 'https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png',
            empresa: "Nina Santana",
            fecha: "24/05/23",
            producto: "convallis erat,",
            detalle: "risus, at fringilla purus mauris a nunc. In at",
            precio: 7.77
        },
        {
            id: 4,
            logoEmpresa: 'https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png',
            empresa: "Nolan Pruitt",
            fecha: "03/09/24",
            producto: "Curabitur massa.",
            detalle: "aliquet nec, imperdiet nec, leo. Morbi",
            precio: 6.68
        },
        {
            id: 5,
            logoEmpresa: 'https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png',
            empresa: "Madonna Padilla",
            fecha: "22/09/23",
            producto: "ultrices. Duis",
            detalle: "in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula",
            precio: 8.99
        }
    ]

    return (
        <>
            <LandingNavBar></LandingNavBar>
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
                            precio={element.precio}
                        ></CardPedidoModificar>
                    ))}
            </div>
        </>
    )
}

export default MisPedidos