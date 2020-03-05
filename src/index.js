 function check(str, bracketsConfig) {
let result = [];
let arrOpen = bracketsConfig.map(item => item[0]).join('');
let arrClose = bracketsConfig.map(item => item[1]).join('');
for (let i = 0; i < str.length; i++){
    if (arrOpen.includes(str[i]) && !arrClose.includes(str[i])){
        result.push(str[i]);
    }
    else if (arrClose.includes(str[i]) && !arrOpen.includes(str[i]) && result.length !== 0){
        let openInd = arrClose.indexOf(str[i]);
        if (arrOpen[openInd] == result[result.length-1]){
          result.pop();  
        }
        else return false;
    }
    else if (arrClose.includes(str[i]) && arrOpen.includes(str[i])){
        if (str[i] == result[result.length-1]){
            result.pop();
        }
        else result.push(str[i]);
    }
    else return false;
}
if (result.length !== 0){
return false;
}
else return true;
}

console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));

module.exports = check;
