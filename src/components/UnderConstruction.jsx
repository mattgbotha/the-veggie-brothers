import { Leaf } from "lucide-react";

function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 relative overflow-hidden">
      {/* Animated Icon */}
      <div className="mb-6">
        <Leaf className="w-16 h-16 text-green-600 animate-bounce" />
      </div>
      {/* Text */}
      <h1 className="text-3xl font-extrabold text-green-700 mb-2">
        Page Under Construction
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        We're working hard to bring you something fresh! Please check back soon.
      </p>
      {/* Go Home Button */}
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
      {/* Green Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill="#22c55e"
        />
      </svg>
    </div>
  );
}

export default UnderConstruction;
