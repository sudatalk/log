import { useMemo, useState } from "react";
import { CardType } from "./types/card";
import { getAvailableTypes, getLogBadges, type ReviewContent } from "./logCardUtils";

export const useCardTypeSelection = <T extends ReviewContent>(review: T) => {
  const availableTypes = useMemo(() => getAvailableTypes(review), [review]);
  const [selectedType, setSelectedType] = useState(availableTypes[0] ?? CardType.ONE_LINE);
  const badges = useMemo(
    () => getLogBadges(selectedType).filter((badge) => availableTypes.includes(badge.type)),
    [selectedType, availableTypes],
  );

  const handleClickBadge = (value: string) => {
    setSelectedType(value);
  };

  return { availableTypes, selectedType, badges, handleClickBadge };
};
