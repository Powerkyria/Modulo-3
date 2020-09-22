'use strict';

class square {  /*---> clase*/
	constructor(side) {
		this.side = side; /*---> atributo?*/
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