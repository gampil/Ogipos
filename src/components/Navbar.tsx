import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-navy-900">OGIPOS</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-navy-600 hover:text-teal-600 transition-colors">
              Fitur
            </a>
            <a href="#kalkulator" className="text-sm font-medium text-navy-600 hover:text-teal-600 transition-colors">
              Bandingkan Biaya
            </a>
            <a href="#harga" className="text-sm font-medium text-navy-600 hover:text-teal-600 transition-colors">
              Harga
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="text-sm font-medium text-navy-700 hover:text-teal-600 px-4 py-2 transition-colors"
            >
              Masuk
            </a>
            <a
              href="/register"
              className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-lg transition-colors"
            >
              Coba Gratis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-navy-100 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#fitur"
              className="block text-sm font-medium text-navy-600 hover:text-teal-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Fitur
            </a>
            <a
              href="#kalkulator"
              className="block text-sm font-medium text-navy-600 hover:text-teal-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Bandingkan Biaya
            </a>
            <a
              href="#harga"
              className="block text-sm font-medium text-navy-600 hover:text-teal-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Harga
            </a>
            <div className="pt-3 border-t border-navy-100 space-y-2">
              <a
                href="/login"
                className="block text-sm font-medium text-navy-700 py-2"
              >
                Masuk
              </a>
              <a
                href="/register"
                className="block text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Coba Gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
