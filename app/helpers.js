import $ from "jquery";

export function addToDom(tag, text){
    const newElement = $(`<${tag}>`, {text:text, addClass:"nice"});  
    $('#root').append(newElement);
}