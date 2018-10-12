var languagesArrayCreation = function () {
  var langue = ["Html", "CSS", "Java", "PHP"];
  return langue;
}

var numbersArrayCreation = function () {
  var nombres = [0, 1, 2, 3, 4, 5];
    return nombres;
}

var ElementReplacement = function (languages) {
 languages.splice(2, 1, "Javascript");
  return languages ;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var reseaux = socialMediaInString.split(',');
  return reseaux;
}

var arrayToString = function (languages) {
  var languages = languages.toString(',');
  return languages;

}

var arraySort = function (socialMedia) {
  socialMedia.sort();
  return socialMedia;
}

var arrayInvert = function (languages){
  languages.reverse();
  return languages;
}
