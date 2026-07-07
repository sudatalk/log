import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useId } from "react";

type Props = {
  nickname: string;
  setNickname: (nickname: string) => void;
};

const Nickname = (props: Props) => {
  const { nickname, setNickname } = props;

  const id = useId();

  return (
    <Field>
      <FieldLabel htmlFor={id}>
        닉네임<span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id={id}
        type="text"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
        placeholder="닉네임을 입력해주세요"
        style={{ backgroundColor: "white", height: 40 }}
      />
      <FieldDescription>앱 내에서 사용할 닉네임을 알려주세요</FieldDescription>
    </Field>
  );
};

export default Nickname;
