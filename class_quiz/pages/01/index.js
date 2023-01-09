import * as S from "../../styles/01-myEmotion";
export default function EmotionPractice() {
  return (
    <S.MyBox>
      <S.SearchBarLine>
        <S.SearchIcon />
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
        <S.SubTitleList>공지사항</S.SubTitleList>
        <S.SubTitleList>이벤트</S.SubTitleList>
        <S.SubTitleListCheck>FAQ</S.SubTitleListCheck>
        <S.SubTitleList>Q&A</S.SubTitleList>
      </S.SubTitle>

      <S.QuestionsBox>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 01</S.Q_tag>
            <div>리뷰 작성은 어떻게 하나요?</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 02</S.Q_tag>
            <div>리뷰 수정/삭제는 어떻게 하나요?</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 03</S.Q_tag>
            <div>아이디/비밀번호를 잊어버렸어요</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 04</S.Q_tag>
            <div>회원탈퇴를 하고싶어요.</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 05</S.Q_tag>
            <div>출발지 설정은 어떻게 하나요?</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
        <S.Questions>
          <S.TagAndQuestions>
            <S.Q_tag>Q. 06</S.Q_tag>
            <div>비밀번호를 변경하고 싶어요</div>
          </S.TagAndQuestions>
          <S.Arrow src="/arrow_img_01.png" />
        </S.Questions>
      </S.QuestionsBox>

      <S.UndderIcons>
        <S.UndderArr>
          <S.UndderImg src="/home_img_01.png" />
          <span>홈</span>
        </S.UndderArr>
        <S.UndderArr>
          <S.UndderImg src="/location_img_01.png" />
          <span>잇츠로드</span>
        </S.UndderArr>
        <S.UndderArr>
          <S.UndderImg src="/heart_img_01.png" />
          <span>마이찜</span>
        </S.UndderArr>
        <S.UndderArr>
          <S.UndderImg src="/mypage_img_01.png" />
          <S.MyCheck>마이</S.MyCheck>
        </S.UndderArr>
      </S.UndderIcons>
    </S.MyBox>
  );
}
