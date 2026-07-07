"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  BG_BASE,
  EMBER_ICON,
  FLEX,
  FLEX_1,
  FLEX_COL,
  GAP_5,
  H_FULL,
  JUSTIFY_BETWEEN,
  MIN_H_DVH,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import { useId, useState } from "react";
import AgreementModal from "./components/AgreementModal/AgreementModal";
import useRegister from "./hooks/useRegister";
import { useRouter, useSearchParams } from "next/navigation";
import { REDIRECT_URL_KEY } from "@/constants/router";
import axios from "axios";

const profiles = [
  "/profile/profile-1.png",
  "/profile/profile-2.png",
  "/profile/profile-3.png",
  "/profile/profile-4.png",
  "/profile/profile-5.png",
];

const RegisterPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get(REDIRECT_URL_KEY);

  const { mutateAsync, isPending } = useRegister();

  const [isOpen, setIsOpen] = useState(false);

  const [nickname, setNickname] = useState("");

  const [selected, setSelected] = useState(0);

  const nicknameId = useId();

  const disabled = isPending || !nickname.trim();

  const handleOpenAgreementModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    if (disabled) return;

    const statusInfo = await Kakao.Auth.getStatusInfo();

    if ("user" in statusInfo) {
      const { user } = statusInfo;
      const { id: appUserId, kakao_account } = user || {};
      const { email, profile } = kakao_account || {};
      const { nickname } = profile || {};

      try {
        if (!appUserId) throw new Error("invalid appUserId");

        // TODO : 프로필 사진 추가

        const response = await mutateAsync({
          appUserId: +appUserId,
          nickname,
          email,
          agreedTermsIds: [],
        });

        axios.defaults.headers.common["X-User-Id"] = response.id;

        router.replace(redirectUrl || "/");
      } catch {
        // TODO : 에러 처리
        // TODO : 이미 가입된 유저의 재가입 오류 처리
      }
    }
  };

  return (
    <>
      <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL, "p-4")}>
        <div className={clsx(FLEX, FLEX_COL, JUSTIFY_BETWEEN, H_FULL)}>
          <div className={clsx(FLEX, FLEX_COL, H_FULL, FLEX_1, GAP_5)}>
            <Field>
              <FieldLabel htmlFor={nicknameId}>
                닉네임<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id={nicknameId}
                type="text"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                placeholder="닉네임을 입력해주세요"
                style={{ backgroundColor: "white", height: 40 }}
              />
              <FieldDescription>앱 내에서 사용할 닉네임을 알려주세요</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor={nicknameId}>
                프로필 사진<span className="text-destructive">*</span>
              </FieldLabel>
              <div className="grid grid-cols-5 gap-4 mb-2">
                {profiles.map((src, index) => (
                  <div
                    key={src}
                    onClick={() => setSelected(index)}
                    className={clsx(
                      "size-18 rounded-full overflow-hidden cursor-pointer transition-all duration-200 flex items-center justify-center bg-gray-100",
                      selected === index
                        ? "ring-2 ring-blue-500 ring-offset-2 scale-105"
                        : "hover:ring-2 hover:ring-gray-300"
                    )}
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <FieldDescription>앱 내에서 사용할 프로필 사진을 알려주세요</FieldDescription>
            </Field>
          </div>
          <Button
            type="submit"
            size="lg"
            className={clsx(EMBER_ICON)}
            style={{ height: 40 }}
            disabled={disabled}
            onClick={handleOpenAgreementModal}
          >
            입장하기
          </Button>
        </div>
      </div>
      <AgreementModal isOpen={isOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit} />
    </>
  );
};

export default RegisterPage;
