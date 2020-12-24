export class Milk{

    width:number = 0;
    height:number = 0;

    constructor($width:number = 0, $height:number = 0){
        this.width = $width;
        this.height = $height;
    }

    show(){
        console.log("width: " + this.width + ", height: " + this.height);
    }
}