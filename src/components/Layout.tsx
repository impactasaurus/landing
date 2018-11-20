import { Link } from "gatsby";
import * as React from "react";
import {Menu} from "./Menu";
import SEO from "./SEO";
import { Segment, Icon, Container } from "semantic-ui-react";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
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
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
