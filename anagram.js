function anagram(word1,word2){
    let a=word1.toLowerCase().replace();
    let b=word2.toLowerCase().replace();

    return a.split("").sort().join("")===b.split("").sort().join("")
}

console.log(anagram("silent","listen"));
console.log(anagram("Hello", "Olelhh"));
