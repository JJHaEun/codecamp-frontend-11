import { ChangeEvent } from "react";

interface IProps {
  onChangeFile: (i: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
}

export default function ImagesPage(props: IProps): JSX.Element {
  return (
    <>
      <input type="file" onChange={props.onChangeFile(0)} />
      <input type="file" onChange={props.onChangeFile(1)} />
      <input type="file" onChange={props.onChangeFile(2)} />
      <img src={props.imageUrls[0]} />
      <img src={props.imageUrls[1]} />
      <img src={props.imageUrls[2]} />
    </>
  );
}
