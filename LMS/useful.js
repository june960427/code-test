// #ES6의 구조 분해 할당 문법을 사용하여 두 변수를 swap 할 수 있습니다.

let a = 5;
let b = 10;
[a, b] = [b, a];

//  #범위 루프를 함수형 프로그래밍 방식으로 사용하고 싶다면 배열을 생성해서 사용할 수 있습니다.
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);

const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

const person = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
};

const company = {
  name: "Cobalt. Inc.",
  address: "Seoul",
};

// #동일한 key값을 가진 경우 마지막에 나온 값이 최종적으로 사용됨
const leeSunHyoup = { ...person, ...company };

// const name = "Lee Sun-Hyoup";
// const company = "Cobalt";
// const person = {
//   name,
//   company,
// };
// console.log(person);

const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompany({
  name: "Cobalt. Inc.",
  address: "Seoul",
  serviceName: "Present",
});

console.log(cobalt);

// const nameKey = "name";
// const emailKey = "email";
// const person = {
//   [nameKey]: "Lee Sun-Hyoup",
//   [emailKey]: "kciter@naver.com",
// };
// console.log(person);
// {
//   name: 'Lee Sun-Hyoup',
//   email: 'kciter@naver.com'
// }
