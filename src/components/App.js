import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import List from './List';

import '../scss/app.scss';

class App extends React.Component {
	//
	state = {
		todos: [],
		updateTodo: null
	};

	addTodo = todo => {
		this.setState({
			todos: [...this.state.todos, todo]
		});
	};

	completedTodo = todo => {
		let todos = [...this.state.todos];

		todos = todos.map(t => (t.id === todo.id ? todo : t));

		this.setState({
			todos: todos
		});
	};

	deleteTodo = todoId => {
		let todos = [...this.state.todos];

		todos = todos.filter(t => t.id !== todoId);

		this.setState({
			todos: todos
		});
	};

	setUpdateTodo = todoId => {
		let todo = this.state.todos.find(t => t.id === todoId);

		this.setState({
			updateTodo: todo
		});
	};

	//completedTodo => Son iguales
	updateTodo = todo => {
		console.log(todo);
		let todos = [...this.state.todos];

		todos = todos.map(t => {
			if (t.id === todo.id) {
				console.log(todo);
				return todo;
			} else {
				console.log(t);
				return t;
			}
		});

		this.setState({
			todos: todos,
			updateTodo: null
		});
	};

	render() {
		return (
			<div>
				<Header title="Mi hermoso Title" />

				<main className="container">
					<Form
						addTodo={this.addTodo}
						todo={this.state.updateTodo}
						setUpdateTodo={this.setUpdateTodo}
						updateTodo={this.updateTodo}
					/>

					<List
						todos={this.state.todos}
						completedTodo={this.completedTodo}
						deleteTodo={this.deleteTodo}
						setUpdateTodo={this.setUpdateTodo}
					/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
