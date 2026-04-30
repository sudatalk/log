import Image from "next/image";

type Props = {
  imageSrc: string;
};

const BookImage = (props: Props) => {
  const { imageSrc } = props;

  return (
    <Image alt="표지" className="rounded object-cover" height={120} src={`/${imageSrc}`} width={80} />
  );
};

export default BookImage;
