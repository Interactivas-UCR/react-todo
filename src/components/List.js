import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
	render() {
		return (
			<ul className="list-group mt-5">
				{this.props.todos.map(todo => {
					return (
						<ListItem
							key={todo.id}
							todo={todo}
							updateTodo={this.props.updateTodo}
							deleteTodo={this.props.deleteTodo}
							setEditTodo={this.props.setEditTodo}
						/>
					);
				})}
			</ul>
		);
	}
}

export default List;
