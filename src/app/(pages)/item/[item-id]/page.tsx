import { Metadata } from "next";
import { ModalWindow } from "@/features";
import { getItem } from "@/shared/api";

type Props = {
  params: { 'item-id': number }
}

export const generateMetadata = async (
  { params }: Props,
): Promise<Metadata> => {
  const itemId = params['item-id'];

  return {
    title: `Список | Элемент ${itemId}`,
    description: "Тестовое задание для компании ООО Восход",
  }
}

const ItemPage = async ({ params }: Props) => {
  const { name, text } = await getItem(params['item-id']);

  return (
    <ModalWindow title={name} text={text} />
  );
};

export default ItemPage;
