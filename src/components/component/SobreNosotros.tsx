import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SobreNosotros() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Equipo de la empresa"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height={550}
            src="/papeleria1.png"
            width={550}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sobre Nosotros
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
               En Omega, comenzamos como una papelería tradicional, pero pronto nos dimos cuenta de que la verdadera magia de dar regalos estaba siendo subestimada.
               Así que tomamos un nuevo rumbo. Ahora, no solo somos una papelería, nos dedicamos a reavivar la alegría y el encanto de regalar, sin importar el tamaño del presente.
               En Omega, creemos que cada regalo tiene el poder de crear momentos especiales y memorables, y por supuesto, seguimos brindando todos los servicios que una excelente papeleria ofrece.
              </p>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-2xl font-bold">¿Por qué elegirnos?</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Compra facil y segura.
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Variedad de productos.
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Promociones exclusivas
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Envios rapidos.
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-2xl font-bold">Qué ofrecemos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Detalles a tu alcance</h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>La empresa Omega se destaca por ofrecer una amplia gama de prodctos de alta calidad a precios muy accesibles.
                      Su objetivo principal es proporcionar momentos de felicidad a las personas cercanas mediante el regalo de dulces, peluches, decoraciones y muchos articulos especiales
                      paracelebrar fechas importantes. La compañia invita a los clientes a aprovechar sus productos para hacerque cada día sea más especial.
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">La distancia no es excusa</h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Omega ofrece una innovadora solución para aquellos momentos en los que la distancia separa a las parejas o familiares queridos.
                      A través de su servicio, los clientes pueden enviar un regalo sorpresa directamente al lugar deseado, sin importar cuán lejos este la destinataria. Ademas, se permite personalizar una tarjeta con un mensaje afectuoso, asegurado que el receptor
                      sienta el calor del envio incluso antes de abrirlo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-xl font-bold">Donde nos ubicamos</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nos encontramos ubicados en la carrera 100 con calle 139, en la ciudad de Bogotá, y ahora en nustro portal web.
                Listos para brindar la mayor seguridad, eficacia y calidad a nuesros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}