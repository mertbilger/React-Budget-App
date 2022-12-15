import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Bütçe: {props.butce} TL</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;