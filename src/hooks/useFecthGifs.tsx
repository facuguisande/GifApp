import { useEffect, useState } from 'react'
import { ImagesType } from '../components/GifGrid/GifGrid';
import { getGifs } from '../helpers/Getgif';


export  const UseFetchGifs = (category: string) => {
    
const [images, setimages] = useState<ImagesType[]>([])
const [isLoading, setisLoading] = useState(true)


	const getImages = async() => {
		const newImagesPet = await getGifs(category);
		setimages(newImagesPet);
        setisLoading(false);

	}

	useEffect(() => {
	  getImages();
	
	  
	}, [])


  return {
    images,
    isLoading,
  
}

}

