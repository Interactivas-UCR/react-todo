import React from 'react';

class ListItem extends React.Component {
	handleChange = () => {
		this.props.completedTodo({
			...this.props.todo,
			isCompleted: !this.props.todo.isCompleted
		});
	};

	handleDelete = () => {
		this.props.deleteTodo(this.props.todo.id);
	};

	render() {
		return (
			<li className="list-group-item d-flex align-items-center flex-row">
				<div className="form-group form-check flex-grow-1">
					<input
						checked={this.props.todo.isCompleted}
						type="checkbox"
						className="form-check-input"
						onChange={this.handleChange}
						id={this.props.todo.id}
					/>
					<label
						className="form-check-label"
						htmlFor={this.props.todo.id}
					>
						{this.props.todo.text}
					</label>
				</div>
				<div className="btn-group" role="group">
					<button
						className="btn btn-primary"
						onClick={() =>
							this.props.setUpdateTodo(this.props.todo.id)
						}
					>
						Editar
					</button>
					<button
						className="btn btn-danger"
						onClick={this.handleDelete}
					>
						Eliminar
					</button>
				</div>
			</li>
		);
	}
}

export default ListItem;
