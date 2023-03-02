// 제공자일때 -> 네이버, 다음, 쿠팡..

import {
  gql,
  // useQuery
} from "@apollo/client";
import Head from "next/head";
// import type {
//   IQuery,
//   IQueryFetchUseditemArgs,
// } from "../../../src/commons/types/generated/types";
import { GraphQLClient } from "graphql-request";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any): JSX.Element {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USED_ITEM, {
  //   variables: { useditemId: "63fb2241aef9f000281b2b40" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신것을 환영합니다(어기는 Body입니다.)</div>
    </>
  );
}
//  1. getServerSideProps는 이미 존재하는 단어이므로 내 마음대로 변경은 불가. 그리고 서버에서만 실행되는부분.(useEffect와 반대개념. useEffect는 브라우저에서만 실행되었음.)
// 2. 여기는 서버에서만 실행됨. 프론트엔드 서버 프로그램 =>webpack 서버프로그램

export const getServerSideProps = async (): Promise<any> => {
  console.log("여기는 서버입니다");
  // 변수 이름 변경불가. page에서만 가능.
  // 얘를 먼저 실행. 이 안에서 gql요청등을 함.
  // 벡엔드에 데이터 요청.
  // 이 result를 retrun하면 위에 props로 들어가서 props. 으로 꺼내 사용하면 됨.
  // 여기는 아폴로 세팅쪽과 관련없는 부분. 따라서 GraphqlRequest를 사용하거나 axios를 사용하기.

  // 1.  여기서 API요청
  const graphqlClient = new GraphQLClient(
    // 엔드포인트
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );
  // 요청
  const result = await graphqlClient.request(FETCH_USED_ITEM, {
    useditemId: "63fb2241aef9f000281b2b40",
  });
  // 2.  받은 결과를 넘김.
  return {
    props: {
      qqq: {
        remarks: result.fetchUseditem.remarks,
        name: result.fetchUseditem.name,
        images: result.fetchUseditem.images,
      },
    },
  };
};
