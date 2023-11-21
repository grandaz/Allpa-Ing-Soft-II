import GreenButton from "../Inputs/GreenButton";
import React, { useState } from 'react';
import DropdownComponent from "./DropdownComponent";

const SearchOrdersComponent: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>(''); // Estado para almacenar la opción seleccionada
  
    const handleDropdownChange = (selectedOption: string) => {
      setSelectedOption(selectedOption);
    };
  
    const handleSearchClick = () => {
      // Aquí deberías realizar la lógica de búsqueda de pedidos con la opción seleccionada
      console.log(`Buscar pedidos para: ${selectedOption}`);
      // Puedes llamar a tu función para buscar pedidos aquí
    };
  
    return (
      <div>
        {/* Componente de desplegable */}
        <DropdownComponent options={['Producto A', 'Producto B', 'Producto C']} onChange={handleDropdownChange} />
        <GreenButton label="Buscar Pedidos" onClick={handleSearchClick} />
      </div>
    );
  };
  
  export default SearchOrdersComponent;