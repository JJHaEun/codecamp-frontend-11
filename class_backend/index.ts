import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// APIDocs만들기

const typeDefs = `#graphql


input CreateBoardInput{
  #  인자로 들어가는 타입은 input이라고 씀
  writer:String,
  title:String,
  contents:String
}
# 객체 타입은 직접 만들어야하는데, interface말고 type을 사용해야함
type MyBoard {
  #  리턴 타입은 type이라고 사용
  number:Int
  writer:String
  title:String
  contents:String
}


  type Query {
    fetchBoards:[MyBoard] # return타입 - 배열안의 객체
  }
  type Mutation{
    # 연습용 (example)방식
    # createBoard(writer:String,title:String,contents:String):String # 그래프큐엘의 해당리턴타입
 
#  실무용 (backend-practice)방식
    createBoard(createBoardInput:CreateBoardInput):String # 그래프큐엘의 해당리턴타입
 
  }
`;

// API만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 1. 모두꺼내기
      const result = await Board.find();
      console.log(result);
      // // 2. 한개만 꺼내기 // number가 3인것만..
      // const result = await Board.findOne({ where: { number: 3 } });
      // console.log(result);

      return result; // 요청한 결과를 실행
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // 보드 생성-등록
      await Board.insert({
        ...args.createBoardInput,

        // 하나하나 모두 입력하는 방식 -> 비효율적
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시글 등록 성공!!";
    },

    // // 수정하기

    // updateBoard: async () => {
    //   // 조건, 수정부분
    //   await Board.update({ number: 3 }, { writer: "영희" });
    //   // 3번 게시글 영희로 바꿔줘
    // },
    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글 삭제해줘 // 삭제했다는 날짜만
    //   // column을 isDeleted라는 것을 만들고 기본값을 true로
    //   await Board.update({ number: 3 }, { isDeleted: true }); // 소프트 삭제 - 삭제 언제되었는지 모름. fetch시에  where ..false인것만 부르면됨.
    //   Board.update({ number: 3 }, { deletedAt: new Date() }); // 새로운 열 생성해놓고 애는 초기값이 null. null이면 삭제 안된것. 오늘날짜(new Date())들어있으면 삭제된건  -- 애도 소프트 삭제
    // },
  },
};

// 두개만들고 서버만들기 --> 이후 DB연결되면 서버 실행

//  @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // 선택한 사이트만 풀어주고 싶을때
  // `  cors:{
  //     origin : ["https://naver.com","http/...."]
  //   }`
});

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
    startStandaloneServer(server).then(() => {
      // DB연결되면 서버 실행
      console.log("그래프큐엘 서버가 실행되었습니다"); // 포트: 4000(http://localhost:4000/graphql)
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인: ", error);
  });
