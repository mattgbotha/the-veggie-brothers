import { Leaf, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-green-100">
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-green-600" />
          <span className="font-extrabold text-green-600 text-base">
            The Veggie Brothers
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/Veggiebrotherspta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-green-600 hover:text-green-800 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/veggie_brothers_pta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-green-600 hover:text-green-800 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <div className="text-gray-400 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} The Veggie Brothers
        </div>
      </div>
    </footer>
  );
}

export default Footer;
