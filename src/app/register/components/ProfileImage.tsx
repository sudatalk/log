import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import clsx from "clsx";
import { PROFILE_IMAGE_LIST } from "../constants/profiles";
import { useId } from "react";

type Props = {
  selected?: number;
  setSelected: (index: number) => void;
};

const ProfileImage = (props: Props) => {
  const { selected, setSelected } = props;

  const id = useId();

  return (
    <Field>
      <FieldLabel htmlFor={id}>
        프로필 사진<span className="text-destructive">*</span>
      </FieldLabel>
      <div className="grid grid-cols-5 gap-4 mb-2">
        {PROFILE_IMAGE_LIST.map((src, index) => (
          <div
            key={src}
            onClick={() => setSelected(index)}
            className={clsx(
              "size-18 rounded-full overflow-hidden cursor-pointer transition-all duration-200 flex items-center justify-center bg-gray-100",
              selected === index
                ? "ring-2 ring-blue-500 ring-offset-2 scale-105"
                : "hover:ring-2 hover:ring-gray-300",
            )}
          >
            <img src={src} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <FieldDescription>
        앱 내에서 사용할 프로필 사진을 알려주세요
      </FieldDescription>
    </Field>
  );
};

export default ProfileImage;
