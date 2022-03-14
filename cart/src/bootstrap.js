import faker from "faker";

//explanations of this in /products
const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
