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
  H_FULL,
  JUSTIFY_BETWEEN,
  MIN_H_DVH,
  W_FULL,
} from "@/constants/tailwind";
import clsx from "clsx";
import { type FormEvent, useId, useState } from "react";

const RegisterPage = () => {
  const [nickname, setNickname] = useState("");

  const nicknameId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(W_FULL, MIN_H_DVH, BG_BASE, FLEX, FLEX_COL, "p-4")}>
      <form
        onSubmit={handleSubmit}
        className={clsx(FLEX, FLEX_COL, JUSTIFY_BETWEEN, H_FULL, FLEX_1)}
      >
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
        <Button
          type="submit"
          size="lg"
          className={clsx(EMBER_ICON)}
          style={{ height: 40 }}
          disabled={!nickname.trim()}
        >
          입장하기
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
