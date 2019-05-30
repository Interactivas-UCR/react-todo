Ejemplo básico de React

### Para crear el proyecto se utiliza el paquete:

[Create React App](https://github.com/facebook/create-react-app).

Se puede instalar de manera global:

```bash
npm i -g create-react-app
```

Una vez instalado, la forma de crear proyectos es la siguiente:

```bash
create-react-app nombre_del_proyecto
```

###### **El nombre del proyecto debe ser en minúsculas y sin espacios ni guiones**

### O se puede utilizar npx, para crear los proyectos

```bash
npx create-react-app nombre_del_proyecto
```

###### **El nombre del proyecto debe ser en minúsculas y sin espacios ni guiones**

> En el caso de usar npx, este paquete no se instala, solo se crea el proyecto

Archivo base de la aplicación

```
/src/index.js
```

Los Componentes se crean en la carpeta

```
src/components
```

Cada Componente puede ser una clase(State Component):

Ej:

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../index.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
```

O puede ser una función(Stateless Component):

```jsx
import React from 'react';

const Header = props => {
	return (
		<header>
			<h1>Hola mundo</h1>
		</header>
	);
};

export default Header;
```
