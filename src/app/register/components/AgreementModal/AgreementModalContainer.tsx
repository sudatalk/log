"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { EMBER_ICON, FLEX, FLEX_COL, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import { type FormEvent, useState } from "react";

const AGREEMENT_KEYS = ["OVER_14_AGE", "PRIVATE_AGREEMENT", "USABLE_AGREEMENT"] as const;

const AGREEMENT_DESCRIPTION_LIST = {
  OVER_14_AGE: "[필수] 만 14세 이상 회원입니다",
  PRIVATE_AGREEMENT: "[필수] 개인정보 수집 및 이용 동의",
  USABLE_AGREEMENT: "[필수] 이용약관 동의",
};

type AgreementKey = (typeof AGREEMENT_KEYS)[number];

type AgreementState = Record<AgreementKey, boolean>;

const INITIAL_AGREEMENT_STATE: AgreementState = {
  OVER_14_AGE: false,
  PRIVATE_AGREEMENT: false,
  USABLE_AGREEMENT: false,
};

type Props = {
  onSubmit?: (agreementCheckList: AgreementState) => void;
};

const AgreementModalContainer = ({ onSubmit }: Props) => {
  const [agreementCheckList, setAgreementCheckList] = useState<AgreementState>(INITIAL_AGREEMENT_STATE);

  const handleCheckedChange = (key: AgreementKey, checked: boolean) => {
    setAgreementCheckList((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!AGREEMENT_KEYS.every((key) => agreementCheckList[key])) {
      return;
    }

    onSubmit?.(agreementCheckList);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(FLEX, FLEX_COL, W_FULL, "gap-4", "p-4")}>
      <FieldGroup>
        {AGREEMENT_KEYS.map((key) => {
          const checkboxId = `agreement-checkbox-${key}`;

          return (
            <Field key={key} orientation="horizontal">
              <Checkbox
                id={checkboxId}
                name={checkboxId}
                checked={agreementCheckList[key]}
                onCheckedChange={(checked) => handleCheckedChange(key, checked)}
                style={{ height: 25, width: 25, borderRadius: 50, fontSize: 20 }}
              />
              <FieldLabel htmlFor={checkboxId} style={{ fontSize: 14 }}>
                {AGREEMENT_DESCRIPTION_LIST[key]}
              </FieldLabel>
            </Field>
          );
        })}
      </FieldGroup>
      <Button
        type="submit"
        size="lg"
        className={clsx(EMBER_ICON, W_FULL)}
        style={{ height: 40 }}
        disabled={!AGREEMENT_KEYS.every((key) => agreementCheckList[key])}
      >
        입장하기
      </Button>
    </form>
  );
};

export default AgreementModalContainer;
