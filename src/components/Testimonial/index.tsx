import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "./style.less";
import {StaticQuery} from "gatsby";

interface IProps {
  name: string;
  quote: string;
  image: string;
  url: string;
}

export default ({name, quote, image, url}: IProps) => {
  const linkWrapper = (inner: JSX.Element): JSX.Element => (
    <a href={url}>
      {inner}
    </a>
  );
  let imgElement: JSX.Element = (
    <StaticQuery
      query={graphql`
        {
          allFile{
            edges {
              node {
                relativePath
                name
                extension
                childImageSharp {
                  fluid(maxWidth: 200, toFormat:PNG, srcSetBreakpoints:[100, 200]) {
                    srcSetWebp
                    srcSet
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render = {(data) => {
        const imgDatas = data.allFile.edges.filter((e: any) => e.node.relativePath.includes(image));
        const imgData = imgDatas[0].node.childImageSharp.fluid;
        const sizes = "(max-width: 1000px) 100px, 200px"; // use the 100px version if under 1000px, otherwise 200px
        return (
          <picture>
            <source srcSet={imgData.srcSetWebp} type="image/webp" sizes={sizes} />
            <source srcSet={imgData.srcSet} type="image/png" sizes={sizes} />
            <img src={imgData.src} width="100%" style={{maxWidth: "20vw"}} alt={`${name}'s logo`} />
          </picture>
        );
      }}
    />
  );
  return (
    <Row key={name} className="testimonial">
      <Col md={{span: 3, offset: 1}} style={{textAlign: "center"}}>
        {linkWrapper(imgElement)}
      </Col>
      <Col md={{span: 6, offset: 1}}>
        {linkWrapper(<h5>{name}</h5>)}
        <p>{quote}</p>
      </Col>
    </Row>
  );
};
