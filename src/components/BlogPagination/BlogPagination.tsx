import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import Pagination from "react-bootstrap/lib/Pagination";
import { times } from "lodash";

interface BlogPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  pageCount: number;
}

export default (props: BlogPaginationProps) => {
  if (props.pageCount === 1) { return null; }
  const active = props.pathname.startsWith("/blog/page/")
    ? props.pathname.split("/")[3]
    : "1";

  return (
    <Pagination bsSize="large" style={{justifyContent: "center"}}>
      {times(props.pageCount, (index) => {
        const pageIndex = (index + 1).toString();
        const rangeStep = props.pageCount < 10 ? 5 : 3;
        const isInRange = (+pageIndex - rangeStep < +active && +pageIndex + rangeStep > +active);
        const isLastPage = (+pageIndex === props.pageCount);
        const isFirstPage = (+pageIndex === 1);
        const last = +pageIndex === props.pageCount - 1;
        const second = +pageIndex === 2;
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <Pagination.Item
              key={pageIndex}
              active={active === pageIndex}
              href={`/blog/page/${pageIndex}/`}
              name={pageIndex}
            >
              {index + 1}
            </Pagination.Item>
          );
        } else if (last || second) {
          return <Pagination.Ellipsis key={pageIndex} disabled />;
        } else {
          return null;
        }
      })}
    </Pagination>
  );
};
