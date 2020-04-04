import React from 'react';
import './Basic.css';

const Basic = (props) => {
	return (
		<div className='basic'>
			<p className='package-name-basic'>Basic</p>
    	<p className='package-price-basic'>
				<span className='currency'>$</span>
				<span className='price'>{props.price}</span>
			</p>
    	<ul className='package-features-basic'>
				<li>500 GB Storage</li>
				<li>2 Users Allowed</li>
				<li>Send up to 3 GB</li>
    	</ul>
		<button className='button-basic'>Learn More</button>
		</div>
	)
}

export default Basic;