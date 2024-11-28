import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-red-200 to-red-50 text-center">
      <div className="error-emoji text-6xl mb-6 animate-bounce">😔</div>
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Something Went Wrong
      </h1>
      <h2 className="text-2xl font-medium text-red-500 mb-4">
        {err.status}: {err.statusText}
      </h2>
      <p className="text-lg text-gray-600">
        We're sorry for the inconvenience. Please refresh the page or try again
        later.
      </p>
    </div>
  );
};

export default Error;
