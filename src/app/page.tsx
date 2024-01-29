import Link from "next/link";

// There is automate redirect to '/list/1' page from here in next.config.mjs
const MainPage = ({}) => {
  return (
    <Link href="/list/1">
      Список элементов
    </Link>
  );
};

export default MainPage;
