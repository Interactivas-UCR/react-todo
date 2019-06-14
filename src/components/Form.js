import React from 'react';

class Form extends React.Component {
	todoRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		console.count("I'm a pickle");

		let text = this.todoRef.current.value;

		if (text === '') return;

		let todo = {
			id: Date.now(),
			text: text,
			isCompleted: false
		};

		// console.log(todoO);
		this.props.addTodo(todo);
		this.todoRef.current.value = '';
	};

	handleChange = () => {};

	render() {
		return (
			<div>
				<h3>Ingresa un ToDo</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-4">
						<label htmlFor="">ToDo</label>
						<input
							type="text"
							ref={this.todoRef}
							className="form-control"
							value={
								this.props.editTodo != null
									? this.props.editTodo.text
									: ''
							}
							onChange={this.handleChange}
						/>
						{/* value={this.state.text} */}
					</div>
					<button className="btn btn-danger" type="submit">
						Send
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
