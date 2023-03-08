import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MapBoardPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock"; // router대신 사용할 것

jest.mock("next/router", () => require("next-router-mock")); // 지금부터 next-router는 여기서 만든것으로 사용할것입!

// api요청시 실행되ㄴ느 코드 따로빼기(서버 실행시키고 끄는 부분) jest.setup.js라는 파일에있음
// api는 commons의 mocks라는 폴더 안에 있음
it("게시글이 잘 등록되는지 테스트하자!!", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql", // 보낼주소 이부분이 apis에 적은것과 같기만하면됨
      fetch,
    }), // 단위 테스트에서는 가짜로 보내야함.

    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <MapBoardPage />
    </ApolloProvider>
  ); // 그려줘 // 얘를 app.tsx라고 생각하고 아폴로 세팅(아폴로 프로바이더)으로 감싸기 그래야 useQuery, useMutation가능.
  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "짱구" },
  }); // onChange실행시켜줘 대신 , 변경할거야 어떻게?(event)의 target에 value는 "찡구"
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "내용" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "제목입니다" },
  });
  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    // 클릭후 기다렸다가 실행됨(실제로 날리는 곳에서도 async await로 작성되어있으니..)
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});

// describe("잘 등록되나",()=>{
//     it("게시글이 잘 등록되는지 테스트하자!!",()=>{
//         render(<MapBoardPage/>)// 그,려줘
//         fireEvent.change(screen.getByRole("input-writer"),{
//     target:{value:"짱구"},
//         })// onChange실행시켜줘 대신 , 변경할거야 어떻게?(event)의 target에 value는 "찡구"
//         fireEvent.change(screen.getByRole("input-contents"),{
//             target:{value:"내용"},
//                 })
//                 fireEvent.change(screen.getByRole("input-title"),{
//                     target:{value:"제목입니다"},
//                         })
//                         fireEvent.click(screen.getByRole("submit-button"))
//     })
// })
