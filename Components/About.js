import UserClass from "./UserClass";
import Header from "./Header";
const About = () => {
  return (
    <>
      <div className="about-container max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>
        <p className="about-description text-lg text-gray-600 mb-8">
          Welcome to Swiggy-Clone! We are committed to delivering the best food
          services with a focus on quality, efficiency, and customer
          satisfaction.
        </p>

        <div className="contact-section bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Contact Us
          </h2>
          <UserClass email={"support@swiggyclone.com"} />
        </div>
      </div>
    </>
  );
};

export default About;
