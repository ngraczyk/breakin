// open https://dokume.net/public/applicantChallenge/password.txt

function rot13(message, noReplace) {
  var result = message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
  
  if (!noReplace) {
    result = result.replace(/_/gi, ' ');
  }

  return result;
}