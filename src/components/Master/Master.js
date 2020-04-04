import React from 'react';
import './Master.css';

const Master = (props) => {
	return (
		<div className='master'>
			<p className='package-name-master'>Master</p>
    	<p className='package-price-master'>
				<span className='currency'>$</span>
				<span className='price'>{props.price}</span>
			</p>
    	<ul className='package-features-master'>
				<li>2 TB Storage</li>
				<li>10 Users Allowed</li>
				<li>Send up to 20 GB</li>
    	</ul>
		<button className='button-master'>Learn More</button>
		</div>
	)
}

export default Master;