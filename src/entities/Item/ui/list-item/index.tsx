import Link from "next/link"
import { Card, CardHeader } from "react-bootstrap";

const ListItem = ({ name }: {
  name: string,
}) => {
  return (
    <Card bg="dark" text="light">
      <Link href="#">
        <CardHeader as="h2" className="text-center">
          {name}
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ListItem;
