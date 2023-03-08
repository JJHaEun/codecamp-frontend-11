import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock";
import fetch from "cross-fetch";
import BoardListPage from "../../pages/boards";
import BoardWritePage from "../../pages/boards/new";
import BoardWriteUI from "../../src/components/units/board/write/BoardWrite.presenter";
import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";

jest.mock("next/router", () => require("next-router-mock"));

it("게시글등록 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  render(
    <ApolloProvider client={client}>
      <BoardWritePage />
    </ApolloProvider>
  );
  fireEvent.change(screen.getByRole("writer-input"), {
    target: { value: "짱구" },
  });
  fireEvent.change(screen.getByRole("password-input"), {
    target: { value: "1234" },
  });
  fireEvent.change(screen.getByRole("contents-input"), {
    target: { value: "테스트중입니다" },
  });
  fireEvent.change(screen.getByRole("title-input"), {
    target: { value: "테스트중" },
  });
  // fireEvent.change(screen.getByRole("address-input"), {
  //   target: { value: "서울시 구로구" },
  // });
  // fireEvent.change(screen.getByRole("addressDetail-input"), {
  //   target: { value: "구로디지털단지역" },
  // });
  fireEvent.click(screen.getByRole("submit-button"));
  await waitFor(() => {
    expect(mockRouter.asPath).toEqual(`/boards/qqq`);
  });
});
