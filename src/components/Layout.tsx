import { Link } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import {Menu, IMenuItem} from "./Menu";
import {Footer, IFooterItem, convertMenuItem} from "./Footer";
import { Provider } from "react-redux";
import { store } from "../store";
import "./theme.scss";
import "./global.less";

const menuItems: IMenuItem[] = [
  {name: "Features", path: "", exact: true, children: [
      {name: "Questionnaires", path: "/features/questionnaires/", exact: true},
      {name: "Responses", path: "/features/responses/", exact: true},
      {name: "Monitor", path: "/features/monitor/", exact: true},
      {name: "Reporting", path: "/features/reporting/", exact: true},
      {name: "Segments", path: "/features/segments/", exact: true},
      {name: "Security", path: "/features/security/", exact: true},
    ]},
  {name: "Pricing", path: "/pricing/", exact: true},
  {name: "FAQ", path: "/faq/", exact: true},
  {name: "Blog", path: "/blog/", exact: false},
  {name: "About", path: "/about/", exact: true},
  {name: "Support", path: "/support/", exact: true, right: true},
];

const footerItems: IFooterItem[] = [
  convertMenuItem(menuItems, "Features"),
  {name: "Product", path: "", children: [
    {name: "Signup", path: "/signup/"},
    convertMenuItem(menuItems, "Pricing"),
    convertMenuItem(menuItems, "FAQ"),
    convertMenuItem(menuItems, "Support"),
    {name: "Terms of Use", path: "/terms/"},
  ]},
  {name: "Company", path: "", children: [
    convertMenuItem(menuItems, "About"),
    convertMenuItem(menuItems, "Blog"),
    {name: "Privacy", path: "/privacy/"},
    {name: "Cookies", path: "/cookie/"},
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
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <div>
        <Helmet>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Helmet>
        <Menu pathname={pathname} items={menuItems} />
        <div>
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
