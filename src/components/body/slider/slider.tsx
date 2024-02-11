import { SliderWindow } from './slider-window/slider-window';
import { ArrowButton } from '../../ui/button/arrow-button';
import { Button } from '../../ui/button/button';
import { NavigationCircle } from '../../ui/button/navigation-circle';
import './slider.scss'


export function Slider() {
	return (
    <div className='slider'>
			<div className='slider__up-block'>
				< ArrowButton />
				< SliderWindow />
				< ArrowButton />
			</div>
			<div className='slider__down-block'>
				< NavigationCircle />
				< Button />
			</div>
		</div>
  );
}