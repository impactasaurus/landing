import * as React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import "./style.less";
import {GatsbyLinkProps} from "gatsby-link";

export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
}

export interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: MenuItem[];
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>> | any;
}

export const Menu = ({ items, pathname, Link }: MenuProps) =>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {items.map((item) => {
                    const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
                    return <Nav.Link as={Link} to={item.path} key={item.path}>{item.name}</Nav.Link>;
                })}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
