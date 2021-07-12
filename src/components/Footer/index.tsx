import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import {GatsbyLinkProps} from "gatsby-link";
import {IMenuItem} from "../Menu";
import Logo from "../Logo";
import Signup from "../Signup";
import { getLangNameFromCode } from "language-name-map";
import "./style.less";

export interface IFooterItem {
  key: string;
  path: string;
  children?: IFooterItem[];
}

export interface IFooterProps extends React.HTMLProps<HTMLDivElement> {
  items: IFooterItem[];
  Link: React.ComponentClass<GatsbyLinkProps<any>> | any;
  signup?: boolean;
}

export const Column = ({item, Link}: {item: IFooterItem, Link: any}) => {
  const {t} = useTranslation();
  return (
    <Col>
      <h5>{t(item.key)}</h5>
      <ul>
        {(item.children || []).map((i) => (
          <li key={i.key}>
            <Link to={i.path}>{t(i.key)}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export const Footer = ({ items, Link, signup }: IFooterProps) => {
  const {languages, originalPath} = useI18next();
  const languageSwitch = (
    <span id="lang-selector">
      {languages.map((l) =>
        <Link className="lang" key={l} to={originalPath} language={l}>
          {getLangNameFromCode(l).native}
        </Link>,
      )}
    </span>
  );
  return (
    <footer>
      {signup !== false && <Signup />}
      <Container>
        <Row>
          <Col>
            {signup !== false && (
              <span id="footer-initial-container">
                <Logo />
                {languageSwitch}
              </span>
            )}
            <hr width="100%"/>
          </Col>
        </Row>
        <Row>
          {items.map((i) => <Column key={i.key} item={i} Link={Link} />)}
        </Row>
        <Row>
          <span className="copyright no-translation">© {(new Date()).getFullYear()} Impactasaurus</span>
        </Row>
      </Container>
    </footer>
  );
};

export const convertMenuItem = (items: IMenuItem[], key: string): IFooterItem => {
  const filterItem = (p: IMenuItem|undefined, i: IMenuItem): IMenuItem => {
    if (i.key === key) {
      return i;
    }
    return (i.children || []).reduce(filterItem, p);
  };
  const found = items.reduce(filterItem, undefined);
  if (!found) {
    throw new Error(`item with key ${key} not found`);
  }
  const convertItem = (i: IMenuItem): IFooterItem => {
    return {
      key: i.key,
      path: i.path,
      children: i.children ? i.children.map(convertItem) : undefined,
    };
  };
  return convertItem(found);
};
