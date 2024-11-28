const Contact = () => {
  return (
    <>
      <div className="contact-container max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="contact-intro text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out.
        </p>

        <div className="contact-details text-center mb-8">
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@yourapp.com"
              className="text-blue-500 hover:underline"
            >
              support@yourapp.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Food Street, Cityville, Country
          </p>
        </div>

        <form className="contact-form space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-textarea w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="form-button w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;