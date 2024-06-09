// import React, { useEffect, useState } from 'react';
// import { getGifs } from '../../helpers/Getgif';
import { GifItemCard } from '../GifItemCard';
import { UseFetchGifs } from '../../hooks/useFecthGifs';
// import * as UseFetchGifs from '../../hooks/UseFetchGifs/useFetchGifs'

export type GifGridProps = {
	// types...
	category: string,
}

export type ImagesType = {
	id: string,
	title: string,
	url: string,

}



const GifGrid: React.FC<GifGridProps>  = ({ category }) => {

	const {images, isLoading} = UseFetchGifs(category)	
	
	return (
		<>
			<h3> {category}</h3>
			{
				isLoading ? (
					<h2>Cargando Gifs</h2>
				) : null

			}
			<div className='card-grid'>
				{
					images.map((cat : ImagesType) => ( 
						<GifItemCard
						key={cat.id} 
						images= {cat} 
						/>
					
					)
					

					)

				}

			</div>			
		
		
		</>
	);
};

export default GifGrid;
