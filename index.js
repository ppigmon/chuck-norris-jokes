const api = fetch("https://api.chucknorris.io/jokes/random");
const root = document.getElementById("root");
const btn = document.querySelector(".btn");

const joke = async () => {
  const res = await api;
  const data = await res.json();
  const joke = data.value;

  const createPara = document.createElement("p");
  createPara.innerText = joke;
  root.append(createPara);
};

joke();

btn.addEventListener("click", () => {
  window.location.reload();
});
