import { ModalWindow } from "@/features"

const ModalItem = ({ title, text, onCloseLink }: {
  title: string,
  text: string,
  onCloseLink?: string,
}) => {
  return <ModalWindow
    title={title}
    text={text}
    onCloseLink={onCloseLink}
  />;
};

export default ModalItem;
