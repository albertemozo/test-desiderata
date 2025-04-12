export class ShoppingCart {
  private items: { name: string; price: number }[] = [];

  addItem(name: string, price: number) {
    this.items.push({ name, price });
  }

  removeItem(name: string) {
    this.items = this.items.filter(item => item.name !== name);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}