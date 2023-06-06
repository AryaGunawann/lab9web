const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.id.toString().includes(value) ||
      user.title.toLowerCase().includes(value); // Menambahkan pencarian berdasarkan judul
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("judul")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = `ID: ${user.id} - ${user.name}`;
      body.textContent = `Email: ${user.email}`;
      userCardContainer.append(card);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        title: user.title,
        element: card,
      }; // Menambahkan properti "title"
    });
  });
