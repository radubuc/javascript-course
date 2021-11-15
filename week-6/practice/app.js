//DEBUGGING VIDEO NOTES

//console.log(hasStringAtEnd('hello', 'llo')); //true
//console.log(hasStringAtEnd('llo', 'hello')); //true
//console.log(hasStringAtEnd('llod', 'hello')); //false
//console.log(hasStringAtEnd('ll', 'hello')); //false
//console.log(hasStringAtEnd('llo', 'hellod')); //false

//function hasStringAtEnd(a, b) {
//    let shortest = '';
//    let longetst = ''; //Still works even though this is spelled wrong?
//    if (a.length < b.length) {
//        shortest = a;
//        longest = b;
//    } else {
//        shortest = b;
//        longest = a;
//    }

//    const indexStart = longest.length - shortest.length;
//    //const endOfLongest = longest.substring(indexStart + 1); // +1 is causing the error here
//    const endOfLongest = longest.substring(indexStart);
//    return shortest === endOfLongest;
//}



//UNIT TESTS VIDEO

function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}