// // class Date{

// //    qqq  = 3
// //     getFullYear(){

// //     }

// //     getMonth(){

// //     }
// // }

// // const date = new Date()

// // console.log(date.getFullYear())
// // console.log(date.getMonth()+1)

// class Monster {
//   power = 50;
//   attack() {
//     console.log("공격합니다");
//   }
// }

// // 상속
// class 슈퍼몬스터 extends Monster {
//   // Monster의 기능을 상속받는다
//   run() {
//     console.log("도망가자!!");
//   }
//   // 기존것을 삭제하고 덮어씀 === 오버라이딩
//   // 상속받은 같은 함수가 있지만, 다시 만들었다면 기존게 삭제? 됨
//   attack() {
//     console.log("슈퍼몬스터 필살기");
//   }
// }
// const monster = new Monster();
// monster.power; // 50
// monster.attack(); // 공격합니다

// const myMonster = new 슈퍼몬스터();
// myMonster.run(); // 도망가자
// myMonster.attack(); // 슈퍼몬스터 필살기
// myMonster.power; // 50
