{
    // 
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
        // console.log(words)
        return (words.filter(wd => wd === word.toLowerCase()).length);
    }
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
    console.log(result);
    // 
}