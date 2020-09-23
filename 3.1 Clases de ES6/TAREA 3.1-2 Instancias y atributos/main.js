'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-3.-react/3_1_clases_es6#ejercicio-2

class square {  /*---> clase*/
	constructor(side) {
		this.side = side; /*---> atributo*/
	}
	perimeter() {  /*---> metodo*/
		console.log(this.side * 4);
	}
	area() {  /*---> metodo*/
		console.log(this.side * this.side);
	}
}

const mySquare = new square(1); /*---> instancia*/
const mySquare2 = new square(3); /*---> instancia*/
const mySquare3 = new square(7); /*---> instancia*/

mySquare.perimeter();
mySquare.area();
mySquare2.perimeter();
mySquare2.area();
mySquare3.perimeter();
mySquare3.area();