import { FLEX, FLEX_1, FLEX_COL, FONT_MEDIUM, TEXT_GRAY, TEXT_LG, TEXT_SM } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  title: string;
  author: string;
};

const BookCardTitle = (props: Props) => {
  const { title, author } = props;

  return (
    <div className={clsx(FLEX, FLEX_1, FLEX_COL)}>
      <h1 className={clsx(TEXT_LG, FONT_MEDIUM)}>{title}</h1>
      <p className={clsx(TEXT_SM, FONT_MEDIUM, TEXT_GRAY)}>{author}</p>
    </div>
  );
};

export default BookCardTitle;
