export default class HandShake {
    private inputValue: number;
    private valueMap: Map<number, string> = new Map<number, string>([
        [0b1, 'wink'],
        [0b10, 'double blink'],
        [0b100, 'close your eyes'],
        [0b1000, 'jump']
    ]);

    constructor(input: number) {
        this.inputValue = input;
    }

    public commands(): string[] {
        let result = new Array<string>();
        this.valueMap.forEach((value, key) => {
            let bitIsSet = this.inputValue & key;
            if (bitIsSet !== 0) {
                result.push(value);
            }
        });

        if ((this.inputValue & 0b10000) !== 0) {
            result.reverse();
        }

        return result;
    }
}