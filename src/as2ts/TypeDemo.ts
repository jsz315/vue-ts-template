import { Food } from "./data/Food";
import { Milk } from "./data/Milk";

export class TypeDemo{

    constructor(){
        this.test();
    }

    test(){
        let milk = new Milk(3.2);
        console.log("milk instanceof Milk", milk instanceof Milk);
        console.log("milk instanceof Food", milk instanceof Food);
        var info = milk.getInfo();
        console.log(info);
        var str = milk.toString();
        console.log(str);
    }
}