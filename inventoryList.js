class inventoryList {
    #collection = [];
    #inventory = {};
    #order = [];
    #index = 0;

    constructor() {
    }

    #arrange () {
        this.#collection = [];
        for (let index = 0; index < this.#order.length; index++) {
            const element = this.#order[index];
            if (element !== '') {
                this.#collection.push(element);
            } else {
                continue;
            }
        }
    };

    add (name) {
        if (this.#inventory[name]) {
            return;
        } else {
            this.#inventory[name] = this.#index;
            this.#order[this.#index] = name;
            this.#index++;
        }
        this.#arrange();
    };

    remove (name) {
        if (this.#inventory[name] >= 0) {
            this.#order[this.#inventory[name]] = '';
        } else {
            return;
        }
        this.#arrange();
    };

    getList () {
        return this.#collection;
    };

}

const array = new inventoryList();
console.log(array);

array.add('Emmanuel');
array.add('Snake');
array.add('Monkey');
array.add('Rat');
array.add('Lizard');
array.add('Fish');

console.log(array.getList());
array.remove('Emmanuel');

console.log(array.getList());