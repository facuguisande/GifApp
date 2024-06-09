import React, { useState } from 'react';

export type AddCategoryProps = {
  onAddCategory: (category: string) => void;
};

const AddCategory: React.FC<AddCategoryProps> = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');
//   console.log(onAddCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      onAddCategory(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
	if (e.key === 'Enter') {
		handleSubmit();
	  }
	};



  return (
    <div>
      <input
        placeholder="Buscar Gif"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
};

export default AddCategory;
