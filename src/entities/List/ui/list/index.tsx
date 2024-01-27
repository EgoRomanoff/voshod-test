import { ListItem } from "@/entities/Item";
import { IListItem } from "@/shared/types/list-types";
import { Col, Row } from "react-bootstrap";

const ItemList = ({ items }: {
  items: IListItem[],
}) => {
  if (!items) {
    return (
      <p>Элементы отсутствуют</p>
    )
  }

  return (
    <Row
      as="ul"
      xs={1}
      className="list-unstyled row-gap-2"
    >
      {items.map((item) => (
        <Col key={item.id} as="li">
          <ListItem name={item.name} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
