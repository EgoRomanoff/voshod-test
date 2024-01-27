import { ListItem } from "@/entities/Item";
import { ItemList } from "@/entities/List";
import { getList } from "@/shared/api";
import { Container, Row, Col } from "react-bootstrap";

const ItemListsPage = async ({ params }: {
  params: {
    id: number,
  }
}) => {
  const { items } = await getList(params.id);

  if (!items) {
    return (
      <p>Элементы отсутствуют</p>
    )
  }

  return (
    <Container fluid>
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListsPage;
