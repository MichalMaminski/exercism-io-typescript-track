export default class Clock {
    hours: number;
    minutes: number;
    constructor(hours: number, minutes: number = 0) {
        let date = this.createDefaultDateWithTime(hours, minutes);
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
    }

    toString(): string {
        let hoursText = `${this.hours}`;
        let minutesText = `${this.minutes}`;
        return `${this.formatToTwoDigitsValue(hoursText)}:${this.formatToTwoDigitsValue(minutesText)}`;
    }

    plus(minutes: number): Clock {
        let date = this.createDefaultDateWithTime(this.hours, this.minutes + minutes);
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        return this;
    }

    minus(minutes: number): Clock {
        let date = this.createDefaultDateWithTime(this.hours, this.minutes - minutes);
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        return this;
    }

    equals(clock: Clock): boolean {
        return this.hours === clock.hours &&
        this.minutes === clock.minutes;
    }

    private formatToTwoDigitsValue(valueToFormat: string): string {
        return valueToFormat.padStart(2, '0');
    }

    private createDefaultDateWithTime(hours: number, minutes: number): Date {
        return new Date(2000, 1, 1, hours, minutes);
    }
 }