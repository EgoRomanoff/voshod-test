import Link from "next/link"
import { Card, CardHeader } from "react-bootstrap";

const ListItem = ({ id, name }: {
  id: number,
  name: string,
}) => {
  return (
    <Card bg="dark" text="light">
      <Link key={id} href={`/item/${id}`}>
        <CardHeader as="h2" className="text-center">
          {name}
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ListItem;
