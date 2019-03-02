import * as React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import Button from "react-bootstrap/lib/Button";
import "./style.less";
import { Link } from "gatsby";
import Logo from "../Logo";

export interface IMenuItem {
  name: string;
  path: string;
  exact: boolean;
  children?: IMenuItem[];
  right?: boolean;
}

export interface IMenuProps extends React.HTMLProps<HTMLDivElement> {
  items: IMenuItem[];
  pathname: string;
}

export interface IRenderItemProp {
  item: IMenuItem;
  pathname: string;
}

const isActive = (exact: boolean, itemPath: string, pathname: string): boolean =>
  (exact) ? pathname === itemPath : pathname.startsWith(itemPath);

const MenuItem = ({item, pathname}: IRenderItemProp) => {
  if (item.children) {
    const active = item.children.reduce((a, c) => {
      return a || isActive(c.exact, c.path, pathname);
    }, false);
    return (
      <NavDropdown title={item.name} id={item.name} key={item.path} active={active}>
        {item.children.map((i) =>
          <NavDropdown.Item as={Link} to={i.path} key={i.path} active={isActive(i.exact, i.path, pathname)}>{i.name}</NavDropdown.Item>,
        )}
      </NavDropdown>
    );
  } else {
    return <Nav.Link as={Link} to={item.path} key={item.path} active={isActive(item.exact, item.path, pathname)}>{item.name}</Nav.Link>;
  }
};

const ButtonLink = (p) => {
  return <Button as={Link} {...p}>{p.children}</Button>;
};

export const Menu = ({ items, pathname }: IMenuProps) =>
  <Navbar expand="lg" sticky="top">
    <Navbar.Brand as={Link} to="/">
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {items.filter((i) => i.right !== true).map((item) => <MenuItem item={item} pathname={pathname} key={item.path} />)}
      </Nav>
      <Nav className="justify-content-end">
        {items.filter((i) => i.right === true).map((item) => <MenuItem item={item} pathname={pathname} key={item.path} />)}
        <Nav.Item as={Button} variant="outline-primary" href="https://app.impactasaurus.org">Log in</Nav.Item>
        <Nav.Item as={ButtonLink} variant="primary" to="/signup/">Sign up</Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
