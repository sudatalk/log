export const REDIRECT_URL_KEY = "redirectUrl";

type SearchParams = Record<string, string>;

export const getRoute = {
  login: (searchParams?: SearchParams) => {
    return getPathWithParams(`/login`, searchParams);
  },
  write: (searchParams?: SearchParams) => {
    return getPathWithParams(`/write`, searchParams);
  },
};

const getPathWithParams = (path: string, params?: Record<string, string>) => {
  if (!params) return path;
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });
  return `${path}?${searchParams.toString()}`;
};
