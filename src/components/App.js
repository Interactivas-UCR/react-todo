import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import List from './List';

import '../scss/app.scss';

class App extends React.Component {
	//
	state = {
		todos: []
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
			todos: todos
		});
	};

	deleteTodo = id => {
		let todos = [...this.state.todos];

		todos = todos.filter(t => t.id !== id);

		this.setState({
			todos
		});
	};

	render() {
		return (
			<div>
				<Header title="Mi hermoso Title" />

				<main className="container">
					<Form addTodo={this.addTodo} />

					<List
						todos={this.state.todos}
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}
					/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
