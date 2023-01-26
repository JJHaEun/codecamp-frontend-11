import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAddressUsePage() {
  const handleComplete = (data: Address) => {
    console.log(data);
  };

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </>
  );
}
