function encrypt(plaintext, keyword) {
  // lowercase everything
  plaintext  = plaintext.toLowerCase().split('');
  keyword    = keyword.toLowerCase();

  // create required variables
  var key        = extend_keyword(keyword, plaintext.length);
  var cyphertext = [];
  
  // convert each plain-char and key_char into ASCII, then deduct 97
  // add numbers together, use modulo to contain to alphabet
  // add 97 to combined number and convert back to ASCII for cyphertext
  for (var i = 0; i < plaintext.length; i++) {
    var plain_char = (plaintext[i].charCodeAt() - 97);
    var key_char   = (key[i].charCodeAt() - 97);
    cyphertext.push(String.fromCharCode(((key_char + plain_char) % 26) + 97));
  }
  return cyphertext.join('');
}

function decrypt(cyphertext, keyword) {
  // lowercase everything
  cyphertext    = cyphertext.toLowerCase().split('');
  keyword       = keyword.toLowerCase();

  var key       = extend_keyword(keyword, cyphertext.length);
  var plaintext = [];

  for (var i = 0; i < cyphertext.length; i++) {
    var cypher_char = (cyphertext[i].charCodeAt() - 97);
    var key_char    = (key[i].charCodeAt() - 97);
    plaintext.push(String.fromCharCode((((cypher_char - key_char) + 26) % 26) + 97));
  }
  return plaintext.join('');
}

function extend_keyword(keyword, req_len) {
  result = "";
  i = 0;
  counter = 0;
  while (req_len > counter) {
    result += keyword[i];
    counter++;
    i = counter % keyword.length;
  }
  return result;
}

console.log(encrypt("ATTACKATDAWN", "LEMON"));
console.log(decrypt("lxfopvefrnhr", "LEMON"));
