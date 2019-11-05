

function getBase64EncodedStr(rowStr){
    let wordArray = CryptoJS.enc.Utf8.parse(rowStr);
    let resultBase64Str = CryptoJS.enc.Base64.stringify(wordArray);
    return resultBase64Str; 
}

function getBase64DncodedStr(encStr){
    let wordArray = CryptoJS.enc.Base64.parse(encStr);
    let resultOriginalStr = wordArray.toString(CryptoJS.enc.Utf8);
    return resultOriginalStr; 
}



function doEncode(){
    console.log("doEncode");
    let textEncode = document.getElementById("txtEncode");
    let resultEndoce = document.getElementById("resultEecoded");
    resultEndoce.innerText = getBase64EncodedStr(textEncode.value);
}

function doDncode(){
    console.log("doDncode");
    let textDecode = document.getElementById("txtDecode");
    let resultDedoce = document.getElementById("resultDecoded");
    resultDedoce.innerText = getBase64DncodedStr(textDecode.value);

}

