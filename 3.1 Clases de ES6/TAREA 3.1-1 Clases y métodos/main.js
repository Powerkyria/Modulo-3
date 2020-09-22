'use strict';

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
