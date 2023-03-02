import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUSETION_ANSWER,
} from "../answer.queris";
import type { CreateAnswerFrom, IMarketAnswerUIProps } from "../answer.types";
import MarketAnswerListUI from "../list/answerList";
import * as S from "../answer.styles";
import { CommentBox } from "../../marketQuestion/question.styles";

export default function MarketAnswerUI(
  props: IMarketAnswerUIProps
): JSX.Element {
  const router = useRouter();

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUSETION_ANSWER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAnswerFrom>();

  const onClickCreateAnswer = async (data: CreateAnswerFrom): Promise<void> => {
    if (typeof props.el?._id !== "string") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },

        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data?.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      props.setOpen?.(false);
      Modal.success({ content: "답변완료" });
    } catch (error) {
      if (error instanceof Error) {
        Modal.info({ content: "로그인을 먼저 해주세요" });
        void router.push(`/signIn`);
      }
    }
  };
  const onClickEditAnswer = async (data: CreateAnswerFrom): Promise<void> => {
    if (typeof props.elAnswer?._id !== "string") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.elAnswer?._id,
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data?.updateUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      Modal.success({ content: "수정완료!!" });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <S.AnswerWriteWrap>
      <form
        onSubmit={
          props.isEdit !== true
            ? wrapFormAsync(handleSubmit(onClickCreateAnswer))
            : wrapFormAsync(handleSubmit(onClickEditAnswer))
        }
      >
        <CommentBox
          {...register("contents")}
          defaultValue={
            props.elAnswer?.contents !== "" ? props.elAnswer?.contents : ""
          }
        />

        <div style={{ color: "red", fontSize: "10px" }}>
          {Boolean(errors?.contents) && "내용을 입력해주세요"}
        </div>
        <button>답변{props.isEdit === true ? "수정" : "등록"}</button>
      </form>
      <MarketAnswerListUI el={props.el} />
    </S.AnswerWriteWrap>
  );
}
