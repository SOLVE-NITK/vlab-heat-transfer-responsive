const experiments = [
  {
    title: "Thermal Conductivity of Metal Rod",
    path: "exp-thermal-conductivity-metal-rod-nitk",
    number: 1,
  },
  {
    title: "Thermal Conductivity of Liquid",
    path: "exp-thermal-conductivity-liquid-nitk",
    number: 2,
  },
  {
    title: "Thermal Conductivity of Insulating Material",
    path: "exp-thermal-conductivity-insulating-material-nitk",
    number: 3,
  },
  {
    title: "Heat Transfer Coefficient of a Composite wall",
    path: "exp-composite-wall-nitk",
    number: 4,
  },
  {
    title: "Emissivity of Surface",
    path: "exp-emissivity-of-surface-nitk",
    number: 5,
  },
  {
    title: "Stefan Boltzmann Constant",
    path: "exp-stefan-boltzmann-constant-nitk",
    number: 6,
  },
  {
    title: "Heat Exchangers",
    path: "exp-heat-exchangers-nitk",
    number: 7,
  },
  {
    title: "Heat transfer by Natural Convection",
    path: "exp-natural-convection-nitk",
    number: 8,
  },
];
const row = document.querySelector(".row");
const search = document.querySelector(".search");
search.addEventListener("input", (e) => seachExperiments(e));

function seachExperiments(e) {
  e.preventDefault();
  const searchedExperiments = experiments.filter((exp) =>
    exp.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayExperiments(searchedExperiments);
}

function displayExperiments(expts = experiments) {
  row.innerHTML = "";
  expts.map((experiment, index) => {
    row.innerHTML += `
     <a href=${experiment.path} class="col" target="_blank"
            >${experiment.title}
            <span class='number'>${experiment.number}</span></a
          >
    `;
  });
}

displayExperiments();
