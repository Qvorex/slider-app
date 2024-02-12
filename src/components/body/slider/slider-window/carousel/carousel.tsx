import { IGettingImages } from "../../../../../util/interface"
import './carousel.scss'


interface PhotoProp {
	photo: IGettingImages;
}

export function Carousel(prop:PhotoProp) {
	return (
		<div className="photo-container">
			<span>Заголовок кошака</span>
			<img className="img-photo" src={prop.photo.url} alt="" />
		</div>
	)
}