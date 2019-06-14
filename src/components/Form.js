import React from 'react';

class Form extends React.Component {
	// todoRef = React.createRef();

	state = {
		text: ''
	};

	handleSubmit = e => {
		e.preventDefault();
		console.count("I'm a pickle");

		// let text = this.todoRef.current.value;
		let text = this.state.text;
		// let { text } = this.state;

		if (text === '') return;

		let todo = {
			id: Date.now(),
			text: text,
			isCompleted: false
		};

		// console.log(todoO);
		this.props.addTodo(todo);
		// this.todoRef.current.value = '';

		//Siempre que se quiere manipular el stado se debe de usar el
		// metodo setState
		this.setState({
			text: ''
		});
	};

	handleChange = e => {
		// console.log(e.target.value);
		this.setState({
			text: e.target.value
		});
	};

	componentWillMount = () => {
		console.log('componentWillMount');
	};

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
							value={this.state.text}
							onChange={this.handleChange}
						/>
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
