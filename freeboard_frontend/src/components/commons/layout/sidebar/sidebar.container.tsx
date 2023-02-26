import { useEffect, useState } from "react";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

export default function LayoutSideBar(): JSX.Element {
  const [todayList, setTodayList] = useState([]);
  useEffect(() => {
    const TodayLists = localStorage.getItem("TodayLists");
    const TodayList = JSON.parse(String(TodayLists));

    setTodayList(TodayList);
  }, [todayList]);
  return (
    <div>
      <h2>최근본 목록</h2>
      <div>
        {todayList
          .filter((_, i: number) => Number([i]) >= todayList.length - 3)
          .map((el: IUseditem) => (
            <div key={el._id}>
              <h3>{el.name}</h3>
              <div>
                <span>{el.price}</span>
                <span>{el.pickedCount}</span>
              </div>

              {el.images !== undefined && el.images !== null && (
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
