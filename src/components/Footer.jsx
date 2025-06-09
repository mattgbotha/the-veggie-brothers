import { Leaf } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-green-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="w-7 h-7 text-green-600" />
          <span className="font-extrabold text-green-700 text-lg">
            The Veggie Brothers
          </span>
        </div>
        <div className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} The Veggie Brothers. All rights
          reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:hello@veggiebrothers.co.za"
            className="text-green-600 hover:text-green-800 transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-green-600 hover:text-green-800 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-green-600 hover:text-green-800 transition"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
