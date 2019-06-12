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
							completedTodo={this.props.completedTodo}
							deleteTodo={this.props.deleteTodo}
							setUpdateTodo={this.props.setUpdateTodo}
						/>
					);
				})}
			</ul>
		);
	}
}

export default List;
