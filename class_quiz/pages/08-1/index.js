const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" },
];

const SchoolRabit = classmates
  .filter((el) => {
    return el.school === "토끼초등학교";
  })
  .map((el) => {
    if (!el.candy) {
      return { ...el, candy: 10 };
    } else return el;
  });

const SchoolOther = classmates
  .filter((el) => {
    return el.school === "다람쥐초등학교";
  })
  .map((el) => ({
    ...el,
    name: el.name + "어린이",
  }));

console.log([...SchoolRabit, ...SchoolOther]);
