'use client';

import { Card } from 'flowbite-react';
import RatingStars from '../Rating/RatingStars';
import Logo from '../../assets/imagen_pruebas.jpg'

export default function CardPedido() {
  return (
    <Card className='w-1/6'
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={Logo}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          <p>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
      <RatingStars />
        <span className="ml-3 mr-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-800">
          <p>
            5.0
          </p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900">
          $599
        </span>
        <a
          className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none"
          href="#"
        >
          <p>
            Add to cart
          </p>
        </a>
      </div>
    </Card>
  )
}


