'use client';

import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { PageItem, Pagination } from "react-bootstrap";

const Paginator = ({ currentPage, pagesCount, pageLink }: {
  currentPage: number,
  pagesCount: number,
  pageLink?: Url;
}) => {
  const pageItems = [];
  const router = useRouter();

  for (let pageNum = 1; pageNum <= pagesCount; pageNum++) {
    pageItems.push(
      <PageItem
        as="button"
        key={`page-${pageNum}`}
        active={pageNum === currentPage}
        onClick={() => router.push(`${pageLink}/${pageNum}`)}
      >
        { pageNum }
      </PageItem>
    )
  }

  return (
    <Pagination className="justify-content-center column-gap-1">
      { pageItems }
    </Pagination>
  );
};

export default Paginator;
