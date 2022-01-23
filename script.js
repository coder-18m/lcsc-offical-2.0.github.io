var factList = ['An estimated 25 percent of all marine life, including over 4,000 species of fish, are dependent on coral reefs at some point in their life cycle', 'The ocean has absorbs about 30-40% of the carbon dioxide (CO2) that has been released into the atmosphere', 'The amount of CO2 in the atmosphere has increased more than 20% in less than 40 years, owing largely to human activities, and representing well over 50% of the total increase in atmospheric carbon dioxide since the onset of the industrial revolution (1750)', 'In 2013, carbon dioxide in the atmosphere passed 400 parts per million (ppm)—higher than at any time in the last one million years']

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
