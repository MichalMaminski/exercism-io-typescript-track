export default class Words {
    count(sentance: string): Map<string, number> {
        let wordCounter = new Map<string, number>();
        sentance.split(/[\s]+/).forEach(value => {
            let formattedValue = value.toLowerCase().trim();
            if (formattedValue.length !== 0) {
                let prevWordCounterValue = wordCounter.get(formattedValue);
                wordCounter.set(formattedValue, prevWordCounterValue ? prevWordCounterValue + 1 : 1);
            }
        });
        return wordCounter;
    }
}