import type { Metadata, ResolvingMetadata } from 'next'
import { Container } from "react-bootstrap";
import { ItemList } from "@/entities/List";
import { Paginator } from "@/features";
import { getList } from "@/shared/api";

type Props = {
  params: { id: number }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { id } = params

  return {
    title: `Список | Страница ${id}`,
  }
}

const ItemListsPage = async ({ params }: Props) => {
  const { items, pages, page } = await getList(params.id);

  if (!items) {
    return (
      <p>Элементы отсутствуют</p>
    )
  }

  return (
    <Container
      fluid
      className="min-vh-100 p-5 d-flex flex-column gap-3"
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
