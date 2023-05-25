// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const spells = [
  {
    spellOne: [
      Name = "Turn enemy into a newt",
      IsEvil = true,
      EnergyReqired = 5.1
    ]
  },
  {
    spellTwo: [
      Name = "Conjure some gold for a local charity",
      IsEvil = false,
      EnergyReqired = 2.99
    ]
  },
  {
    spellThree: [
      Name = "Give a deaf person the ability to heal",
      IsEvil = false,
      EnergyReqired = 12.2
    ]
  },
  {
    spellFour: [
      Name = "Make yourself emperor of the universe",
      IsEvil = true,
      EnergyReqired = 100.0
    ]
  },
  {
    spellFive: [
      Name = "Convince your relatives your political views are correct",
      IsEvil = false,
      EnergyReqired = 2921.5
    ]
  }
]

const getPropertyValuesOfArrayObjects = (objectsArray, propertyIndex, propertyValueIndexOne, propertyValueIndexReturn) => {
  let notFalsey = [];
  let falsey = [];
  for (let object of objectsArray) {
    let result = "";
    let propertyArray = Object.getOwnPropertyNames(object);
    let property = propertyArray[propertyIndex];
    let objectArray = object[property];
    result = objectArray[propertyValueIndexOne]
    if (result === false) {
      let truthy = objectArray[propertyValueIndexReturn];
      notFalsey.push(`  ${truthy}\n`);
    } else {
      let notTruthy = objectArray[propertyValueIndexReturn];
      falsey.push(`  ${notTruthy}\n`);
    }
  }
  return "Good Books:\n" + notFalsey.join("") + "Evil Books:\n" + falsey.join("");
}

console.log(getPropertyValuesOfArrayObjects(spells, 0, 1, 0));

