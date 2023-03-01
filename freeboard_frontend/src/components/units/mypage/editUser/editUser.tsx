import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutationUpdateUser } from "../../../commons/hooks/customs/mutations/useMutationUpdateUser";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { FETCH_USER_LOGGEDIN } from "../../../commons/layout/header/header.queries";
import type { IUpdateUserForm } from "./editUser.types";

export default function UpdateUserInFo(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const { register, handleSubmit } = useForm<IUpdateUserForm>();
  const [updateUser] = useMutationUpdateUser();
  const router = useRouter();
  const onUpdateMyInfo = async (data: IUpdateUserForm): Promise<void> => {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: data.name,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });

      Modal.success({
        title: "성공적으로 수정되었습니다",
        content: "이름 변경완료!",
      });
      void router.push(`/myPage`);
    } catch (error) {
      if (error instanceof Error) Modal.info({ content: error.message });
    }
  };
  return (
    <>
      <div>{data?.fetchUserLoggedIn.email}</div>
      <form onSubmit={handleSubmit(onUpdateMyInfo)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <button>내정보 수정</button>
      </form>
    </>
  );
}
