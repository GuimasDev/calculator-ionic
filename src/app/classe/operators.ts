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

    potentiation = {
        symbol: "^2",
        calc: (a: number) => a*a,
        specialOp: true
    }

    sqrt = {
        symbol: "",
        calc: (a: number) => a**(1/2),
        specialOp: true
    }

    inverse = {
        symbol: "",
        calc: (a: number) => (1/a),
        specialOp: true
    }

    percent = {
        symbol: "",
        calc: (a: number) => (a/100),
        specialOp: true
    }



    selected: {symbol: string, calc: any} | null;
    
    constructor(){
        this.selected = null;
    }

    select(operator: {symbol: string, calc: any}):void {
        this.selected = operator;
    }

    deselect(){
        this.selected = null;
    }
}
