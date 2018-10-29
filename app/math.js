export function add(x,y){
    return x+y;
};

export const subtract = (x,y) => x-y;

export const multiply = (x,y) => x*y;

export const divide = (x,y) => {if (y===0){
    return "Universe Crashed";
} else 
{return x/y}};

export default "this is just a string";