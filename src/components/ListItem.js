import React from 'react';

const ListItem = props => {
	return (
		<li className="list-group-item">
			<div className="form-group form-check">
				<input
					checked={props.todo.isCompleted}
					type="checkbox"
					className="form-check-input"
				/>
				<label className="form-check-label" for="exampleCheck1">
					{props.todo.text}
				</label>
			</div>
		</li>
	);
};

export default ListItem;
