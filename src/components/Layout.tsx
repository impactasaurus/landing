import * as React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import {Menu, IMenuItem} from "./Menu";
import {Footer, IFooterItem, convertMenuItem} from "./Footer";
import { Provider } from "react-redux";
import { store } from "../store";
import { Helmet } from "react-helmet";
import "./theme.scss";
import "./global.less";

const menuItems: IMenuItem[] = [
  {key: "common.pages.features", path: "", exact: true, children: [
      {key: "common.pages.questionnaires", path: "/features/questionnaires/", exact: true},
      {key: "common.pages.responses", path: "/features/responses/", exact: true},
      {key: "common.pages.monitor", path: "/features/monitor/", exact: true},
      {key: "common.pages.reporting", path: "/features/reporting/", exact: true},
      {key: "common.pages.segments", path: "/features/segments/", exact: true},
      {key: "common.pages.security", path: "/features/security/", exact: true},
    ]},
  {key: "common.pages.pricing", path: "/pricing/", exact: true},
  {key: "common.pages.faq", path: "/faq/", exact: true},
  {key: "common.pages.blog", path: "/blog/", exact: false},
  {key: "common.pages.about", path: "/about/", exact: true},
  {key: "common.pages.support", path: "/support/", exact: true, right: true},
];

const footerItems: IFooterItem[] = [
  convertMenuItem(menuItems, "common.pages.features"),
  {key: "common.pages.product", path: "", children: [
    {key: "common.pages.signup", path: "/signup/"},
    convertMenuItem(menuItems, "common.pages.pricing"),
    convertMenuItem(menuItems, "common.pages.faq"),
    convertMenuItem(menuItems, "common.pages.support"),
    {key: "common.pages.terms", path: "/terms/"},
  ]},
  {key: "common.pages.company", path: "", children: [
    convertMenuItem(menuItems, "common.pages.about"),
    convertMenuItem(menuItems, "common.pages.blog"),
    {key: "common.pages.press", path: "/press/"},
    {key: "common.pages.privacy", path: "/privacy/"},
    {key: "common.pages.cookies", path: "/cookie/"},
  ]},
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps & {signup?: boolean}) => {
  const { pathname } = props.location;
  return (
    <Provider store={store}>
      <div>
        <Helmet>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Helmet>
        <Menu pathname={pathname} items={menuItems} />
        <div className="main-content">
          {props.children}
        </div>
        <Footer Link={Link} items={footerItems} signup={props.signup}/>
      </div>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>, signup: boolean = true) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    public render() {
      return (
        <Layout location={this.props.location} signup={signup}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
