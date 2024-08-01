import { IGettingImages } from '../../../../util/interface';
import { Carousel } from '../carousel/carousel';
import './slider-window.scss'
import { useEffect, useState } from 'react';

export function SliderWindow() {

	const [photo, setPhoto] = useState<IGettingImages[]>([])

	useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/' +
                'search?limit=10' +
                '&api_key=live_R1MwFvT66uIz2kSxWlKjfpcwfjkg7eG9106fq2FSZ2UHQpkWPprpxihaXwG4DFID' +
                '&has_breeds=1')
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Сервер не отвечает');
            }
            return resp.json();
        })
        .then((photo) => setPhoto(photo))
        .catch((error) => {
            console.error('Ошибка при извлечении массива', error);
        });
}, []);

	return (
		<div className="slider-window">
			{ photo.map((photo) => (
			<Carousel photo={photo} key={photo.id} />
			))}
		</div>
  );
}