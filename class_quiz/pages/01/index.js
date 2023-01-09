import { SearchOutlined } from "@ant-design/icons";
import * as S from "../../styles/01-myEmotion";
export default function EmotionPractice() {
  return (
    <S.MyBox>
      <S.SearchBarLine>
        <SearchOutlined />
      </S.SearchBarLine>
      <S.MyTitle>
        <S.Title>마이</S.Title>
        <S.Profile>
          <S.ImgProfile src="/profile_ex_img_01.png" />
          <S.Name>임정아</S.Name>
          <S.RightArrow src="/right_img_01.png" />
        </S.Profile>
      </S.MyTitle>
      <S.SubTitle>
        <span>공지사항</span>
        <span>이벤트</span>
        <span>FAQ</span>
        <span>Q&A</span>
      </S.SubTitle>
      <div>
        <div>
          <div>
            <div>Q. 01</div>
            <div>리뷰 작성은 어떻게 하나요?</div>
          </div>
          <img src="/arrow_img_01.png" />
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="/home_img_01.png" />
            <span>홈</span>
          </div>
          <div>
            <img src="/location_img_01.png" />
            <span>잇츠로드</span>
          </div>
          <div>
            <img src="/heart_img_01.png" />
            <span>마이찜</span>
          </div>
          <div>
            <img src="/mypage_img_01.png" />
            <span>마이</span>
          </div>
        </div>
      </div>
    </S.MyBox>
  );
}
