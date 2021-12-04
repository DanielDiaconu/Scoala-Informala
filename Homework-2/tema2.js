var people = [
  {
    name: "John Abrahams",
    sex: "M",
    BMI: 0,
    condition: "",
    height: { value: 1.9, unit: "meters" },
    weight: { value: 85, unit: "kg" },
  },
  {
    name: "Drizzy Drake",
    sex: "M",
    BMI: "",
    condition: "",
    height: { value: 1.8, unit: "meters" },
    weight: { value: 50, unit: "kg" },
  },
  {
    name: "Molly Parks",
    sex: "F",
    BMI: "",
    condition: "",
    height: { value: 1.6, unit: "meters" },
    weight: { value: 65, unit: "kg" },
  },
  {
    name: "Jenna Jackson",
    sex: "F",
    BMI: "",
    condition: "",
    height: { value: 1.5, unit: "meters" },
    weight: { value: 75, unit: "kg" },
  },
];

var calculateBMI = function (people) {
  for (var i = 0; i < people.length; i++) {
    var person;
    function calculateBmi() {
      return Math.round(
        people[i].weight.value /
          (people[i].height.value * people[i].height.value)
      );
    }
    function healthStatus() {
      var bmiValue = calculateBmi();
      var condition;

      if (bmiValue < 18.5) {
        return (condition = "underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        return (condition = "normal");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        return (condition = "overweight");
      } else {
        return (condition = "obese");
      }
    }

    person = `${people[i].name} | ${
      people[i].sex
    } | BMI = ${calculateBmi()} | healthStatus: ${healthStatus()}`;
    console.log(person);
  }
};

calculateBMI(people);
