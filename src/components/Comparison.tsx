import { Check, X } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    { feature: 'Biaya lisensi', ogipos: 'Rp 99.000 sekali bayar', others: 'Rp 100rb - 300rb/bulan' },
    { feature: 'Total 5 tahun', ogipos: 'Rp 99.000', others: 'Rp 6jt - 18jt' },
    { feature: 'Berbasis web', ogipos: true, others: true },
    { feature: 'Multi-user', ogipos: true, others: true },
    { feature: 'Laporan lengkap', ogipos: true, others: true },
    { feature: 'Cetak struk thermal', ogipos: true, others: 'Tergantung paket' },
    { feature: 'Data terpisah per tenant', ogipos: true, others: 'Tergantung paket' },
    { feature: 'Tanpa biaya tersembunyi', ogipos: true, others: false },
    { feature: 'Update fitur selamanya', ogipos: true, others: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            Perbandingan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Mengapa OGIPOS lebih hemat?
          </h2>
          <p className="mt-4 text-navy-500">
            Bandingkan OGIPOS dengan aplikasi kasir laundry berlangganan pada umumnya.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl border border-navy-100 overflow-hidden">
          <div className="grid grid-cols-3 bg-navy-50 border-b border-navy-100">
            <div className="p-4 text-sm font-medium text-navy-600">Fitur</div>
            <div className="p-4 text-sm font-semibold text-teal-700 text-center bg-teal-50 border-l border-navy-100">OGIPOS</div>
            <div className="p-4 text-sm font-medium text-navy-600 text-center border-l border-navy-100">Aplikasi Lain</div>
          </div>
          {comparisons.map((item, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-navy-50 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50/30'}`}>
              <div className="p-4 text-sm text-navy-700">{item.feature}</div>
              <div className="p-4 text-center bg-teal-50/30 border-l border-navy-100">
                {typeof item.ogipos === 'boolean' ? (
                  item.ogipos ? (
                    <Check className="w-5 h-5 text-teal-600 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )
                ) : (
                  <span className="text-sm font-medium text-teal-700">{item.ogipos}</span>
                )}
              </div>
              <div className="p-4 text-center border-l border-navy-100">
                {typeof item.others === 'boolean' ? (
                  item.others ? (
                    <Check className="w-5 h-5 text-navy-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )
                ) : (
                  <span className="text-sm text-navy-500">{item.others}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {comparisons.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-navy-100 p-4">
              <h4 className="text-sm font-medium text-navy-900 mb-3">{item.feature}</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-teal-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-teal-600 font-medium mb-1">OGIPOS</p>
                  {typeof item.ogipos === 'boolean' ? (
                    item.ogipos ? (
                      <Check className="w-5 h-5 text-teal-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )
                  ) : (
                    <p className="text-xs font-semibold text-teal-700">{item.ogipos}</p>
                  )}
                </div>
                <div className="bg-navy-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-navy-500 font-medium mb-1">Lainnya</p>
                  {typeof item.others === 'boolean' ? (
                    item.others ? (
                      <Check className="w-5 h-5 text-navy-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    )
                  ) : (
                    <p className="text-xs text-navy-600">{item.others}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
