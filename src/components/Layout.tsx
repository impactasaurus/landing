import { Link } from "gatsby";
import * as React from "react";
import {Menu, IMenuItem} from "./Menu";
import { Provider } from "react-redux";
import { store } from "../store";
import "./global.less";

export const menuItems: IMenuItem[] = [
  {name: "Features", path: "", exact: true, children: [
    {name: "Questionnaires", path: "/features/questionnaires/", exact: true},
    {name: "Records", path: "/features/records/", exact: true},
    {name: "Journey", path: "/features/journey/", exact: true},
    {name: "Reporting", path: "/features/reporting/", exact: true},
    {name: "Segments", path: "/features/segments/", exact: true},
    {name: "Security", path: "/features/security/", exact: true},
    {name: "Privacy", path: "/features/privacy/", exact: true},
  ]},
  {name: "Pricing", path: "/pricing/", exact: true},
  {name: "FAQ", path: "/faq/", exact: true},
  {name: "Blog", path: "/blog/", exact: false},
  {name: "About", path: "/about/", exact: true},
  {name: "Support", path: "/support/", exact: true, right: true},
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <div>
        <Menu Link={Link} pathname={pathname} items={menuItems} />
        <div>
          {props.children}
        </div>
      </div>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    public render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
