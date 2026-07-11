"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { EMBER_ICON, FLEX, FLEX_COL, W_FULL } from "@/constants/tailwind";
import clsx from "clsx";
import { type FormEvent, useState } from "react";
import { Term, TermType } from "@/types/api";

type Props = {
  onSubmit?: (agreementCheckList: Record<TermType, boolean>) => void;
  terms?: Term[];
};

const isTermType = (value: string): value is TermType => {
  return Object.values(TermType).some((type) => type === value);
};

const getInitialState = (terms?: Term[]): Record<TermType, boolean> => {
  const INITIAL_STATE = {} as Record<TermType, boolean>;

  if (!terms) return INITIAL_STATE;

  return terms.reduce((acc, term) => {
    if (!term.type) return acc;

    acc[term.type] = false;
    return acc;
  }, INITIAL_STATE);
};

const AgreementModalContainer = ({ onSubmit, terms }: Props) => {
  const [agreementCheckList, setAgreementCheckList] = useState(
    getInitialState(terms),
  );

  const handleCheckedChange = (key: TermType, checked: boolean) => {
    setAgreementCheckList((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!Object.values(agreementCheckList).every((value) => value)) {
      return;
    }

    onSubmit?.(agreementCheckList);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(FLEX, FLEX_COL, W_FULL, "gap-4", "p-4")}
    >
      <FieldGroup>
        {Object.keys(agreementCheckList).map((value) => {
          const key = isTermType(value) ? value : undefined;

          if (!key) return <></>;

          const checkboxId = `agreement-checkbox-${key}`;

          const isChecked = agreementCheckList[key];

          return (
            <Field key={key} orientation="horizontal">
              <Checkbox
                id={checkboxId}
                name={checkboxId}
                checked={isChecked}
                onCheckedChange={(checked) => handleCheckedChange(key, checked)}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 50,
                  fontSize: 20,
                }}
              />
              <FieldLabel htmlFor={checkboxId} style={{ fontSize: 14 }}>
                {terms?.find((term) => term.type === key)?.content}
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
        disabled={!Object.values(agreementCheckList).every((value) => value)}
      >
        입장하기
      </Button>
    </form>
  );
};

export default AgreementModalContainer;
