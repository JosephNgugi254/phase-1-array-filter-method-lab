
const name = ["Apple", "banana", "aPPLE", "Orange", "apple","anyce", "Banana", "Grape","Goop"];


function findMatching(name, string) {
    return name.filter(j => j.toLowerCase() === string.toLowerCase())
  }

function fuzzyMatch(name, string) {
    return name.filter(firstLetter => firstLetter[0].toLowerCase() === string[0].toLowerCase())
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(name, string) {
    return name.filter(driver => driver.name === string)
}

console.log(matchName(drivers, "Bobby"))