import { Link } from "gatsby";
import * as React from "react";
import {Menu, IMenuItem} from "./Menu";
import { Segment, Icon, Container } from "semantic-ui-react";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems: IMenuItem[] = [
  {name: "Features", path: "", exact: true, children: [
    {name: "Questionnaires", path: "/features/questionnaires/", exact: true},
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
        {isHome ? null : <Menu
          Link={Link}
          pathname={pathname}
          items={menuItems}
        />}
        <div style={{ paddingBottom: 60 }}>
          {props.children}
        </div>
        <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Container textAlign="center">
            <p>Powered with <Icon name="heart" /> by Gatsby 2.0</p>
          </Container>
        </Segment>
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
