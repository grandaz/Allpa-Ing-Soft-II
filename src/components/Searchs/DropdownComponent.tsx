import React, { useState } from 'react';

// Componente de desplegable
interface DropdownComponentProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="">Seleccione una opción</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};