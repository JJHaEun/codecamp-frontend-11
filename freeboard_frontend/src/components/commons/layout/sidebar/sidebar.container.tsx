import { useEffect, useState } from "react";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { useMovePage } from "../../hooks/customs/useMovePage";
import * as S from "./sidebar.styles";

export default function LayoutSideBar(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  const { onClickMovePage } = useMovePage();
  useEffect(() => {
    const TodayLists = localStorage.getItem("TodayLists");
    const TodayList = JSON.parse(String(TodayLists));

    if (TodayList !== "") {
      setTodayList(TodayList);
    }
  }, []);
  return (
    <div>
      <h2>최근본 목록</h2>
      <div>
        {todayList
          ?.filter((_, i: number) => Number([i]) <= 2)
          .map((el: IUseditem) => (
            <div key={el._id}>
              <h3 onClick={onClickMovePage(`/market/${el._id}`)}>{el.name}</h3>
              <div>
                <span>{el.price}</span>
                <S.Remarks>{el.remarks}</S.Remarks>
              </div>

              {el.images?.[0] !== undefined && el.images?.[0] !== "" && (
                <div key={uuidv4()}>
                  <img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    alt=""
                    style={{ width: "30px" }}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
