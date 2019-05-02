// TabLink class
class Tablink {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const links = document.querySelectorAll('.tab')
        links.forEach(link => link.classList.remove('selected-tab'));
        this.element.classList.add('selected-tab');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tab-item')
        items.forEach(item => item.classList.remove('selected-item'));
        this.element.classList.add('selected-item');
    }
}

links = document.querySelectorAll('.tab').forEach(link => new Tablink(link));