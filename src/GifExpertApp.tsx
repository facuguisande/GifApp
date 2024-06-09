import { useState } from 'react';
import './GifExpertApp.css'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  // const apiGif = sDnvI0lu2Qq1HjvWTq8JSOH2r7Aj33iu;


  return (
    <>
      <h1>GIF EXPERT APP</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
      categories.map((category) => (
          <GifGrid  
          key={category}
          category={category}
          />
          
        ))
      }
  
    </>
  );
}

export default GifExpertApp;