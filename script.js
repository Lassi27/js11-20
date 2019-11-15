function firstLast6(arr) {
    var first = arr[0];
    if(first == 6){
        return true;
    }
    var last = arr[arr.length-1];

    if (last == 6 ){
        return true;
    }else{
        return false;
    }

}

function has23(arr){
    var first = arr[0];
    var last = arr[arr.length-1];
    if(first == 2 || last == 2){
        return true;
    }

    if (first == 3 || last == 3){
        return true;
    }

    return false;

}

function fix23(arr){
    for(var i = 0; i < arr.length; i++ ){
        if (arr[i] == 2 && arr [i+ 1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

function countYZ(str) {

    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if ((str[i] == "z" || str[i] == "y") && (str[i + 1] == " " || str.length == i + 1)) {
            count += 1;
        }
        if ((str[i] == "Z" || str[i] == "Y") && (str[i + 1] == " " || str.length == i + 1)) {
            count += 1;
        }
    }
    return count;
}
function endOther (str,str2){
    str = str.toLowerCase();
    str2 = str2.toLowerCase();

    if ( (str[str.length-1] == str2[str2.length-1]) && (str[str.length-2] == str2[str2.length-2])){
        return true;
    }

    if ( (str.length == 1) &&(str[str.length-1] == str2[str2.length-1])){
        return true;
    }
    return false;

}

function starOut(str) {
    var newWord = "";
    for(var i= 0; i< str.length; i++){
        if(str[i] != "*" && str[i+1] !="*" && str[i-1] !="*"){
            newWord += str[i];
        }

    }
    return newWord;
}


function getSandwich(str) {
    var newWord = "";
    if(str.indexOf("bread") == -1){
        return newWord;
    }
    if(str.indexOf("bread") == str.lastIndexOf("bread")){
        return newWord;
    }

    if(str.indexOf("bread") != str.lastIndexOf("bread")){
        for(var i = str.indexOf("bread")+5; i < str.lastIndexOf("bread"); i++){
            newWord += str[i];
        }
    }
    return newWord;
}

function canBalance(arr){
    var x = 0;
    var y=0;

    if(arr.length == 1){
        return false;
    }
    for(var i = 0; i < arr.length; i++) {
        x += arr[i]

        for(var j = i+1; j < arr.length; j++) {
            y += arr[j]

        }
        if( x == y){
            return true;
        }
        y = 0;
    }


    return false;
}

function countClumps(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1] ){
            count += 1;
        }
        if( (arr[i - 1] == arr[i]) && (arr[i] == arr[i+1])){
            count = count -1;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    var sum = a + b + c;
    if( a == b && b == c){
        return true;
    }
    if ( b == c ||  a == b){
        return false;
    }
    if ( c == 8 ){
        return false;
    }
    if ( sum % 2 == 0){
        return true;
    }
    return false;
}
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += countClumps(true, false);
    document.getElementById("output").innerHTML += evenlySpaced(true, false);
}
}
