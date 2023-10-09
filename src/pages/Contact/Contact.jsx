import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container w-[90%] md:max-w-6xl mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-6">
              We&#39;d love to hear from you! Please feel free to get in touch
              with us using the contact information below.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-lg mb-2">
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="bg-black text-white text-lg py-2 px-4 rounded-lg hover:bg-black transition-colors"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
