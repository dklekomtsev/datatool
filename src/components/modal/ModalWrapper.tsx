import { Modal } from "semantic-ui-react";

const ModalWrapper: React.FC = ({ children }) => {
  return <Modal>{children}</Modal>;
};

export default ModalWrapper;
