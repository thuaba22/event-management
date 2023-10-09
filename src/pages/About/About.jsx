import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container  max-w-6xl mx-auto my-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our website! We are dedicated to providing high-quality
          products and services to our customers.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to make a positive impact in the lives of our customers
          by delivering exceptional products and experiences.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-lg mb-6">
          <li>We prioritize customer satisfaction above all else.</li>
          <li>We believe in innovation and continuous improvement.</li>
          <li>We are committed to environmental sustainability.</li>
          <li>We value diversity and inclusivity in our team.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-lg mb-6">
          Since our establishment in 2000, we have grown and evolved, thanks to
          the support of our loyal customers. Our journey has been marked by
          milestones and achievements, and we look forward to many more years of
          serving you.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">
          If you have any questions or feedback, please don&#39;t hesitate to
          reach out to us. We value your input and are always here to assist
          you.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
