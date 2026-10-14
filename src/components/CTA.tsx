import { ArrowRight, Shield, Clock, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Mulai kelola laundry Anda{' '}
          <span className="text-teal-400">lebih profesional</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-navy-300 max-w-2xl mx-auto">
          Bergabung dengan pemilik laundry yang sudah menggunakan OGIPOS. Daftar gratis, coba semua fitur, dan rasakan kemudahan mengelola usaha laundry Anda.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Daftar Gratis Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-sm text-navy-300">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Data aman & terpisah</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-navy-300">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>Tanpa biaya langganan</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-navy-300">
            <Zap className="w-4 h-4 text-teal-400" />
            <span>Setup cepat & mudah</span>
          </div>
        </div>
      </div>
    </section>
  );
}
