import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";

export default function MarketUI(): JSX.Element {
  const [isEdit] = useRecoilState(isEditState);
  return (
    <div>
      <div>
        <h1>{!isEdit ? "상품등록" : "상품수정"}</h1>
      </div>
      <form>
        <div>
          <div>
            <label>상품명</label>
            <input type="text" />
          </div>
          <div>
            <label>가격</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <label>상품설명</label>
          <input type="text" />
        </div>
        <div>
          <label>상세설명</label>
          <textarea placeholder="상품상세설명을 적어주세요"></textarea>
        </div>
        <div>
          <label>상품태그</label>
          {/* <input/>태그부분. 애도맵? */}
        </div>
        <div>
          <label>상품이미지</label>
          <div>
            {/* <input/>사진업로드부분맵으로뿌리기,따로컴포넌트로빼서 */}
          </div>
        </div>
        <div>
          <label>주소</label>
          <div>
            <input type="text" placeholder="우편번호" />
            <button type="button">우편번호검색</button>
          </div>
          <div>
            <input type="text" />
            <input type="text" placeholder="상세주소" />
          </div>
        </div>
        <button>{!isEdit ? "상품등록" : "상품수정"}</button>
      </form>
    </div>
  );
}
