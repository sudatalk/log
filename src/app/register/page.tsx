"use client";

import { Button } from "@/components/ui/button";

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
import { useState } from "react";
import AgreementModal from "./components/AgreementModal/AgreementModal";
import useRegister from "./hooks/useRegister";
import { useRouter, useSearchParams } from "next/navigation";
import { getRoute, REDIRECT_URL_KEY } from "@/constants/router";
import axios from "axios";
import ProfileImage from "./components/ProfileImage";
import Nickname from "./components/Nickname";
import useRegisterForm from "./hooks/useRegisterForm";
import { PROFILE_IMAGE_LIST } from "./constants/profiles";
import useTerms from "./hooks/useTerms";
import { getErrorData } from "@/utils/getErrorData";
import { toast } from "sonner";
import useModify from "./hooks/useModify";
import { Header } from "@/components/Header";

const DUPLICATE_USER_ERROR_CODE = "DUPLICATE_USER"

const RegisterPage = () => {


  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get(REDIRECT_URL_KEY);

  const { mutateAsync: registerMutateAsync, isPending: isRegisterPending } = useRegister();
  const { mutateAsync: modifyMutateAsync, isPending: isModifyPending } = useModify();

  const [isOpen, setIsOpen] = useState(false);

  const { nickname, setNickname, selected, setSelected, isModify } = useRegisterForm();

  const isPending = isRegisterPending || isModifyPending;

  const disabled = isPending || !nickname.trim() || (typeof selected === "undefined");

  const handleOpenAgreementModal = () => {
    setIsOpen(true);
  };

  const { data } = useTerms();

  const handleSubmit = async () => {
    if (disabled) return;

    const statusInfo = await Kakao.Auth.getStatusInfo();

    if ("user" in statusInfo) {
      const { user } = statusInfo;
      const { id: appUserId, kakao_account } = user || {};
      const { email } = kakao_account || {};

      try {
        if (!appUserId) throw new Error("invalid appUserId");

        const response = await registerMutateAsync({
          appUserId: +appUserId,
          nickname,
          email,
          profileImageUrl: PROFILE_IMAGE_LIST[selected],
          agreedTermsIds: data?.map(value => value.id!) || [],
        });

        axios.defaults.headers.common["X-User-Id"] = response.id;

        router.replace(redirectUrl || "/");
      } catch (error) {
        const { code, message } = getErrorData(error);

        if (code === DUPLICATE_USER_ERROR_CODE) {
          toast(message);

          router.replace(getRoute.login());
          return;
        }

        toast(message)
      }
    }
  };

  const handleModify = async () => {
    if (disabled) return;

    await modifyMutateAsync({
      nickname,
      profileImageUrl: PROFILE_IMAGE_LIST[selected]
    })

    router.replace(redirectUrl || "/");
  }

  return (
    <>
      <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL,)}>
        {isModify && <Header />}
        <div className={clsx(FLEX, FLEX_COL, JUSTIFY_BETWEEN, H_FULL, "p-4")}>
          <div className={clsx(FLEX, FLEX_COL, H_FULL, FLEX_1, GAP_5)}>
            <Nickname nickname={nickname} setNickname={setNickname} />
            <ProfileImage selected={selected} setSelected={setSelected} />
          </div>
          <Button
            type="submit"
            size="lg"
            className={clsx(EMBER_ICON, isModify && "bg-[#FFA500]")}
            style={{ height: 40 }}
            disabled={disabled}
            onClick={isModify ? handleModify : handleOpenAgreementModal}
          >
            {isModify ? '수정하기' : '입장하기'}
          </Button>
        </div>
      </div>
      <AgreementModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RegisterPage;
