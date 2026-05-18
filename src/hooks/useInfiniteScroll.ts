import { useEffect, useRef } from "react";

type Options = {
  onIntersect: () => void;
  enabled?: boolean;
  rootMargin?: string;
};

export function useInfiniteScroll<T extends Element = HTMLDivElement>({
  onIntersect,
  enabled = true,
  rootMargin = "200px",
}: Options) {
  const ref = useRef<T | null>(null);
  const callbackRef = useRef(onIntersect);

  useEffect(() => {
    callbackRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    const target = ref.current;
    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          callbackRef.current();
        }
      },
      { rootMargin },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [enabled, rootMargin]);

  return ref;
}
