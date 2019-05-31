import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<div>
				<h3>Ingresa un ToDo</h3>
				<form>
					<div className="form-group col-4">
						<label htmlFor="">ToDo</label>
						<input type="text" className="form-control" />
					</div>
					<button className="btn btn-danger" type="button">Send</button>
				</form>
			</div>
		);
	}
}

export default Form;
