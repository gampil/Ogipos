import { useState, useMemo } from 'react';
import { Calculator as CalculatorIcon, TrendingDown, ArrowRight } from 'lucide-react';

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export default function Calculator() {
  const [monthlyCost, setMonthlyCost] = useState(150000);
  const [years, setYears] = useState(5);
  const ogiposLifetime = 99000;

  const calculations = useMemo(() => {
    const subscriptionTotal = monthlyCost * 12 * years;
    const savings = subscriptionTotal - ogiposLifetime;
    const savingsPercentage = Math.round((savings / subscriptionTotal) * 100);
    return { subscriptionTotal, savings, savingsPercentage };
  }, [monthlyCost, years]);

  return (
    <section id="kalkulator" className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <CalculatorIcon className="w-3.5 h-3.5" />
            Kalkulator Penghematan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Berapa biaya aplikasi Anda dalam 5 tahun?
          </h2>
          <p className="mt-4 text-navy-500">
            Bandingkan biaya langganan aplikasi lain dengan OGIPOS yang cukup bayar sekali saja.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Biaya langganan per bulan
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-navy-400">Rp</span>
                    <input
                      type="number"
                      value={monthlyCost}
                      onChange={(e) => setMonthlyCost(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg text-navy-900 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      min="0"
                      step="10000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Periode penggunaan: <span className="text-teal-600 font-bold">{years} tahun</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-navy-400">1 tahun</span>
                    <span className="text-xs text-navy-400">10 tahun</span>
                  </div>
                </div>

                {/* Subscription cost */}
                <div className="bg-navy-50 rounded-lg p-4 border border-navy-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-600">Total biaya langganan {years} tahun</span>
                    <span className="text-lg font-bold text-navy-900">
                      {formatRupiah(calculations.subscriptionTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Result Section */}
              <div className="flex flex-col justify-center">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-700">Potensi Penghematan</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-navy-500">Biaya langganan</span>
                      <span className="text-sm font-medium text-navy-700 line-through">
                        {formatRupiah(calculations.subscriptionTotal)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-navy-500">OGIPOS Lifetime</span>
                      <span className="text-sm font-medium text-teal-700">
                        {formatRupiah(ogiposLifetime)}
                      </span>
                    </div>
                    <div className="border-t border-teal-200 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-navy-900">Hemat hingga</span>
                        <span className="text-xl font-bold text-teal-600">
                          {formatRupiah(calculations.savings)}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 text-teal-600" />
                        <span className="text-xs text-teal-700 font-medium">
                          {calculations.savingsPercentage}% lebih hemat
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-navy-400 leading-relaxed">
                  * Perbandingan merupakan estimasi biaya lisensi aplikasi. Belum termasuk kemungkinan biaya hosting, maintenance, atau layanan pendukung lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
