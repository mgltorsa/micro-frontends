import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Context/Situation #1 : Running on Development
// We are running this file in development in isolation.
// We are using our local index.html file
// which DEFINITELY has an element with and id of 'dev-products'
// We want to inmediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  //Asuming our container does not have an element
  // with id 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2 : Running on Development or PROD
// We are running in development or production through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exist
// WE DO NOT WANT try to inmediately render the app.
export { mount };
