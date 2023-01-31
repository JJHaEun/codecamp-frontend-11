import styled from "@emotion/styled";

// export const BoardListMain = styled.div`
//   display: flex;
//   justify-content: center;

//   width: 1200px;
//   margin-top: 100px;
// `;
// export const ButtonWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;
// export const Table = styled.div`
//   width: 100%;
//   border-top: 1px solid black;
//   border-bottom: 1px solid black;
//   /* padding: 0 5px; */
//   display: flex;
//   flex-direction: column;
//   /* border-collapse: collapse; */
// `;
// export const TableTopLine = styled.div`
//   /* border-top: 1px solid #bdbdbd; */
//   /* background-color: red; */
//   text-align: center;
//   padding: 11px 0;
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
//   font-weight: 500;
//   padding-left: 35px;
// `;
// export const BoardNumberTitle = styled.div`
//   /* padding-right: 40px; */

//   width: 50x;
// `;
// export const BoardMainTitle = styled(BoardNumberTitle)`
//   width: 200px;
// `;
// export const BoardWriterTitle = styled(BoardNumberTitle)`
//   width: 120px;
// `;
// export const BoardDateTitle = styled.div`
//   /* padding-left: 20px; */
//   /* padding-right: 55px; */
//   width: 120px;
// `;

// export const TableBody = styled.div`
//   width: 100%;
//   display: flex;
//   padding: 11px 0;
//   border-top: 1px solid black;

//   :hover {
//     cursor: pointer;

//     color: coral;
//   }
//   /* justify-content: space-between; */
//   /* text-align: center; */
// `;
// export const TableDate = styled.div`
//   /* border-top: 1px solid #bdbdbd; */
//   /* padding: 5px 0; */
//   /* text-align: center; */
//   margin-right: 45px;
//   margin-left: 50px;
//   padding-left: 62px;

//   /* padding-left: 20px; */

//   font-size: 16px;
//   width: 120px;
// `;
// export const BoardNumber = styled.div`
//   width: 50px;
//   /* margin-right: 30px; */
//   /* margin-left: 50px; */
//   margin-left: 30px;
//   /* padding-left: 20px; */

//   font-size: 16px;
//   /* padding-left: 15px; */
// `;
// export const BoardTitle = styled.div`
//   width: 200px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   padding-left: 115px;
//   margin-right: 30px;
//   margin-left: 50px;
//   /* padding-left: 25px; */
//   /* padding-left: 20px; */

//   font-size: 16px;
// `;
// export const BoardWriter = styled.div`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   width: 115px;
//   padding-left: 70px;
//   margin-right: 30px;
//   margin-left: 50px;
//   /* padding-left: 25px; */
//   /* padding-left: 20px; */

//   font-size: 16px;
// `;
// export const CreateBoardBt = styled.button`
//   width: 100px;
//   height: 30px;
//   border: 2px solid salmon;
//   margin-top: 20px;
//   background-color: #ffffff;
//   border-radius: 6px;
//   :hover {
//     cursor: pointer;
//   }
//   :active {
//     position: relative;
//     top: 1px;
//     left: 1px;
//   }
// `;
export const BoardListMain = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ListWrap = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  border-top: 2px solid crimson;
`;

export const TableLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid crimson;
  font-size: 18px;
  font-weight: 500;
`;
export const BoardNumberTitle = styled.div`
  width: 20%;
  text-align: center;
`;
export const BoardMainTitle = styled(BoardNumberTitle)`
  width: 40%;
  text-align: left;
`;
export const BoardWriterTitle = styled(BoardNumberTitle)`
  width: 40%;
`;
export const BoardDateTitle = styled(BoardNumberTitle)``;

export const TableBody = styled(TableLine)`
  :hover {
    cursor: pointer;
    color: indianred;
  }
`;
export const TableDate = styled(BoardDateTitle)`
  font-size: 16px;
`;
export const BoardNumber = styled(BoardNumberTitle)`
  font-size: 16px;
`;
export const BoardTitle = styled(BoardMainTitle)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;
export const BoardWriter = styled(BoardWriterTitle)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 16px;
`;
export const ButtonWrap = styled.div`
  margin-left: 1100px;
`;
export const CreateBoardBt = styled.button`
  margin-top: 20px;

  width: 100px;
  height: 30px;
  border: 2px solid salmon;

  background-color: #ffffff;
  border-radius: 6px;
  :hover {
    cursor: pointer;
    color: indianred;
  }
  :active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;
