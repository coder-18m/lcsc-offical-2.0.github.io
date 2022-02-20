var factList = ['Rest in peace, boiling water, you will be mist',"Two chemists go into a bar. The first one says: I think I'll have an H2O. The second one says: I think I'll have an H2O too — and he died.",
'I had to make these bad chemistry jokes because all the good ones Argon.', "He threw sodium chloride at me! That\'s a salt!", 'What do you call an acid with an attitude? A-mean-oh-acid.',
'No matter how popular they get, antibiotics will never go viral']

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
