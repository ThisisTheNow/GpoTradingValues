import * as value from './values'
export function CalulateValue(item:string, quantity:number) {
    let total = 0;
    const x = value.values[item as keyof typeof value.values];
    total = x * quantity;
    return total;
};

