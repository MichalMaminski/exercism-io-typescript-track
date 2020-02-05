type Nullable<T> = T | undefined;

export default class LinkedList<T> {
    lastElement: LinkedListItemNullable<Nullable<T>>;

    push(newValue: T) {
        if (this.lastElement) {
            this.lastElement = new LinkedListItem(newValue, undefined, this.lastElement);
        } else {
            this.lastElement = new LinkedListItem(newValue);
        }
    }

    pop(): Nullable<T> {
        let itemToReturn = this.lastElement.currentValue;
        this.lastElement = this.lastElement.prev;
        this.lastElement.setNext(undefined);
        return itemToReturn;
    }

    shift(): Nullable<T> {
        let item = this.lastElement.prev;

        if (item === undefined) {
            let itemToReturn = this.lastElement.currentValue;
            this.lastElement = undefined;
            return itemToReturn;
        }

        while (item) {
            item = item.prev;
            if (item !== undefined && item.prev === undefined) {
                let valueToReturn = item.currentValue;
                item.next?.setPrev(undefined);
                return valueToReturn;
            }
        }
    }

    unshift(newValue: T) {
        let item = this.lastElement.prev;

        if (item === undefined) {
            let itemToReturn = this.lastElement.currentValue;
            this.lastElement = undefined;
            return itemToReturn;
        }

        while (item) {
            item = item.prev;
            if (item.prev === undefined) {
                item.setPrev(new LinkedListItem(newValue, item));
            }
        }
    }

    count(): number {
        if (this.lastElement === undefined) { return 0; }
        let item = this.lastElement.prev;

        if (item === undefined) {
            return 1;
        }

        let elementsCounter = 1;
        while (item) {
            item = item.prev;
            elementsCounter++;
        }
        return elementsCounter;
    }

    delete(value: T) {
        if(this.lastElement.currentValue === value) {
            this.lastElement = undefined;
        }
        let item = this.lastElement.prev;
        while(item) {
            if(item.currentValue === value) {
                item.next.setPrev(item.prev);
                item.prev.setNext(item.next);
            }
        }
    }
}

type LinkedListItemNullable<T> = LinkedListItem<T> | undefined;

class LinkedListItem<T> {
    prev: LinkedListItemNullable<T>;
    next: LinkedListItemNullable<T>;
    currentValue: T;

    constructor(value: T,
        next: LinkedListItemNullable<T> = undefined,
        prev: LinkedListItemNullable<T> = undefined) {
        this.currentValue = value;
        if (next) this.setNext(next);
        if (prev) this.setPrev(prev);
    }

    setNext(next: LinkedListItemNullable<T>) {
        this.next = next;
        if (next) next.prev = this;
    }

    setPrev(prev: LinkedListItemNullable<T>) {
        this.prev = prev;
        if (prev) prev.next = this;
    }
}