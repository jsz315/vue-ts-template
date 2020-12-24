import { IData } from "../interfaces/IData";
import { IFood } from "../interfaces/Ifood";

export class Food implements IFood, IData{

    name:string;
    price:number;

    constructor($name:string = "", $price:number = 0){
        this.name = $name;
        this.price = $price
    }

    toString(): string {
        return JSON.stringify({name: this.name, price:this.price});
    }
    parseJson($data: string): Object {
        return JSON.parse($data);
    }

    getInfo():string{
        return `name: ${this.name}, price: ${this.price}`;
    }
}