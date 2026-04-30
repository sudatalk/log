import { TEXT_XS } from "@/constants/tailwind";
import clsx from "clsx";

type Props = {
  date: string;
  dateTime: string;
};

const BookTime = (props: Props) => {
  const { date, dateTime } = props;

  return (
    <time className={clsx(TEXT_XS)} dateTime={dateTime}>
      {date}
    </time>
  );
};

export default BookTime;
