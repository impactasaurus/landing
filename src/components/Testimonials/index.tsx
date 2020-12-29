import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Testimonial from "../Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { StaticQuery, graphql } from "gatsby";

export default () => {
  return (
    <Container>
      <Row className="header">
        <Col>
          <h2>Inspirational organisations <FontAwesomeIcon style={{color: "var(--primary)"}} icon={faHeart} /> Impactasaurus</h2>
          <h4>Over 100 organisations use Impactasaurus to demonstrate their impact</h4>
        </Col>
      </Row>
      <Row>
        <StaticQuery
          query={graphql`
            {
              allTestimonialsJson{
                edges {
                  node {
                    id
                    name
                    image
                    quote
                    url
                    weight
                  }
                }
              }
            }
          `}
          render = {(data) => {
            const rows: JSX.Element[] = [];
            let testimonials = data.allTestimonialsJson.edges
              .map((e: any) => e.node)
              .sort((a: any, b: any) => b.weight - a.weight);
            const wrapped = (t: any) => (
              <Col xs={12} sm={6}>
                <Testimonial
                  image={t.image}
                  name={t.name}
                  quote={t.quote}
                  url={t.url}
                />
              </Col>
            );
            for (let ct = 0; ct < testimonials.length; ct += 2) {
              rows.push((
                <Row key={`row-${ct}`}>
                  {wrapped(testimonials[ct])}
                  {ct + 1 < testimonials.length && wrapped(testimonials[ct + 1])}
                </Row>
              ));
            }
            return rows;
          }}
        />
      </Row>
    </Container>
  );
};
