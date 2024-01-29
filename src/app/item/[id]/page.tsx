import { ModalItem } from "@/entities/Item";
import { getItem } from "@/shared/api";
import { Metadata } from "next";

type Props = {
  params: { id: number }
}

export const generateMetadata = async (
  { params: { id: itemId } }: Props,
): Promise<Metadata> => {
  return {
    title: `Список | Элемент ${itemId}`,
    description: "Тестовое задание для компании ООО Восход",
  }
}

const ItemPage = async ({ params: { id: itemId } }: Props) => {
  const { name, text } = await getItem(itemId);

  return (
    <>
      <ModalItem title={name} text={text} onCloseLink="/list/1" />
    </>
  );
};

export default ItemPage;
