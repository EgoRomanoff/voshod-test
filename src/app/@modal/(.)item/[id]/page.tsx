import { Metadata } from "next";
import { ModalWindow } from "@/features";
import { getItem } from "@/shared/api";

type Props = {
  params: { id: number }
}

export const generateMetadata = async (
  { params }: Props,
): Promise<Metadata> => {
  const id = { params };

  return {
    title: `Список | Элемент ${id}`,
    description: "Тестовое задание для компании ООО Восход",
  }
}

const ItemPage = async ({
  params: { id: itemId },
}: Props) => {
  const { name, text } = await getItem(itemId);

  return (
    <ModalWindow title={name} text={text} />
  );
};

export default ItemPage;
