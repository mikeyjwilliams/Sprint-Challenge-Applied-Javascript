class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    console.log(this.tabData);

    if (this.tabData === 'all') {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(`.card`);
      console.log(this.cards);

      //console.log(this.cards);
    } else {

      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      //console.log(this.cards);
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.remove('active-tab');
    });


    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.style.display = 'none';
    });


    this.tabElement.classList.add('active-tab');

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {

    this.cardElement = cardElement;
  }
  selectCard() {

    this.cardElement.style.display = 'flex';
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  return new TabLink(tab);
});