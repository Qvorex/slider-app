import { IGettingImages } from '../../../../util/interface';
import { Carousel } from './carousel/carousel';
import './slider-window.scss'
import { useEffect, useState } from 'react';
import { error } from 'console';

export function SliderWindow() {

	const photoCats: IGettingImages[] = [
		{
			id: "J2PmlIizw",
			url: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
			width: 1080,
			height: 1350
			},
			{
				id: "IFXsxmXLm",
				url: "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
				width: 973,
				height: 973
				},
	]

	const [photo, setPhoto] = useState<IGettingImages[]>([])

	useEffect( () => {
		fetch('https://api.thecatapi.com/v1/images/search?limit=10')
			.then((resp) => resp.json())
			.catch((error) => console.error(error))
	}, [])

	return (
		<div className="slider-window">
			{ photoCats.map(photoCats => <Carousel photo={photoCats} key={photoCats.id} />)}
		</div>
  );
}