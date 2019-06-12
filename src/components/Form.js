import React from 'react';

class Form extends React.Component {
	todoRef = React.createRef();

	state = {
		text: ''
	};

	handleSubmit = e => {
		e.preventDefault();

		// let text = this.todoRef.current.value;
		let text = this.state.text;

		if (text === '') return;

		let todo = {
			id: Date.now(),
			text: text,
			isCompleted: false
		};

		this.props.addTodo(todo);

		this.setState({
			text: ''
		});
	};

	handleUpdate = e => {
		e.preventDefault();

		let text = this.todoRef.current.value;

		if (text === '') return;

		let todo = {
			id: this.props.todo.id,
			text: text,
			isCompleted: this.props.todo.isCompleted
		};

		this.props.updateTodo(todo);
		this.setState({
			text: ''
		});
	};

	textChange = e => {
		this.setState({
			text: e.target.value
		});
	};

	componentWillUpdate(nextProps, nextState) {
		// console.log({ nextProps, nextState });
		if (nextProps.todo !== null) {
			// console.log(nextProps.todo.text);
			if (nextProps.todo !== this.props.todo) {
				this.setState({
					text: nextProps.todo.text
				});
			}
		}
	}

	render() {
		return (
			<div className="mt-5">
				<h3>Ingresa un ToDo</h3>
				<form
					onSubmit={
						this.props.todo === null
							? this.handleSubmit
							: this.handleUpdate
					}
				>
					<div className="form-group col col-sm-12 col-md-6 col-lg-6">
						<label htmlFor="">ToDo</label>
						<input
							type="text"
							ref={this.todoRef}
							className="form-control"
							value={this.state.text}
							onChange={this.textChange}
						/>
					</div>
					{this.props.todo === null ? (
						<button className="btn btn-danger" type="submit">
							Crear
						</button>
					) : (
						<button className="btn btn-primary" type="submit">
							Actualizar
						</button>
					)}
				</form>
			</div>
		);
	}
}

export default Form;
