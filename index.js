function handleBuyButtonClick(oprah) {
    console.log('Binding the buy button');
    oprah.addEventListener("click", buyItem);
  }

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("You clicked it!")
    })
})