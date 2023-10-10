

export default function HeroSection() {

    return (
        <div className="relative bg-hero-image overflow-hidden lg:h-screen bg-cover bg-no-repeat">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            La plataforma perfecta<br /><span>para tu negocio</span>
                        </h1>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}