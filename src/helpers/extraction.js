export default function extraction(text) {
    return collectWords(text);
}

function collectWords(text) {
    let words = {};
    text.split(/[ \/\\.,()]/g).forEach(rawWord => {
        const word = rawWord.toLowerCase().replace(/[\-;"'\r\n]/g, '');
        if(isWordAcceptable(word)) {
            if(words[word]) {
                words[word]++;
            } else {
                words[word] = 1;
            }
        }
    });
    return words;
}

function isWordAcceptable(word) {
    if (word.length < 3) {
        return false;
    }

    const includesBlacklist = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '&', '%', ';', ':', '[', ']'];
    if (includesBlacklist.findIndex(bl => word.includes(bl)) !== -1) {
        return false;
    }

    const wordBlacklist = ["the", "and"];
    if (wordBlacklist.includes(word)) {
        return false;
    }

    return true;
}