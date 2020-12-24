export interface IData{
    toString():string;
    parseJson($data:string):Object;
    IDataProperty:string;
}