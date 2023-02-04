import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { Column, DataSource } from "typeorm";
import { Product } from "./Product.pg";

// APIDocs만들기

const typeDefs = `#graphql

input CreateProductInput{
    name:String,
    detail:String,
    price:Int
}
input UpdateProductInput{
    name:String
    detail:String
    price:String
}
type ProductReturn {
    _id:String,
    seller:String,
    name:String,
    detail:String,
    price:Int
}
# type Return {
#     _id:String,
#     message:String,
#     number:Int
# }
  type Query {
    fetchProducts:[ ProductReturn ]
    fetchProduct(productId:String):ProductReturn
  }
  type Mutation{
   createProduct(seller:String,createProductInput:CreateProductInput):String
   updateProduct(productId:String,updateProductInput:UpdateProductInput):String
  }
`;
// API만들기
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      console.log(result);
      return result;
    },
    fetchProduct: async () => {
      const result2 = await Product.findOne({
        where: { _id: "19dab571-2a45-4621-9449-b04bc7a84daf" },
      });
      return result2;
    },
  },
  Mutation: {
    createProduct: async (parent: any, args: any, context: any, info: any) => {
      await Product.insert({
        seller: args,
        ...args.createProductInput,
      });
      return "등록성공!!";
    },
    updateProduct: async () => {
      await Product.update({ name: "낚시대" }, { name: "축구공" });
      return "수정성공!!";
    },
    // deleteProduct: async () => {
    //   await Product.update(
    //     { _id: "65262b9d-1df8-46d9-ae65-33a53746021c" },
    //     {deletedAt:new @Column({ type: "timestamp", default: null, nullable: true})}
    //   )

    // }, // 삭제부분은 .... 안됨.....
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122", // 데이터 베이스가 설치된ip주소
  port: 5004, //데이터베이서 설치된 컴퓨터 포트
  username: "postgres",
  password: "postgres2022",
  database: "postgres", //데이터 베이스 안에 데이터배이스 생성 가능.그중 postgres에 연결
  entities: [Product], // 여기에 등록된 애를 가지고
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
