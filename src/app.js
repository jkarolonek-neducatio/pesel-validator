document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("value-getter").addEventListener("click", function(){
    let peselValue = document.getElementById("pesel-input").value;
    let digitCollection = peselValue.toString().split('').map(Number);
    let controller = digitCollection.pop();
    let multipliedControl = [];
    const controlArray = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];


    digitCollection.map(
      function(n, i){
        multipliedControl.push(n * controlArray[i]);
      });

    let controlSum = multipliedControl.reduce((a, b) => a + b);
    let controlledDigit = Number(controlSum.toString().slice(-1));

    let message = document.createElement("p");
    message.id = "message";

    let sex = document.createElement("p");
    sex.id = "sex";

    let yob = document.createElement("p");
    yob.id = "yob";

    function elementRemover(element) {
      let elementExists = !!document.getElementById(element.id);
      if (elementExists) {
        document.body.removeChild(document.getElementById(element.id));
      }
    }
    elementRemover(message);
    elementRemover(sex);
    elementRemover(yob);

    function controlSumChecker() {
      if (peselValue.length === 11 && controlledDigit === controller) {
        message.innerHTML = "Pesel correct";
        document.body.appendChild(message);
      } else {
        message.innerHTML = "Pesel incorrect";
        document.body.appendChild(message);
      }
    }
    controlSumChecker();


    const femaleController = [0, 2, 4, 6, 8];
    const maleController = [1, 3, 5, 7, 9];
    const sexFemale = "female";
    const sexMale = "male";
    let sexController = digitCollection.pop();

    function sexChecker(array, type) {
      for (let i = 0; i < array.length; i++) {
        if (peselValue.length === 11 && array[i] === sexController) {
          sex.innerHTML = `Sex: ${type}`;
          document.body.appendChild(sex);
        }
      }
    }
    sexChecker(femaleController, sexFemale);
    sexChecker(maleController, sexMale);


    function yearOfBirth() {
      let yearOfBirthData = digitCollection.slice(0,2).join("");
      let centuryMonthData = Number(digitCollection.slice(2,4).join(""));
      let century = "";
      switch (true) {
        case centuryMonthData >= 81 && centuryMonthData <= 92:
          century = "18";
          console.log("18");
          break;
        case centuryMonthData >= 1 && centuryMonthData <= 12:
          century = "19";
          console.log("19");
          break;
        case centuryMonthData >= 21 && centuryMonthData <= 32:
          century = "20";
          console.log("20");
          break;
        case centuryMonthData >= 41 && centuryMonthData <= 52:
          century = "21";
          console.log("21");
          break;
        case centuryMonthData >= 61 && centuryMonthData <= 72:
          century = "22";
          console.log("22");
          break;
      }
      if (peselValue.length === 11) {
        yob.innerHTML = `Year Of Birth: ${century}${yearOfBirthData}`;
        document.body.appendChild(yob);
      }
      
    }

    yearOfBirth();

  });
});