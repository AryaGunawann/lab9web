searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  rows.forEach(function (row) {
    const title = row
      .querySelector("td:nth-child(2)")
      .textContent.toLowerCase();
    row.style.display = title.includes(searchTerm) ? "" : "none";
  });

  if (searchTerm === "") {
    localStorage.removeItem("searchHistory");
    console.log("Riwayat pencarian telah dihapus.");
  }
});
