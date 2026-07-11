export const REDIRECT_URL_KEY = "redirectUrl";

type SearchParams = Record<string, string | number>;

export const getRoute = {
  login: (searchParams?: SearchParams) => {
    return getPathWithParams(`/login`, searchParams);
  },
  write: (searchParams?: SearchParams) => {
    return getPathWithParams(`/write`, searchParams);
  },

  profile: (searchParams?: SearchParams) => {
    return getPathWithParams(`/profile`, searchParams);
  },
};

const getPathWithParams = (path: string, params?: SearchParams) => {
  if (!params) return path;
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  return `${path}?${searchParams.toString()}`;
};
