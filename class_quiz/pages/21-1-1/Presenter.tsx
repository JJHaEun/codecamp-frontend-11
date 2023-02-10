// presenter 부분

interface IPresenterProps {
  child: string;
}
export default function Presenter(props: IPresenterProps): JSX.Element {
  return <div>{props.child}</div>;
}
