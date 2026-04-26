import { Sheet } from "react-modal-sheet";
import AgreementModalContainer from "./AgreementModalContainer";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const AgreementModal = (props: Props) => {
  const { isOpen, setIsOpen } = props;

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} detent="content">
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <AgreementModalContainer onSubmit={handleSubmit} />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={() => setIsOpen(false)} />
    </Sheet>
  );
};

export default AgreementModal;
