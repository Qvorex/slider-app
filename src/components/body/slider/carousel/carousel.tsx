import {IGettingImages} from "../../../../util/interface"
import './carousel.scss'


interface PhotoProp {
	photo: IGettingImages;
}

export function Carousel(prop:PhotoProp) {
	return (
		<div className="photo-container">
			<div className="description-photo">
				<h1>{prop.photo.breeds[0].name}</h1>
				<h3>{prop.photo.breeds[0].description}</h3>
			</div>
			<img className="img-photo" src={prop.photo.url} alt="" />
		</div>
	)
}