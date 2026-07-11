import { AxiosError } from "axios";

const DEFAULT_ERROR_CODE = '';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

type DEFAULT_ERROR = {
    code: string;
    message: string;
}

const isAxiosError = (error: unknown): error is AxiosError<DEFAULT_ERROR> => {
    return error instanceof AxiosError;
}

const DEFAULT_ERROR_DATA = { code: DEFAULT_ERROR_CODE, message: DEFAULT_ERROR_MESSAGE }

export const getErrorData = (error: unknown) => {
    if (isAxiosError(error)) {
        const { response } = error

        if (!response) return DEFAULT_ERROR_DATA;

        const { data } = response;

        const { code, message } = data;

        if (!code || !message) return DEFAULT_ERROR_DATA;

        return { code, message }
    }

    return DEFAULT_ERROR_DATA;
}