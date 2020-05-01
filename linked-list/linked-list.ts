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
        if(this.lastElement) {
            let itemToReturn = this.lastElement.currentValue;
            this.lastElement = this.lastElement.prev;
            if(this.lastElement) {
                this.lastElement.setNext(undefined);    
            }
            return itemToReturn;
        }
        
        return undefined;
    }

    shift(): Nullable<T> {
        if(this.lastElement) {
            let item = this.lastElement.prev;

            if (item === undefined) {
                let itemToReturn = this.lastElement.currentValue;
                this.lastElement = undefined;
                return itemToReturn;
            }

            while (item) {              
                if (item.prev === undefined) {
                    let valueToReturn = item.currentValue;
                    if(item.next) {
                        item.next.setPrev(undefined);
                    }         
                    return valueToReturn;
                } else {
                    item = item.prev;
                }
            }
        }
    }

    unshift(newValue: T) {
        if(this.lastElement){
            let item = this.lastElement.prev;
            
            if(!item) {
                this.lastElement.setPrev(new LinkedListItem(newValue));
                return
            }
            
            while (item) {        
                if (item.prev === undefined) {
                    item.setPrev(new LinkedListItem(newValue));
                } else {
                    item = item.prev;
                }
            }
        } else {
            this.push(newValue);
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
        if(this.lastElement)
        {
            if(this.lastElement.currentValue === value) {
                this.lastElement = this.lastElement.prev;
                if(this.lastElement) {
                    this.lastElement.next = undefined;
                }              
                return;
            }

            let item = this.lastElement.prev;
            while(item) {
                if(item.currentValue === value) {
                    if(item.next)
                    item.next.setPrev(item.prev);
                    if(item.prev)
                    item.prev.setNext(item.next);
                    return;
                } else {
                    item = item.prev;
                }
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