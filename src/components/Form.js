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
		// this.todoRef.current.value = '';
		this.setState({
			text: ''
		});
	};

	handleUpdate = () => {
		let text = this.todoRef.current.value;

		if (text === '') return;

		let todo = {
			id: Date.now(),
			text: text,
			isCompleted: false
		};

		console.log(todo);
		// this.props.updateTodo();
	};

	textChange = e => {
		// console.log(e.target.value);
		// this.todoRef.current.value = e.target.value;
		this.setState({
			text: e.target.value
		});
	};

	componentWillUpdate(nextProps, nextState) {
		console.log({ nextProps, nextState });
	}

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
							onChange={this.textChange}
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
