import { Globe, Clock, Zap } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Kasir laundry lengkap.{' '}
              <span className="text-teal-600">Bayar sekali, pakai seterusnya.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-navy-500 leading-relaxed max-w-xl">
              OGIPOS Laundry adalah aplikasi kasir laundry berbasis web untuk membantu Anda mengelola transaksi, pelanggan, pegawai, stok, dan laporan. Cukup sekali pembayaran, langsung jadi milik Anda selamanya.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/register"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 px-6 py-3.5 rounded-lg transition-colors"
              >
                Coba gratis sekarang
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center text-sm font-semibold text-navy-700 border border-navy-200 hover:border-teal-300 hover:text-teal-700 px-6 py-3.5 rounded-lg transition-colors"
              >
                Lihat semua fitur
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Globe className="w-4 h-4 text-teal-600" />
                <span>Berbasis web</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Milik Anda selamanya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Zap className="w-4 h-4 text-teal-600" />
                <span>Ringan dan stabil</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
