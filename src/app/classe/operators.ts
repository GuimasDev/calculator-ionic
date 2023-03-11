export class Operators {
    sum = {
        symbol: "+",
        calc: (a: number, b: number) => a+b
    }
    
    subtraction = {
        symbol: "-",
        calc: (a: number, b: number) => a-b
    }

    multiplication = {
        symbol: "x",
        calc: (a: number, b: number) => a*b
    }

    division = {
        symbol: "/",
        calc: (a: number, b: number) => a/b
    }



    selected: {symbol: string, calc: any} | null;
    
    constructor(){
        this.selected = null;
    }

    select(operator: {symbol: string, calc: any}):void{
        this.selected = operator;
    }

    deselect(){
        this.selected = null;
    }
}
