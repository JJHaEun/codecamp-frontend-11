// 데이터 없이 하드코딩된 벡엔드 서버(가짜)

import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createBoard", (req, res, ctx) => {
    const { writer, title, contents } = req.variables.createBoardInput;
    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          writer,
          title,
          contents,
          __typename: "Board",
        },
      })
    );
  }),
  // gql.query("fetchBoards",()=>{})
];
