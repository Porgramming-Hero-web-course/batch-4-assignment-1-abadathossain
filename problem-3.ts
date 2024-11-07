{
    // 
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.split(" ");
        // console.log(words)
        return (words.filter(wd => wd === word.toLowerCase()).length);
    }
    const result = countWordOccurrences("I love typescript", "typescript")
    console.log(result);
    // 
}