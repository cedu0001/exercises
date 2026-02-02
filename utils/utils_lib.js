
export function getRandomNumber(min, max){
    return Math.floor((min + max)/2);
}

export function $(elName){
    return document.querySelector(elName);
}

export function $$(elName){
    return document.querySelectorAll(elName);
}