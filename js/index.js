let najcitanije = document.getElementById("najcitanije");
let najnovije = document.getElementById("najnovije");
let najcitanijeContent = document.getElementById("najcitanije-content");
let najnovijeContent = document.getElementById("najnovije-content");
let dateHolder = document.getElementById("date");

let date = new Date();
let day = "";
const getDay = () => {
  switch (date.getDay()) {
    case 0:
      day = "Nedjelja";
      break;
    case 1:
      day = "Ponedjeljak";
      break;
    case 2:
      day = "Utorak";
      break;
    case 3:
      day = "Srijeda";
      break;
    case 4:
      day = "Četvrtak";
      break;
    case 5:
      day = "Petak";
      break;
    case 6:
      day = "Subota";
      break;
  }
};
getDay();
let formatedDate = {
  date: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
  day: day
};
dateHolder.innerHTML = `${formatedDate.day},  ${formatedDate.date}.${
  formatedDate.month
}.${formatedDate.year}. `;

najcitanije.onclick = () => {
  najcitanije.classList.add("active");
  najnovije.classList.remove("active");
  najcitanijeContent.classList.remove("closed");
  najnovijeContent.classList.add("closed");
};

najnovije.onclick = () => {
  najnovije.classList.add("active");
  najcitanije.classList.remove("active");
  najnovijeContent.classList.remove("closed");
  najcitanijeContent.classList.add("closed");
};
