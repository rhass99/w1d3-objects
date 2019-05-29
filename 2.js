function countLetters(input) {
    // return unique characters in input and frequence
    let result = {}
    let noSpaceInput = input.replace(/\s/g, '')
    console.log(noSpaceInput)
    i = 0
    while (i < noSpaceInput.length){
        if (!result.hasOwnProperty(noSpaceInput[i])) {
            result[noSpaceInput[i]] = [i]
        } else {
            result[noSpaceInput[i]].push(i)
        }
        i++
    }
    return result
}

console.log(countLetters("lighthouse in the house"))