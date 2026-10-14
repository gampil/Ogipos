import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">OGIPOS</span>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed max-w-xs">
              Aplikasi kasir laundry berbasis web dengan lisensi sekali bayar. Kelola usaha laundry Anda dengan mudah dan profesional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              <li><a href="#fitur" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Fitur</a></li>
              <li><a href="#kalkulator" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Bandingkan Biaya</a></li>
              <li><a href="#harga" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Harga</a></li>
              <li><a href="#faq" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Produk</h4>
            <ul className="space-y-2.5">
              <li><a href="/register" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Coba Gratis</a></li>
              <li><a href="/login" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Masuk</a></li>
              <li><a href="#fitur" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Dashboard Owner</a></li>
              <li><a href="#fitur" className="text-sm text-navy-300 hover:text-teal-400 transition-colors">Kasir</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" />
                <span className="text-sm text-navy-300">info@ogipos.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500" />
                <span className="text-sm text-navy-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5" />
                <span className="text-sm text-navy-300">Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            Copyright 2026 OGIPOS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-navy-400 hover:text-teal-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs text-navy-400 hover:text-teal-400 transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
