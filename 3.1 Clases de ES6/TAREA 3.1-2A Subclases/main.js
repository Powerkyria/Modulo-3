'use strict';

// Perimetro: multiplica la longitud del lado por el número de lados.
// Área: eleva al cuadrado el lado.

class Polygon {
	constructor(sides, base, height) {
		this.numberOfSides = sides;
		this.base = base;
		this.height = height;
	}

	perimeter() {
		console.log(this.base * this.numberOfSides);
	}

	area() {
		return this.base * this.height;
	}
}

class Square extends Polygon {
	constructor(side) {
		super(4, side, side);
		this.side = side;
	}
}

class Triangle extends Polygon {
	constructor(base, height) {
		super(3, base, height);
	}

	area() {
		console.log(super.area() / 2);
	}
}

const mySquare = new Square(4);
const myTriangle = new Triangle(4, 3);

mySquare.perimeter();
console.log(mySquare.area());
myTriangle.perimeter();
myTriangle.area();
