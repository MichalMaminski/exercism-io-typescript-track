export default class BinarySearch {
    array: Array<number> | undefined = undefined;

    constructor(array: number[]) {
        if (this.checkIfSorted(array)) {
            this.array = array;
        }
    }

    indexOf(value: number): number {
        if (this.array === undefined) { return -1; }

        let loopIndex = 0, cursor = 0, arraySize = this.array.length - 1;
        while (loopIndex < arraySize) {
            let halfIndex = Math.ceil((this.array.length - cursor) / 2);

            if (this.array[halfIndex] == value) {
                return halfIndex;
            }

            if (this.array[halfIndex] > value) {
                cursor = Math.ceil((halfIndex - cursor) / 2);
            }
            else {
                cursor = Math.ceil((this.array.length - cursor) / 2);
            }

            loopIndex++;
        }
        return -1;
    }

    private checkIfSorted(array: number[]): boolean {
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index] > array[index + 1]) {
                return false;
            }
        }
        return true;
    }
}
