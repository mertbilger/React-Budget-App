import React, { useState, useContext } from 'react';
import ViewBudget from './butcebutton';
import EditBudget from './editButtonbutce';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { butce, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} butce={butce} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} butce={butce} />
			)}
		</div>
	);
};

export default Budget;