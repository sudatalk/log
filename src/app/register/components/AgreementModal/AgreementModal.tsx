import { Sheet } from "react-modal-sheet";
import AgreementModalContainer from "./AgreementModalContainer";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleSubmit: () => void;
};

const AgreementModal = (props: Props) => {
  const { isOpen, setIsOpen, handleSubmit } = props;

  const handleClickButton = () => {
    setIsOpen(false);

    handleSubmit();
  };

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content">
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <AgreementModalContainer onSubmit={handleClickButton} />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={() => setIsOpen(false)} />
    </Sheet>
  );
};

export default AgreementModal;
