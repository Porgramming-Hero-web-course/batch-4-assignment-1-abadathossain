{
  // 
  class Shape {
    calculateShapeArea(): number {
      return 0;
    }
  }

  // For Circle 
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    calculateShapeArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // For Rectangle 
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    calculateShapeArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(parseFloat(param.calculateShapeArea().toFixed(2)));
  };

  const shape = new Shape();
  const shapeCircle = new Circle(5);
  const shapeRectangle = new Rectangle(4, 6);

  getShapeArea(shapeCircle);
  getShapeArea(shapeRectangle);


  // 
}