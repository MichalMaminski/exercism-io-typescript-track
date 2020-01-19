export default class Pangram {
    sentanceInLowerCase: string;
    constructor(sentance: string) {
        this.sentanceInLowerCase = sentance.toLowerCase();
    }

    isPangram(): boolean {
        let isPangram = true;
        [..."abcdefghijklmnopqrstuvwxyz"].forEach(char => {
            isPangram = isPangram && this.sentanceInLowerCase.indexOf(char) != -1;
        });
        
        return isPangram;
    }
}