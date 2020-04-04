import React from 'react'
import './Professional.css';

const Professional = (props) => {
	return (
		<div className='professional'>
			<p className='package-name'>Professional</p>
			<p className='package-price-pro'>
				<span className='currency-pro'>$</span>
				<span className='price-pro'>{props.price}</span>
			</p>
			<ul className='package-features'>
				<li>1 TB Storage</li>
				<li>5 Users Allowed</li>
				<li>Send up to 10 GB</li>
			</ul>
		<button className='button-pro'>Learn More</button>
	</div>
	)
}

export default Professional;