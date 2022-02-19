import { Row, Col, Image } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import HtmlSection from "../components/HtmlSection";
import { parseMarkdown } from "../utils/markdown";

interface AboutPageProps {
  bio: string;
}

const AboutPage = ({ bio }: AboutPageProps): React.ReactElement => {
  return (
    <PageWrapper title="About">
      <Row xs={1} lg={2}>
        <Col md={12} lg={5}>
          <div className="mb-4">
            <Image
              fluid
              className="grayscale"
              src="/images/headshot-tall.jpeg"
              alt="headshot"
            />
            <figcaption className="small text-muted">
              Photo by Rashidah De Vore
            </figcaption>
          </div>
        </Col>
        <Col md={12} lg={7}>
          <h4 className="mb-4">Biography</h4>
          <HtmlSection>{bio}</HtmlSection>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export const getStaticProps = async (): Promise<{ props: AboutPageProps }> => {
  return {
    props: {
      bio: parseMarkdown("data/bio-full.md", ["content"]).content,
    },
  };
};

export default AboutPage;
