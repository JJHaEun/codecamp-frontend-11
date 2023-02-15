interface IButton01Props {
  title: string;
}

export default function Buttons01(props: IButton01Props): JSX.Element {
  return (
    <>
      <button>{props.title}</button>
    </>
  );
}
