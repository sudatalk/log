import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FLEX, FLEX_COL, JUSTIFY_END } from "@/constants/tailwind";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Sheet } from "react-modal-sheet";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SettingSheet = (props: Props) => {
  const { isOpen, onClose } = props;

  const router = useRouter();

  const handleLogout = () => {
    Kakao.Auth.cleanup();
    Kakao.Auth.logout();

    axios.interceptors.request.use((config) => {
      axios.defaults.headers.common["X-User-Id"] = "";
      return config;
    });

    router.push("/");
  };

  const handleWithdraw = () => {
    Kakao.Auth.cleanup();
    Kakao.Auth.logout();

    // TODO : 탈퇴
  };

  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent="content">
      <Sheet.Container>
        <Sheet.Content>
          <div className={clsx(FLEX, FLEX_COL, "items-start p-6 gap-2")}>
            <Button
              size="lg"
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
            <Separator />
            <Button
              size="lg"
              variant="ghost"
              className="w-full justify-start"
              onClick={handleWithdraw}
            >
              회원탈퇴
            </Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop className="!bg-black/40" onClick={onClose} />
    </Sheet>
  );
};

export default SettingSheet;
