import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

import '../scss/app.scss';

class App extends React.Component {
	//
	state = {
		todos: ['Ser el mejor programador', 'Hacer todas las tareas']
	};

	render() {
		return (
			<div>
				<Header title="Mi hermoso Title" />

				<main className="container">
					<Form />

					<ul>
						{this.state.todos.map(todo => {
							return <li>{todo}</li>;
						})}
					</ul>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
