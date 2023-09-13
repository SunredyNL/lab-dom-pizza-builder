// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    }
    else {
      oneMushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  document.querySelectorAll(".crust .sauce").forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = "visible";
    } else {
      oneSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add("crust-gluten-free");
    } else {
      oneCrust.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  const buttonPep = document.querySelector(".btn-pepperoni");
  if (state.pepperoni) {
    buttonPep.classList.add("active");
  } else {
    buttonPep.classList.remove("active");
  }

  const buttonMush = document.querySelector(".btn-mushrooms");
  if (state.mushrooms) {
    buttonMush.classList.add("active");
  } else {
    buttonMush.classList.remove("active");
  }

  const buttonPeppers = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers) {
    buttonPeppers.classList.add("active");
  } else {
    buttonPeppers.classList.remove("active");
  }

  const buttonSauce = document.querySelector(".btn-sauce");
  if (state.whiteSauce) {
    buttonSauce.classList.add("active");
  } else {
    buttonSauce.classList.remove("active");
  }

  const buttonCrust = document.querySelector(".btn-crust");
  if (state.glutenFreeCrust) {
    buttonCrust.classList.add("active");
  } else {
    buttonCrust.classList.remove("active");
  }
}

function renderPrice() {
  const price = document.querySelectorAll("aside ul li");
  const newPrice = [...price];
  let payment = 10;

  if (state.pepperoni) {
    newPrice[0].style.display = "block";
    payment += 1;
  } else {
    newPrice[0].style.display = "none";
  }


  if (state.mushrooms) {
    newPrice[1].style.display = "block";
    payment += 1;
  } else {
    newPrice[1].style.display = "none";
  }


  if (state.greenPeppers) {
    newPrice[2].style.display = "block";
    payment += 1;
  } else {
    newPrice[2].style.display = "none";
  }


  if (state.whiteSauce) {
    newPrice[3].style.display = "block";
    payment += 3;
  } else {
    newPrice[3].style.display = "none";
  }

  if (state.glutenFreeCrust) {
    newPrice[4].style.display = "block";
    payment += 5;
  } else {
    newPrice[4].style.display = "none";
  }

  const theFullPrice = document.querySelector("strong");
  theFullPrice.innerHTML = `$${payment}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
