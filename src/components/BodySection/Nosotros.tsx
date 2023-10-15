import { Component } from 'react'
class submenu {
  name: string;
  href: string;

  constructor(name: string, href: string) {
    this.name = name;
    this.href = href;
  }

  showsubmenu() {
    return '<a key={${this.name} href={link.href}>{link.name} <span aria-hidden="true">&rarr;</span></a>';
  }
}



const submenus: submenu[] = [
  new submenu('Participantes', '#'),
  new submenu('Mision Vision', '#'),
  new submenu('Políticas', '#'),
  new submenu('Contactanos', '#')]

const stats = [
  { name: 'Empleados Activos', value: '6' },
  { name: 'Horas de Atención', value: '7 am a 5pm' },
  { name: 'Disponibilidad Web', value: 'Activa' },
  { name: 'Socios Actuales', value: '25' },
]
/*Realizar una base de datos sobre estos datos. */
class Nosotros extends Component {

  render() {
    return (
      <div>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-15">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-50 w-50 object-cover object-right md:object-center" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">¿Quienes Somos?</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Somos una empresa especializada en el desarrollo de soluciones de e-commerce.
                Contamos con un equipo de profesionales con amplia experiencia en el sector.
                Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio a través del e-commerce.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <script src="script.tsx"></script>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-15">
          <img
            src="https://thefoodtech.com/wp-content/uploads/2023/06/Expertos-hacen-un-llamado-para-garantizar-el-acceso-a-las-tecnologias-para-agricultores-rurales.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Mision</h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Soluciones de venta agrícola que conectan a los agricultores con los mercados de manera eficiente y equitativa, mejorando la vida de las comunidades agrícolas.</p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Vision</h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Un mundo donde todos los agricultores tengan la oportunidad de prosperar, contribuyendo a la seguridad alimentaria y la sostenibilidad del planeta.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {/*{submenus.map((submenu,name,) => (
                              <a key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                              </a>
                            ))}*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Nosotros