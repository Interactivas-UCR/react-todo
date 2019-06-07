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

	render() {
		return (
			<div>
				<Header title="Mi hermoso Title" />

				<main className="container">
					<Form addTodo={this.addTodo} />

					<List todos={this.state.todos} />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
