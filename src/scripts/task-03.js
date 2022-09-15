class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
