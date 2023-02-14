export interface IFirebaseWriteUIProps {
  onChangeContent: (content: string) => (event: any) => void;
  onClickSubmit: () => void;
  boardContent: {
    writer: string;
    title: string;
    contents: string;
  };
}
