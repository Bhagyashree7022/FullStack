export function addNumber(a:number, b :number):number{
    return a+b;
}

export function subtractNumber(a:number, b :number):number{
    return a-b;
}

export function multiplyNumber(a:number, b :number):number{
    return a*b;
}   

export function divideNumber(a:number, b :number):number{
    if(b === 0){
        throw new Error("Division by zero is not allowed.");
    }           

    return a/b;
}   

