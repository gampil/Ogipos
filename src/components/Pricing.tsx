import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const benefits = [
    'Aplikasi kasir laundry lengkap',
    'Transaksi tanpa batas',
    'Manajemen pelanggan',
    'Manajemen layanan & harga',
    'Stok & inventori',
    'Manajemen pegawai',
    'Laporan lengkap & grafik',
    'Cetak struk thermal',
    'Akses multi-perangkat',
    'Cloud Database terpisah',
    'Dukungan teknis',
    'Update fitur selamanya',
  ];

  return (
    <section id="harga" className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            Harga
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Harga sederhana, tanpa langganan
          </h2>
          <p className="mt-4 text-navy-500">
            Bayar sekali, gunakan selamanya. Tidak ada biaya bulanan atau tahunan untuk lisensi.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border-2 border-teal-500 overflow-hidden relative">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-medium px-4 py-1.5 rounded-bl-lg">
              Terpopuler
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-navy-900">OGIPOS Laundry</h3>
                <p className="text-sm text-navy-500 mt-1">Lisensi Seumur Hidup</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-navy-400">Rp</span>
                  <span className="text-5xl font-bold text-navy-900">99.000</span>
                </div>
                <p className="mt-2 text-sm text-teal-600 font-medium">
                  Bayar sekali, langsung jadi milik Anda selamanya.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-sm text-navy-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a
                  href="/register"
                  className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-lg transition-colors"
                >
                  Coba Gratis Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#fitur"
                  className="flex items-center justify-center gap-2 w-full border border-navy-200 hover:border-teal-300 text-navy-700 hover:text-teal-700 font-semibold py-3.5 rounded-lg transition-colors"
                >
                  Lihat Demo
                </a>
              </div>
            </div>

            {/* Trial info */}
            <div className="bg-navy-50 px-6 sm:px-8 py-4 border-t border-navy-100">
              <p className="text-xs text-navy-500 text-center">
                Tersedia masa trial gratis. Tidak perlu kartu kredit untuk mendaftar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
