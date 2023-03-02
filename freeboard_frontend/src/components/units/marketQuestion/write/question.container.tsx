import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "../question.queries";
import type { IMarketQuestionUIProps, IQuestionForm } from "../question.types";
import * as S from "../question.styles";
import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";

export default function MarketQuestionUI(
  props: IMarketQuestionUIProps
): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestionForm>({
    mode: "onChange",
  });

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const router = useRouter();
  const { ToggleModal } = useToggleModal();
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onClickEditFinish = async (data: IQuestionForm) => {
    if (typeof props.el?._id === "undefined") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.updateUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onCreateQuestion = async (data: IQuestionForm): Promise<void> => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.productBoardId),
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.info({ content: "로그인을 먼저 해주세요" });
        void router.push(`/signIn`);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          {Boolean(props.isEdit !== true) && (
            <S.CommentTitle>
              <S.Qcomment src="/comments_icon.png" />
              <S.QuestionTitle>질문드립니다</S.QuestionTitle>
            </S.CommentTitle>
          )}
          <form
            onSubmit={
              props.isEdit === true
                ? wrapFormAsync(handleSubmit(onClickEditFinish))
                : wrapFormAsync(handleSubmit(onCreateQuestion))
            }
          >
            <div>
              <div>
                <S.CommentBox
                  placeholder="댓글을 작성해주세요"
                  {...register("contents", { required: true })}
                  defaultValue={
                    props.el?.contents !== "" ? props.el?.contents : ""
                  }
                />

                <S.ContentsErrM>
                  {Boolean(errors?.contents) && "내용을 입력해주세요"}
                </S.ContentsErrM>
              </div>
              <S.CommentButtonWrap>
                <S.Buttons>
                  질문{props.isEdit === true ? "수정" : "등록"}
                </S.Buttons>
                {props.isEdit !== true && <button type="reset">초기화</button>}

                {props.isEdit === true && (
                  <button onClick={ToggleModal}>수정취소</button>
                )}
              </S.CommentButtonWrap>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
