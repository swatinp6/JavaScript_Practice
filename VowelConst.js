function vowelOrConsonant(char){
    let lowerChar= char.toLowerCase();
    if(['a','e','i','o','u'].includes(lowerChar)){
        console.log(char + " is an vowel")
    }
    else{
        console.log(char + " is a consonant")
    }
}
vowelOrConsonant('a')
vowelOrConsonant('B')