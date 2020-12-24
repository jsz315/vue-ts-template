import { Food } from "./data/Food";
import { Milk } from "./data/Milk";
import {nvs} from './views/NamespaceTest';
import {mvs} from './views/ModuleTest';
import { IFood } from "./interfaces/Ifood";


export class Demo{

    constructor(){
        this.init();
    }

    init(){
        let milk = new Milk(3.2);

        let info = milk.getInfo();
        console.log(info);
        let str = milk.toString();
        console.log(str);

        let food = new Food("食物");
        console.log(food.getInfo());

        this.testConvert(milk);
        this.testNamespace();
        this.testModule();
        this.testType(milk);

    }

    /**
     * 命名空间
     */
    testNamespace(){
        new nvs.Milk();
        new nvs.Food();
    }

    /**
     * 模块化
     */
    testModule(){
        new mvs.Milk();
        new mvs.Food();
    }

    /**
     * 类型转换
     * @param $food 
     */
    testConvert($food:IFood):void{
        console.log("date", ($food as Milk).date);
    }

    /**
     * 类型判断
     * @param $milk 
     */
    testType($milk:IFood){
        console.log("milk instanceof Milk", $milk instanceof Milk);
        console.log("milk instanceof Food", $milk instanceof Food);
        console.log("milk instanceof IData", $milk.hasOwnProperty("IDataProperty"));
    }
    
}