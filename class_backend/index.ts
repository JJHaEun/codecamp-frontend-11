// const qqq: string = "안녕하세요";

// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122", // 데이터 베이스가 설치된ip주소
  port: 5004, //데이터베이서 설치된 컴퓨터 포트
  username: "postgres",
  password: "postgres2022",
  database: "postgres", //데이터 베이스 안에 데이터배이스 생성 가능.그중 postgres에 연결
  entities: [Board], // 여기에 등록된 애를 가지고
  synchronize: true, // 똑같이 만들어줘
  logging: true, // 명령어가 바뀌는 과정을 눈으로 보여줘
});

AppDataSource.initialize()
  // 위의 것을 초기화해 만듬.
  // 성공했을경우
  // 실패 했을 경우
  .then(() => {
    console.log("DB접속에 성공했습니다!!");
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인: ", error);
  });
