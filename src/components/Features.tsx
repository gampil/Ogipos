import { BarChart3, Users, TrendingUp, Calendar, PieChart, ArrowUpRight, ShoppingBag } from 'lucide-react';

export default function Features() {
  return (
    <section id="fitur" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Owner Features */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              Dashboard Owner
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
              Laporan lengkap untuk pemilik
            </h2>
            <p className="mt-4 text-navy-500">
              Pantau performa usaha Anda dari satu dashboard. Lihat pendapatan, transaksi, pelanggan, dan layanan terlaris secara real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <div className="bg-white rounded-xl p-5 border border-navy-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-navy-900">Ringkasan Laporan</h4>
                    <div className="flex items-center gap-1 text-xs text-navy-400 bg-navy-50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span>Jan 2026</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-xs text-teal-600 mb-1">Total Pendapatan</p>
                      <p className="text-lg font-bold text-navy-900">Rp 45.2jt</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-600 mb-1">Total Transaksi</p>
                      <p className="text-lg font-bold text-navy-900">642</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs text-purple-600 mb-1">Rata-rata Transaksi</p>
                      <p className="text-lg font-bold text-navy-900">Rp 70.400</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="text-xs text-amber-600 mb-1">Pelanggan Baru</p>
                      <p className="text-lg font-bold text-navy-900">28</p>
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="border-t border-navy-100 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-navy-700">Pendapatan Bulanan</span>
                      <div className="flex items-center gap-1 text-xs text-teal-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8.5%</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      {[30, 45, 38, 55, 42, 68, 52, 75, 60, 82, 70, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-teal-400 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>

                  {/* Top services */}
                  <div className="border-t border-navy-100 pt-4 mt-4">
                    <span className="text-xs font-medium text-navy-700 mb-2 block">Layanan Terlaris</span>
                    <div className="space-y-2">
                      {[
                        { name: 'Cuci Setrika Reguler', pct: 85 },
                        { name: 'Cuci Setrika Express', pct: 60 },
                        { name: 'Dry Cleaning', pct: 35 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-xs text-navy-600 w-36 truncate">{item.name}</span>
                          <div className="flex-1 h-2 bg-navy-100 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500 rounded-full" style={{ width: `${item.pct}%` }}></div>
                          </div>
                          <span className="text-xs text-navy-400 w-8 text-right">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="order-1 lg:order-2 space-y-4">
              {[
                { icon: BarChart3, title: 'Total Pendapatan', desc: 'Lihat total pendapatan harian, mingguan, dan bulanan dengan grafik interaktif.' },
                { icon: Users, title: 'Data Pelanggan', desc: 'Kelola database pelanggan, riwayat transaksi, dan program loyalitas.' },
                { icon: PieChart, title: 'Layanan Terlaris', desc: 'Identifikasi layanan paling diminati untuk optimasi bisnis Anda.' },
                { icon: Calendar, title: 'Filter Tanggal', desc: 'Analisis laporan berdasarkan periode tertentu dengan mudah.' },
                { icon: ArrowUpRight, title: 'Tren Pertumbuhan', desc: 'Pantau pertumbuhan usaha dan buat keputusan berbasis data.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg border border-navy-100 hover:border-teal-200 transition-colors">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">{feature.title}</h4>
                    <p className="text-sm text-navy-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cashier Features */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              Kasir
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
              Kasir yang cepat dan mudah
            </h2>
            <p className="mt-4 text-navy-500">
              Proses transaksi dengan cepat. Cari pelanggan, pilih layanan, hitung otomatis, dan cetak struk dalam hitungan detik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Features list */}
            <div className="space-y-4">
              {[
                { title: 'Pencarian Pelanggan', desc: 'Cari pelanggan berdasarkan nama atau nomor telepon dengan cepat.' },
                { title: 'Pilih Layanan & Berat', desc: 'Tambahkan layanan laundry dengan input berat atau jumlah satuan.' },
                { title: 'Kalkulasi Otomatis', desc: 'Subtotal, diskon, dan total dihitung secara real-time.' },
                { title: 'Pembayaran & Kembalian', desc: 'Input pembayaran dan lihat kembalian secara instan.' },
                { title: 'Cetak Struk', desc: 'Cetak struk transaksi melalui printer thermal atau browser.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg border border-navy-100 hover:border-teal-200 transition-colors">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-teal-600">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">{feature.title}</h4>
                    <p className="text-sm text-navy-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cashier Preview */}
            <div>
              <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
                  {/* Cashier header */}
                  <div className="bg-navy-900 px-4 py-3">
                    <span className="text-sm font-medium text-white">Transaksi Baru</span>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {/* Search customer */}
                    <div className="flex items-center gap-2 bg-navy-50 rounded-lg px-3 py-2 border border-navy-100">
                      <div className="w-4 h-4 bg-navy-200 rounded"></div>
                      <span className="text-xs text-navy-400">Cari pelanggan...</span>
                    </div>

                    {/* Items */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-teal-50 rounded-lg border border-teal-100">
                        <div>
                          <p className="text-xs font-medium text-navy-900">Cuci Setrika Reguler</p>
                          <p className="text-xs text-navy-400">5 kg x Rp 7.000</p>
                        </div>
                        <span className="text-xs font-semibold text-navy-900">Rp 35.000</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-navy-50 rounded-lg border border-navy-100">
                        <div>
                          <p className="text-xs font-medium text-navy-900">Dry Cleaning</p>
                          <p className="text-xs text-navy-400">2 pcs x Rp 15.000</p>
                        </div>
                        <span className="text-xs font-semibold text-navy-900">Rp 30.000</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="border-t border-navy-100 pt-3 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-xs text-navy-500">Subtotal</span>
                        <span className="text-xs text-navy-700">Rp 65.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-navy-500">Diskon</span>
                        <span className="text-xs text-navy-700">- Rp 5.000</span>
                      </div>
                      <div className="flex justify-between pt-1.5 border-t border-navy-100">
                        <span className="text-sm font-semibold text-navy-900">Total</span>
                        <span className="text-sm font-bold text-teal-600">Rp 60.000</span>
                      </div>
                    </div>

                    {/* Payment */}
                    <div className="flex gap-2 pt-2">
                      <div className="flex-1 bg-navy-50 rounded-lg px-3 py-2 border border-navy-100">
                        <p className="text-xs text-navy-400">Bayar</p>
                        <p className="text-sm font-semibold text-navy-900">Rp 100.000</p>
                      </div>
                      <div className="flex-1 bg-teal-50 rounded-lg px-3 py-2 border border-teal-100">
                        <p className="text-xs text-teal-600">Kembalian</p>
                        <p className="text-sm font-semibold text-teal-700">Rp 40.000</p>
                      </div>
                    </div>

                    <button className="w-full bg-teal-600 text-white text-sm font-medium py-2.5 rounded-lg">
                      Simpan & Cetak
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


