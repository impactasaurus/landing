import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import {GatsbyLinkProps} from "gatsby-link";
import {IMenuItem} from "../Menu";
import Logo from "../Logo";
import Signup from "../Signup";
import "./style.less";

export interface IFooterItem {
  name: string;
  path: string;
  children?: IFooterItem[];
}

export interface IFooterProps extends React.HTMLProps<HTMLDivElement> {
  items: IFooterItem[];
  Link: React.ComponentClass<GatsbyLinkProps<any>> | any;
}

export const Column = ({item, Link}) => {
  return (
    <Col>
      <h5>{item.name}</h5>
      <ul>
        {(item.children || []).map((i) => (
          <li key={i.name}>
            <Link  to={i.path}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export const Footer = ({ items, Link }: IFooterProps) => {
  console.log(items);
  return (
    <footer>
      <Signup />
      <Container>
        <Row>
          <Logo />
          <hr width="100%"/>
        </Row>
        <Row>
          {items.map((i) => <Column key={i.name} item={i} Link={Link} />)}
        </Row>
        <Row>
          <span className="copyright">© {(new Date()).getFullYear()} Impactasaurus. All rights reserved.</span>
        </Row>
      </Container>
    </footer>
  );
};

export const convertMenuItem = (items: IMenuItem[], name: string): IFooterItem => {
  const filterItem = (p: IMenuItem|undefined, i: IMenuItem) => {
    if (i.name === name) {
      return i;
    }
    return (i.children || []).reduce(filterItem, p);
  };
  const found = items.reduce(filterItem, undefined);
  if (!found) {
    throw new Error(`item with name ${name} not found`);
  }
  const convertItem = (i: IMenuItem): IFooterItem => {
    return {
      name: i.name,
      path: i.path,
      children: i.children ? i.children.map(convertItem) : undefined,
    };
  };
  return convertItem(found);
};
