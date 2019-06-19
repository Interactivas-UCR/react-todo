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
		editTodo: null
	};

	addTodo = todo => {
		this.setState({
			todos: [...this.state.todos, todo]
		});
	};

	updateTodo = todo => {
		// console.log(todo.isCompleted);
		let todos = [...this.state.todos];

		todos = todos.map(t => {
			if (t.id === todo.id) {
				return todo;
			} else {
				return t;
			}
		});

		//todos = [...this.state.todos].map(t => t.id === todo.id ? todo : t);

		this.setState({
			todos: todos,
			editTodo: null
		});
	};

	deleteTodo = id => {
		let todos = [...this.state.todos];

		todos = todos.filter(t => t.id !== id);

		this.setState({
			todos
		});
	};

	setEditTodo = id => {
		let todo = [...this.state.todos].find(t => t.id === id);
		this.setState({
			editTodo: todo === undefined ? null : todo
		});
	};

	render() {
		return (
			<div>
				<Header title="Mi hermoso Title" />

				<main className="container">
					<Form
						addTodo={this.addTodo}
						editTodo={this.state.editTodo}
						updateTodo={this.updateTodo}
					/>

					<List
						todos={this.state.todos}
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}
						setEditTodo={this.setEditTodo}
					/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
