export default class RobotName {
    private availableRobotNameChars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    static registeredRobotNames: string[] = [];
    name: string;

    constructor() {       
        this.name = this.generateNewRobotName();
        
    }

    resetName() {
        this.name = this.generateNewRobotName();
    }

    private generateNewRobotName(): string {
        let newRobotName = `${this.generateRandomCharacters(2)}${this.generateRandomNumber(3)}`;
        if(RobotName.registeredRobotNames.indexOf(newRobotName) !== -1)
        {
            newRobotName = this.generateNewRobotName();
        }
        else {
            RobotName.registeredRobotNames.push(newRobotName);
        }
        
        return newRobotName;
    }

    private generateRandomNumber(numberOfDigits: number): string {
        let result: string = "";
        for (let index = 0; index < numberOfDigits; index++) {
            result += (Math.floor((Math.random() * 9) + 1));            
        }
        return result;
    }

    private generateRandomCharacters(numberOfCharacters: number): string {
        let result: string = "";
        for (let index = 0; index < numberOfCharacters; index++) {
            const randomNumber = Math.floor((Math.random() * this.availableRobotNameChars.length) + 1)
            result += this.availableRobotNameChars.substring(randomNumber, randomNumber+1);            
        }
        return result;
    }
}