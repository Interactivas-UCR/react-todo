import React from 'react';

class ListItem extends React.Component {
	handleChange = () => {
		this.props.updateTodo({
			...this.props.todo,
			isCompleted: !this.props.todo.isCompleted
		});
	};

	render() {
		return (
			<li className="list-group-item d-flex align-content-center flex-row">
				<div className="form-group form-check flex-grow-1">
					<input
						id={this.props.todo.id}
						checked={this.props.todo.isCompleted}
						type="checkbox"
						className="form-check-input"
						onChange={this.handleChange}
					/>
					<label
						className="form-check-label"
						htmlFor={this.props.todo.id}
					>
						{this.props.todo.text}
					</label>
				</div>
				<div className="btn-group">
					<button className="btn btn-primary">Editar</button>
					<button
						className="btn btn-danger"
						onClick={() =>
							this.props.deleteTodo(this.props.todo.id)
						}
					>
						Eliminar
					</button>
				</div>
			</li>
		);
	}
}

export default ListItem;
