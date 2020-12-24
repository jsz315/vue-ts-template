import { Food } from "./Food";

export class Milk extends Food{
    constructor($price:number){
        super("牛奶", $price);
    }
}