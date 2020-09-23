'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-3.-react/3_1_clases_es6#ejercicio-1

class square {
	perimeter(side) {
		console.log(side * 4);
	}
	area(side) {
		console.log(side * side);
	}
}

const mySquare = new square();
mySquare.perimeter(9);
mySquare.area(9);
