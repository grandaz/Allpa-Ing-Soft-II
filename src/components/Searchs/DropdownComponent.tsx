'use client';

import { useEffect, useState } from 'react'
import { Dropdown } from 'flowbite-react';
import ProductTO from '../../to/ProductTO';
import ProductManager from '../../manager/ProductManager';

interface DropdownComponentProps{
  enviarIdProduct: (id: number) => void

}

function DropdownComponent(props: DropdownComponentProps) {

  const [nombreProducto, setNombreProducto] = useState<string>('Producto')
  const [productos, setProductos] = useState<ProductTO[]>([])

  useEffect(() => {
    const productManager = new ProductManager()

    productManager.findAll()
      .then(data => {
        setProductos(data)
      })

  }, [])

  const handleEnviarIdProduct = (id: any, name: any) => {
    setNombreProducto(name)
    props.enviarIdProduct(id)
  }

  return (
    <Dropdown label={nombreProducto} dismissOnClick={true}>
      {
        productos.map((item, key) => (
          <Dropdown.Item key={key} onClick={() => handleEnviarIdProduct(item.idProduct, item.name)}>{item.name}</Dropdown.Item>
        ))
      }
    </Dropdown>
  );
}

export default DropdownComponent