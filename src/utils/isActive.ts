export const isActive = (target: string, value?: string) => {
  if (!value) return false;
  if (value === "/") return target === "/";
  if (value === "/books") {
    return (
      target === value ||
      target.startsWith(`${value}/`) ||
      target.startsWith("/logs/")
    );
  }
  return target === value || target.startsWith(`${value}/`);
};
