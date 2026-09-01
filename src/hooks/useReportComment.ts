import { reportComment } from "@/lib/api";
import type { ReportCreateRequest } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useReportComment() {
  return useMutation({
    mutationFn: ({
      commentId,
      reason,
    }: {
      commentId: number;
      reason: ReportCreateRequest["reason"];
    }) => reportComment(commentId, { reason }),
    onSuccess: () => {
      toast("신고가 접수되었습니다.");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message as string | undefined;

        if (status === 409) {
          toast("이미 신고한 댓글입니다.");
          return;
        }
        if (status === 400) {
          toast(message || "본인이 작성한 댓글은 신고할 수 없습니다.");
          return;
        }
        if (status === 404) {
          toast(message || "존재하지 않는 댓글입니다.");
          return;
        }

        toast(message || "신고에 실패했습니다.");
        return;
      }

      toast("신고에 실패했습니다.");
    },
  });
}
