import { IData } from "../interfaces/IData";
import { IFood } from "../interfaces/Ifood";

export class Food implements IFood, IData{

    name:string;
    price:number;
    IDataProperty: string;
    IFoodProperty: string;

    constructor($name:string = "", $price:number = 0){
        this.name = $name;
        this.price = $price
        this.IDataProperty = "";
        this.IFoodProperty = "";
    }

    /**
     * 转为json字符串
     */
    toString(): string {
        return JSON.stringify({name: this.name, price:this.price});
    }

    /**
     * 字符串转json
     * @param $data json字符串
     */
    parseJson($data: string): Object {
        return JSON.parse($data);
    }

    /**
     * 获取数据内容字符串
     */
    getInfo():string{
        return `name: ${this.name}, price: ${this.price}`;
    }
}