let enforce = null;
document.addEventListener("DOMContentLoaded", () => {
  enforce = new Enforce();
  enforce.loading();
});

function clickEnforce() {
  const enforcedData = enforce.getEnforced();
  const p = document.getElementById("enforce_list");
  p.innerHTML = "";
  for (let data of enforcedData) {
    for (let d in data) {
      p.innerHTML += `${d}: ${data[d]}%<br>`;
    }
  }
}
