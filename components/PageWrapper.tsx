import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageWrapperProps {
  title: string;
  exact?: boolean;
  description: string;
  children: any;
}

const PageWrapper = ({
  title,
  exact,
  description,
  children,
}: PageWrapperProps) => {
  if (!exact) {
    title += " - Joshua Cerdenia, Composer";
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://music.cerdenia.com/images/headshot-wide-bw.jpeg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://music.cerdenia.com/images/headshot-wide-bw.jpeg"
        />
        <link rel="icon" href="music-note.svg" />
        <title>{title}</title>
      </Head>
      <NavBar />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default PageWrapper;
