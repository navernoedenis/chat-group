import { FC, ReactNode } from "react";
import { ModalWrapper } from "./styles";

import Modal from "@mui/material/Modal";

interface ModalLayoutProps {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
}

const ModalLayout: FC<ModalLayoutProps> = ({
  children,
  onClose,
  open,
  ...otherProps
}) => (
  <Modal open={open} onClose={onClose} {...otherProps}>
    <ModalWrapper>{children}</ModalWrapper>
  </Modal>
);

export default ModalLayout;
