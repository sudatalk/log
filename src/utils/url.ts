export const getDecodedFname = (url: string): string | null => {
  const params = new URL(url).searchParams;
  const fname = params.get("fname");

  return fname ? decodeURIComponent(fname) : null;
};
