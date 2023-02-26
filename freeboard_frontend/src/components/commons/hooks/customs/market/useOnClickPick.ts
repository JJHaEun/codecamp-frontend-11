import { useMutationPick } from "../mutations/useMutationPick";
import {
  FETCH_USED_ITEM,
  useQueryFetchUsedItem,
} from "../quries/useQueryFetchUsedItem";

export const useOnClickPick = () => {
  const [toggleUseditemPick] = useMutationPick();
  const { data } = useQueryFetchUsedItem();

  const onClickPick = (useditemId: string) => async (): Promise<void> => {
    await toggleUseditemPick({
      variables: {
        useditemId,
      },
      optimisticResponse: {
        toggleUseditemPick: (data?.fetchUseditem.pickedCount ?? 0) + 1, // 현제값 +1을 데이터 요청하고 바로 넣음. 일단 먼저 업데이트되게.(속임수) 숫자면(있으면 앞에꺼 없으면 0 +1)
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId },
        },
      ],
    });
  };
  return {
    onClickPick,
  };
};
