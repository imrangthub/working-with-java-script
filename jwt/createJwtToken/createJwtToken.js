
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


function onCreateJwt() {
  console.log("onCreateJwt");

  var jwtHeader = document.getElementById('jwtHeader');
  var jwtPayload = document.getElementById('jwtPayload');
  var jwtSecret = document.getElementById('jwtSecret');

  var resultJwtToken = document.getElementById('resultJwtToken');

  var ecodedHeader = document.getElementById('ecodedHeader');
  var ecodedPayload = document.getElementById('ecodedPayload');
  var jwtSignatureVal = document.getElementById('jwtSignatureVal');

  //================================================

  var base64HeaderStr = getBase64EncodedStr(jwtHeader.value)
  ecodedHeader.innerText = base64HeaderStr;

  var base64PayloadStr = getBase64EncodedStr(jwtPayload.value)
  ecodedPayload.innerText = base64PayloadStr;

  var jwtSignature = CryptoJS.HmacSHA256(base64HeaderStr + "." + base64PayloadStr, jwtSecret.value);
  jwtSignatureVal.innerText = jwtSignature;

  var base64sign = CryptoJS.enc.Base64.stringify(jwtSignature);

  var finalJwt = base64HeaderStr + "." + base64PayloadStr + "." + base64sign;


  resultJwtToken.innerText = finalJwt;


}

  // {
  //   "typ":"JWT",
  //   "alg":"HS256"
  // }

  // {
  //   "iss":"wwww.madbarsoft.com",
  //   "username":"MD IMRAN HOSSAIN",
  //   "admin":false
  // }






