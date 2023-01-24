import { Modal, Rate } from "antd";
import { useState } from "react";

export default function StarPage() {
  const [star, setStar] = useState(0);
  const onChangeStar = (star: number) => {
    setStar(star);
    Modal.info({ content: `${star}점` });
  };

  return (
    <>
      <Rate onChange={onChangeStar} value={star} allowClear={true} />
    </>
  );
}
