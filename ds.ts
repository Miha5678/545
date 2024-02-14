//class ClassName{}
//class Point {x: number; y: number;}
//let point: Point = new Point();
//point.x = 1;
//function pointw(){point.x; point.y;}
//
//class Point2 {width: number; height: number;}
//let point2: Point2 = new Point2();
//point2.width = 1; 
//point2.height = 2;
//
//class Rect{
//    public x1:number
//    public x2:number;
//    public y1:number;
//    public y2:number
//   
//   private readonly MAX_COORD = 1000;
//    constructor(x1:number, x2:number, y1:number, y2:number){
//      this.x1=2
//        this.x2=4
//        this.y1=6
//        this.y2=8
//    }
//    square (){
//        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)}
// 
//}
//let a: Rect= new Rect(2,4,6,8,)
//console.log(a.square())

class Point {
    x?: number
    y?: number
    constructor(val1?: number, val2?: number){
        this.x = val1
        this.y = val2
    }
}

class Triangle {
    x?: Point
    y?: Point
    z?: Point
    constructor(x1?: number,y1?: number,x2?: number,y2?: number,x3?: number,y3?: number){
      this.x = new Point(x1,y1)
      this.y = new Point(x2,y2)
      this.z = new Point(x3,y3)
    }
}
let point1: Point = new Point(5,6)

let tr0: Triangle = new Triangle()
let tr1: Triangle = new Triangle(1,2,3,4,5,6)
