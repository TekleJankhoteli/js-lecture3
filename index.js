// შეამოწმეთ სტრიქონი არის თუ არა პალინდრომი.
// let string = "Anna";
// let stringtoLowercase = string.toLocaleLowerCase();
// let revercedString = stringtoLowercase.split("").reverse().join("");
// console.log(revercedString);

//   if (stringtoLowercase === revercedString) {
//     console.log("string is paliandrom");
//   } else {
//     console.log("string is not paliandrom");
//   }

// გამოიყენეთ მეთოდი splice(), რომ ამოჭრათ მასივიდან "Orange" და "Apple"
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2);
// console.log(fruits);
// გამოიყენეთ მასივის მეთოდი, რომელეც მოცემულ მასივის ანბანის ასოების
// თანმიმდევრობით დააწყობს:
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort();
// console.log(fruits);

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
let calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;
};

// let ScoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

let ScoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
let checkWiner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("no team wins");
  }
};

console.log(checkWiner(ScoreDolphins, scoreKoalas));
