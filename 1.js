function countLetters(input) {
    // return unique characters in input and frequence
    let result = {}
    let noSpaceInput = input.replace(/\s/g, '')
    console.log(noSpaceInput)
    i = 0
    while (i < noSpaceInput.length){
        if (!result.hasOwnProperty(noSpaceInput[i])) {
            result[noSpaceInput[i]] = 1
        } else {
            result[noSpaceInput[i]] += 1
        }
        i++
    }
    return result
}

console.log(countLetters("lighthouse in the house"))