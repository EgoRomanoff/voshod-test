import type { Metadata } from 'next'
import { Container } from "react-bootstrap";
import { ItemList } from "@/entities/List";
import { Paginator } from "@/features";
import { getList } from "@/shared/api";

type Props = {
  params: { page: number }
}

export const generateMetadata = async (
  { params }: Props,
): Promise<Metadata> => {
  const { page } = params

  return {
    title: `Список | Страница ${page}`,
    description: "Тестовое задание для компании ООО Восход",
  }
}

const ItemListsPage = async ({ params }: Props) => {
  const { items, pages, page } = await getList(params.page);

  if (!items) {
    return (
      <p>Элементы отсутствуют</p>
    )
  }

  return (
    <Container
      fluid
      className="p-5 d-flex flex-column gap-3"
    >
      <ItemList items={items} />

      <Paginator
        pagesCount={pages}
        currentPage={page}
        pageLink="/list"
      />
    </Container>
  );
};

export default ItemListsPage;
