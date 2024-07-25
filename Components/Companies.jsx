import React from 'react';
export default function Companies(props) {
		return(
			<li>
			<img src={props.image} className='square' alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			</li>
		)
}