"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { EMBER_ICON, FLEX, FLEX_COL, W_FULL } from "@/constants/tailwind";
import { Term } from "@/types/api";
import clsx from "clsx";
import { type FormEvent, useEffect, useState } from "react";

type Props = {
  onSubmit?: (agreementCheckList: Record<number, boolean>) => void;
  terms?: Term[];
};

const getInitialState = (terms?: Term[]): Record<number, boolean> => {
  if (!terms) return {};

  return terms.reduce<Record<number, boolean>>((acc, term) => {
    acc[term.id] = false;
    return acc;
  }, {});
};

const AgreementModalContainer = ({ onSubmit, terms = [] }: Props) => {
  const [agreementCheckList, setAgreementCheckList] = useState(() => getInitialState(terms));

  useEffect(() => {
    setAgreementCheckList(getInitialState(terms));
  }, [terms]);

  const handleCheckedChange = (id: number, checked: boolean) => {
    setAgreementCheckList((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isAllRequiredChecked = terms.filter((term) => term.required).every((term) => agreementCheckList[term.id]);

    if (!isAllRequiredChecked) {
      return;
    }

    onSubmit?.(agreementCheckList);
  };

  const isAllRequiredChecked = terms.filter((term) => term.required).every((term) => agreementCheckList[term.id]);

  return (
    <form onSubmit={handleSubmit} className={clsx(FLEX, FLEX_COL, W_FULL, "gap-4", "p-4")}>
      <FieldGroup>
        {terms.map((term) => {
          const checkboxId = `agreement-checkbox-${term.id}`;
          const isChecked = agreementCheckList[term.id] ?? false;

          return (
            <Field key={term.id} orientation="horizontal">
              <Checkbox
                id={checkboxId}
                name={checkboxId}
                checked={isChecked}
                onCheckedChange={(checked) => handleCheckedChange(term.id, checked === true)}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 50,
                  fontSize: 20,
                }}
              />

              <FieldLabel htmlFor={checkboxId} style={{ fontSize: 14 }} className="cursor-pointer">
                {term.required && "[필수]"} {term.title}
                <a
                  className="underline"
                  href={term.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  보기
                </a>
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
        disabled={!isAllRequiredChecked}
      >
        입장하기
      </Button>
    </form>
  );
};

export default AgreementModalContainer;
