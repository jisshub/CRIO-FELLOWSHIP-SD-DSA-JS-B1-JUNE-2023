function wordFrequencyCounter(str) {
    const words = str.split(' ');
    const wordMap = words.reduce((acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] || 0) + 1,
    }), {});
    return new Map(Object.entries(wordMap));
}

const result = wordFrequencyCounter("I love to code and I love to share")
console.log(result);
