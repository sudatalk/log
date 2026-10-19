import { useEffect, useMemo, useState } from "react";
import { CardType } from "./types/card";
import { getAvailableTypes, getLogBadges, type ReviewContent } from "./logCardUtils";

export const useCardTypeSelection = <T extends ReviewContent>(review: T) => {
  const availableTypes = useMemo(() => getAvailableTypes(review), [review]);
  const [selectedType, setSelectedType] = useState(
    availableTypes[0] ?? CardType.ONE_LINE,
  );

  useEffect(() => {
    if (availableTypes.length === 0) return;
    if (!availableTypes.includes(selectedType)) {
      setSelectedType(availableTypes[0]);
    }
  }, [availableTypes, selectedType]);

  const badges = useMemo(
    () =>
      getLogBadges(selectedType).filter((badge) =>
        availableTypes.includes(badge.type),
      ),
    [selectedType, availableTypes],
  );

  const handleClickBadge = (value: string) => {
    setSelectedType(value);
  };

  return { availableTypes, selectedType, badges, handleClickBadge };
};
