import DOMPurify from "dompurify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { useDeleteUsedItem } from "../../../commons/hooks/customs/market/useOnclickDeleteUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import MarketQuestionListUI from "../../marketQuestion/list/questionList";
import MarketQuestionUI from "../../marketQuestion/write/question.container";
import KakaoMap from "../kakaoMap/kakaoMap";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function MarketDetailUI() {
  const router = useRouter();
  const { onClickDelete } = useDeleteUsedItem();
  const { data } = useQueryFetchUsedItem();

  return (
    <>
      <div>
        <div>
          <h1>{data?.fetchUseditem.remarks}</h1>
        </div>
        <div>
          <div>
            <div>{data?.fetchUseditem.seller?.name}</div>
            <div>{MessageDate(String(data?.fetchUseditem.createdAt))}</div>
            <div>
              <div>{data?.fetchUseditem.useditemAddress?.address}</div>
              <div>{data?.fetchUseditem.useditemAddress?.addressDetail}</div>
            </div>
          </div>
          <KakaoMap />
          {typeof window !== "undefined" ? (
            <div
              style={{ color: "blue" }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchUseditem.contents)
                ),
              }}
            ></div>
          ) : (
            <div style={{ color: "blue" }} />
          )}
        </div>
        <div>
          {data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => (
              <img key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </div>
        <div>
          <button>
            <Link href={`/market/${String(router.query.productBoardId)}/edit`}>
              <a>수정하기</a>
            </Link>
          </button>
          <button onClick={onClickDelete}>삭제하기</button>
          <button>
            <Link href={`/market`}>
              <a>목록으로</a>
            </Link>
          </button>
        </div>
      </div>
      <MarketQuestionUI />
      <MarketQuestionListUI />
    </>
  );
}
