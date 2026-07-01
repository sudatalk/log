import { useState } from "react";

const useDisclosure = (defaultValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return { isOpen, handleOpen, handleClose, handleToggle };
};

export default useDisclosure;
