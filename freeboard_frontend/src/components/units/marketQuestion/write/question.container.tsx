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

export default function MarketQuestionUI(
  props: IMarketQuestionUIProps
): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestionForm>();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const router = useRouter();

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
      if (error instanceof Error) Modal.info({ content: error.message });
      void router.push(`/signIn`);
    }
  };

  return (
    <>
      <div>
        <div>
          {Boolean(props.isEdit !== true) && (
            <div>
              <img src="/comments_icon.png" />
              <span>댓글</span>
            </div>
          )}
          <form
            onSubmit={
              props.isEdit === true
                ? wrapFormAsync(handleSubmit(onClickEditFinish))
                : wrapFormAsync(handleSubmit(onCreateQuestion))
            }
          >
            <div>
              <textarea
                maxLength={200}
                placeholder="댓글을 작성해주세요"
                {...register("contents", { required: true })}
              />
              <div style={{ color: "red", fontSize: "10px" }}>
                {Boolean(errors?.contents) && "내용을 입력해주세요"}
              </div>

              <button>댓글{props.isEdit === true ? "수정" : "등록"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
