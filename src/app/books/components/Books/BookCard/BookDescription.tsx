import { OVERFLOW_HIDDEN, TEXT_ELLIPSIS, TEXT_SM } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  description: string;
};

const BookDescription = (props: Props) => {
  const { description } = props;

  return (
    <p
      className={clsx(
        OVERFLOW_HIDDEN,
        TEXT_SM,
        TEXT_ELLIPSIS,
        "[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]",
      )}
    >
      {description}
    </p>
  );
};

export default BookDescription;
