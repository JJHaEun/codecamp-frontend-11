export default function HOFPage(): JSX.Element {
  const onClickButton = (sr: number) => (): void => {
    console.log(sr);
  };

  return (
    <>
      <button onClick={onClickButton(123)}>버튼</button>
    </>
  );
}
