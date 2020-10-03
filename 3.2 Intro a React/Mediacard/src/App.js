import React from 'react';
import './styles/App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//Ejercicio 1: Sólo el <header> y el <main>.
		const appHeader = (
			<header className="header">
				<div className="image" />
				<div className="author">
					<h3>Nombre Apellido</h3>
					<p className="date">Sábado 26 de Septiembre de 2020</p>
				</div>
			</header>
		);

		const appMain = (
			<main>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas
					quis ipsum suspendisse ultrices gravida dictum fusce. Enim neque
					volutpat ac tincidunt vitae. Nisl nisi scelerisque eu ultrices. Ac
					tincidunt vitae semper quis lectus. Urna et pharetra pharetra massa
					massa ultricies mi. Volutpat ac tincidunt vitae semper quis lectus
					nulla at. Aliquam id diam maecenas ultricies mi. Amet consectetur
					adipiscing elit pellentesque habitant. Id leo in vitae turpis massa
					sed. Tellus at urna condimentum mattis pellentesque id.{' '}
				</p>

				<div className="footer">
					<p className="more">Leer más...</p>
					<p className="likes">
						37 <i class="fas fa-heart" />
					</p>
				</div>
			</main>
		);

		//Ejercicio 2: return sólo puede devolver un elemento madre, así que tenemos que meter el <header> y el <main> en constantes para luego usarlas dentro de otra constante que las contiene dentro de una madre <div> (en mi caso 2, por maquetación). Así return sólo devuelve ésta última constante.

		const appRoot = (
			<div className="app">
				<div className="card">
					{appHeader}
					{appMain}
				</div>
			</div>
		);

		return appRoot;
	}
}

export default App;
