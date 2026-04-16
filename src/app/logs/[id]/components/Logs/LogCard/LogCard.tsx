import {
  BG_SURFACE,
  BORDER,
  BORDER_SOLID,
  BORDER_STRONG,
  FLEX,
  FLEX_COL,
  ROUNDED,
  TEXT_SM,
} from "@/constants/tailwind";
import clsx from "clsx";
import Rating from "./Rating";
import LogEmoji from "./LogEmoji";

const LogCard = () => {
  return (
    <div className={clsx(FLEX, FLEX_COL, BG_SURFACE, ROUNDED, BORDER, BORDER_SOLID, BORDER_STRONG, "gap-2.5", "p-2.5")}>
      <div className={FLEX}>
        <div className="flex items-center gap-2.5 relative flex-1 self-stretch grow">
          <div className="flex h-10 w-[43px] items-center justify-center">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#333333]">
              <span className="text-[10px] font-semibold leading-3 text-[#FEFEFF]">JO</span>
            </div>
          </div>
          <div className="flex flex-col w-[156px] items-start relative">
            <div className="self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Medium',Helvetica] font-medium text-sm leading-[normal] relative text-[color:var(--semantic-colors-text-primary)] tracking-[0]">
              홍길동
            </div>
            <div className="self-stretch [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-colors-labels-secondary text-[10px] relative tracking-[0.20px] leading-[normal]">
              2026. 03. 05
            </div>
          </div>
        </div>
        <Rating />
      </div>
      <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[3px] px-2 py-1 relative flex-[0_0_auto] bg-[#7e22ce33] rounded-[20px]">
          <div className="relative w-[7.67px] h-[7.67px] overflow-hidden bg-[url(/vector.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[22.92%] h-[93.75%] top-[6.25%] left-[77.08%]"
              alt="Vector"
              // src={vector2}
            />
            <img
              className="absolute w-[31.25%] h-[85.42%] top-[14.58%] left-[68.75%] object-cover"
              alt="Vector"
              // src={vector3}
            />
            <img
              className="absolute w-[89.58%] h-[35.42%] top-[64.58%] left-[10.42%]"
              alt="Vector"
              // src={vector4}
            />
            <img
              className="absolute w-[93.75%] h-[31.25%] top-[68.75%] left-[6.25%] object-cover"
              alt="Vector"
              // src={vector5}
            />
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-SemiBold',Helvetica] font-semibold text-purple-700 text-[8px] tracking-[0.20px] leading-[normal]">
            AI 질문
          </div>
        </div>
        <div className="inline-flex items-center gap-[3px] px-2 py-1 relative flex-[0_0_auto] bg-[#1d4ed833] rounded-[20px]">
          <div className="relative w-2 h-2">
            <img
              className="absolute w-[56.25%] h-[22.92%] top-[77.08%] left-[43.75%] object-cover"
              alt="Vector"
              // src={vector6}
            />
            <img
              className="absolute w-[93.75%] h-[93.75%] top-[6.25%] left-[6.25%]"
              alt="Vector"
              // src={vector7}
            />
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-SemiBold',Helvetica] font-semibold text-blue-700 text-[8px] tracking-[0.20px] leading-[normal]">
            인상 문장
          </div>
        </div>
        <div className="inline-flex items-center gap-[3px] px-2 py-1 relative flex-[0_0_auto] bg-[#15803d33] rounded-[20px]">
          <div className="relative w-2 h-2">
            <img
              className="absolute w-[47.92%] h-[93.75%] top-[6.25%] left-[52.08%]"
              alt="Vector"
              // src={vector8}
            />
            <img
              className="absolute w-[93.75%] h-[93.75%] top-[6.25%] left-[6.25%]"
              alt="Vector"
              // src={vector9}
            />
          </div>
          <div className="w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-SemiBold',Helvetica] font-semibold text-green-700 text-[8px] relative tracking-[0.20px] leading-[normal]">
            자유 리뷰
          </div>
        </div>
      </div>
      <p className={TEXT_SM}>{'“교육 제도의 억압성과 개인의 자유에 대한 깊은 성찰을 담은 작품"'}</p>
      <LogEmoji />
    </div>
  );
};

export default LogCard;
