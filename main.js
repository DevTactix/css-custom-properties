function setAllBoxes(property, value) {
  document
    .querySelectorAll(".box")
    .forEach((x) => x.style.setProperty(property, value));
}

const setSizeMedium = setAllBoxes.bind(
  null,
  "--box-size",
  "var(--size-medium)"
);
const setSizeLarge = setAllBoxes.bind(null, "--box-size", "var(--size-large)");
const setSizeSmall = setAllBoxes.bind(null, "--box-size", "var(--size-small)");

const setDanger = setAllBoxes.bind(null, "--box-color", "var(--color-danger)");
const setInfo = setAllBoxes.bind(null, "--box-color", "var(--color-info)");
const setWarning = setAllBoxes.bind(
  null,
  "--box-color",
  "var(--color-warning)"
);

var Configuration = {
  Theme: "dark",
};

function toggleTheme() {
  const theme = (Configuration.Theme =
    Configuration.Theme === "dark" ? "light" : "dark");
  document.body.dataset.theme = theme;
}
toggleTheme();
