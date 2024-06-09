// import React, { useState } from 'react';
import { ImagesType } from '../GifGrid/GifGrid';

export type GifItemCardProps = {
	images: ImagesType,
}

const GifItemCard: React.FC<GifItemCardProps>  = ({images}) => {
	// const [gif, setgif] = useState('');

	const { title, url } = images;
	return (

		<div className="card">
			<img src={url} alt={title} />
			<p>{images.title} </p>

		</div>
	);
};

export default GifItemCard;
