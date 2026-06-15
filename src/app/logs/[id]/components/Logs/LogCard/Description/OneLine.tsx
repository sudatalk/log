import { TEXT_SM } from "@/constants/tailwind";

type Props = {
  shortComment: string;
};

const OneLine = ({ shortComment }: Props) => {
  return <p className={TEXT_SM}>{`"${shortComment}"`}</p>;
};

export default OneLine;
