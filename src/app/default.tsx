import { ItemList } from "@/entities/List";
import { Paginator } from "@/features";
import { getList } from "@/shared/api";
import { Container } from "react-bootstrap";

const Default = async () => {
  const { items, pages, page } = await getList(1);

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
  )
}

export default Default;
