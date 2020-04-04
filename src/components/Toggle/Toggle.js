import React from 'react'
import './Toggle.css';

const Toggle = (props) => {
	return (
		<div className='toggle'>
			<h1 class='header'>Our Pricing</h1>
			<span class='periodicity'>Annually</span>
    	<label class='switch'>
				<input type='checkbox' onClick={props.toggle} />
      	<span class='slider'></span>
    	</label>
    	<span class='periodicity'>Monthly</span>
		</div>
	)
}

export default Toggle;