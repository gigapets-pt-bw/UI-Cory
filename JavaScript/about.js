class InfoSection {
    constructor(element) {
        this.element = element;
        this.infoSection = document.querySelector('.info');
        this.image = document.querySelector('.info img');

        this.image.addEventListener('dblclick', () => this.toggleReverse());
    }

    toggleReverse() {
        // this.infoSection.classList.toggle('reverse');
        console.log("img clicked")
    }
}

const infoSections = document.querySelectorAll('.info').forEach(element => new InfoSection(element));