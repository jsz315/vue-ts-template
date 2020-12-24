export class Food{

    color:string;

    constructor($color:string){
        this.color = $color;
    }

    show(){
        console.log("color: " + this.color);
    }
}