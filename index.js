// Your code here
class Polygon {

  constructor(integers) {
    this.integers = integers
  }
  get countSides() {
    return this.integers.length

  }
  get perimeter() {
    let sum = 0;
    for (let i of this.integers) {
      sum += i
    }
    return sum

  }

}
class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.integers)) return;

    let a = this.integers[0];
    let b = this.integers[1];
    let c = this.integers[2];
    if ((a + b > c) && (b + c > a) && (c + a > b)) {
      return true;
    } else {
      return false;

    }


  }
}
class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.integers)) return;

    let a = this.integers[0];
    let b = this.integers[1];
    let c = this.integers[2]; 
    let d = this.integers[3]; 
    return a === b && a === c && a === d
  }
  get area() {
    let a = this.integers[0];
    
    return a * a
  }

}