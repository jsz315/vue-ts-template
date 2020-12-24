import { Food } from "./Food";

export class Milk extends Food{

    date:string | undefined;

    constructor($price:number){
        super("牛奶", $price);
        this.date = "2020";
    }


}