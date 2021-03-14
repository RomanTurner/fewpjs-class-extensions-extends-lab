// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, el) => {
      return (acc += el);
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.sides;
    return a + b <= c || a + c <= b || b + c <= a ? false : true;
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, ...rest] = this.sides;
    let test = this.sides.filter((el) => el === a);
    return test.length === 4 ? true : false;
  }
  get area() {
      let [a, b, ...rest] = this.sides;
      return a * b;
  }
}

