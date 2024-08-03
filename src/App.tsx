import {
  AboutUs,
  Download,
  ExploreSection,
  Feature,
  ContactUs,
  Footer,
  Hero,
} from "./components/";

function App() {
  return (
    <>
      <Hero />
      <ExploreSection id="explore" />
      <AboutUs id="about" />
      <Feature id="feature" />
      <Download id="download" />
      <ContactUs id="contact" />
      <Footer />
    </>
  );
}

export default App;
