import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Leaf,
  Menu,
  X,
  Home as HomeIcon,
  ShoppingBag,
  Info,
  Users,
  Mail,
} from "lucide-react";

function useActiveSection(sectionIds, offset = 80) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];
    sectionIds.forEach(({ id, name }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(name);
        },
        {
          root: null,
          rootMargin: `-${offset}px 0px 0px 0px`,
          threshold: 0.2,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Home section: top of page
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

function Header({ cartCount, onCartClick, onProductsClick, onHomeClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track which section is active
  const activeSection = useActiveSection([
    { id: "product-list", name: "products" },
    { id: "how-it-works", name: "how-it-works" },
    { id: "about-us", name: "about-us" },
    { id: "contact", name: "contact" },
  ]);

  // Nav link data
  const navLinks = [
    {
      label: "Home",
      href: "#",
      icon: <HomeIcon className="w-4 h-4 mr-2" />,
      match: () => activeSection === "home",
      onClick: onHomeClick,
    },
    {
      label: "Products",
      href: "#product-list",
      icon: <ShoppingBag className="w-4 h-4 mr-2" />,
      match: () => activeSection === "products",
      onClick: onProductsClick,
    },
    {
      label: "How It Works",
      href: "#how-it-works",
      icon: <Info className="w-4 h-4 mr-2" />,
      match: () => activeSection === "how-it-works",
    },
    {
      label: "About Us",
      href: "#about-us",
      icon: <Users className="w-4 h-4 mr-2" />,
      match: () => activeSection === "about-us",
    },
    {
      label: "Contact",
      href: "#contact",
      icon: <Mail className="w-4 h-4 mr-2" />,
      match: () => activeSection === "contact",
    },
  ];

  // Render nav links (desktop & mobile)
  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => {
      const isActive = link.match();
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={
            link.onClick
              ? (e) => {
                  e.preventDefault();
                  link.onClick(e);
                  if (isMobile) setMobileOpen(false);
                }
              : isMobile
              ? () => setMobileOpen(false)
              : undefined
          }
          className={`flex items-center ${
            isMobile
              ? "text-base font-semibold px-2 py-2 rounded"
              : "px-3 py-2 rounded-lg font-semibold"
          } transition ${
            isActive
              ? "bg-green-100 text-green-700"
              : "text-gray-700 hover:text-green-700 hover:bg-green-50"
          }`}
        >
          {link.icon}
          {link.label}
        </a>
      );
    });

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700 tracking-tight leading-tight">
                <span className="text-gray-800">The </span>
                <span className="text-green-600">Veggie </span>
                <span className="text-gray-800">Brothers</span>
              </h1>
              <p className="text-sm text-emerald-700 font-medium italic">
                Farm-fresh produce, delivered to your door.
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-2 mx-8">
            {renderNavLinks(false)}
          </nav>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative ml-auto hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold cursor-pointer">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 p-2 rounded-lg hover:bg-green-50 transition"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6 text-green-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-row-reverse md:hidden">
          <div className="w-64 bg-white h-full shadow-lg flex flex-col py-6 px-6">
            <button
              className="self-end mb-6 p-2 rounded hover:bg-green-50"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6 text-green-700" />
            </button>
            <nav className="flex flex-col space-y-3">
              {renderNavLinks(true)}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;
