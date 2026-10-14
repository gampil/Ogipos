import { useState, useMemo } from 'react';
import { 
  Menu, X, Globe, Clock, Zap, TrendingUp, Users, ShoppingBag, DollarSign,
  BarChart3, Calendar, PieChart, ArrowUpRight, Calculator as CalculatorIcon,
  TrendingDown, ArrowRight, Check, ChevronDown, Mail, Phone, MapPin,
  Shield, Star, UserPlus, Settings, CreditCard, Rocket, Cloud, Printer,
  ShieldCheck, RefreshCw, Headphones, Lock, ArrowUp
} from 'lucide-react';

// ============ NAVBAR ============
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-slate-900">OGIPOS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Fitur</a>
            <a href="#kalkulator" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Bandingkan Biaya</a>
            <a href="#harga" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Harga</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-teal-600 px-4 py-2 transition-colors">Masuk</a>
            <a href="#" className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-lg transition-colors">Coba Gratis</a>
          </div>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a href="#fitur" className="block text-sm font-medium text-slate-600 py-2" onClick={() => setMobileOpen(false)}>Fitur</a>
            <a href="#kalkulator" className="block text-sm font-medium text-slate-600 py-2" onClick={() => setMobileOpen(false)}>Bandingkan Biaya</a>
            <a href="#harga" className="block text-sm font-medium text-slate-600 py-2" onClick={() => setMobileOpen(false)}>Harga</a>
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a href="#" className="block text-sm font-medium text-slate-700 py-2">Masuk</a>
              <a href="#" className="block text-sm font-medium text-white bg-teal-600 px-4 py-2.5 rounded-lg text-center">Coba Gratis</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Kasir laundry lengkap.{' '}
              <span className="text-teal-600">Bayar sekali, pakai seterusnya.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              OGIPOS Laundry adalah aplikasi kasir laundry berbasis web untuk membantu Anda mengelola transaksi, pelanggan, pegawai, stok, dan laporan. Cukup sekali pembayaran, langsung jadi milik Anda selamanya.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 px-6 py-3.5 rounded-lg transition-colors">
                Coba gratis sekarang
              </a>
              <a href="#fitur" className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 border border-slate-200 hover:border-teal-300 hover:text-teal-700 px-6 py-3.5 rounded-lg transition-colors">
                Lihat semua fitur
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Globe className="w-4 h-4 text-teal-600" />
                <span>Berbasis web</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Milik Anda selamanya</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Zap className="w-4 h-4 text-teal-600" />
                <span>Ringan dan stabil</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dot bg-red-400"></div>
                <div className="mockup-dot bg-yellow-400"></div>
                <div className="mockup-dot bg-green-400"></div>
                <div className="ml-4 flex-1 bg-slate-800 rounded px-3 py-1">
                  <span className="text-xs text-slate-300">app.ogipos.com/dashboard</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Dashboard Owner</h3>
                    <p className="text-xs text-slate-400">Ringkasan hari ini</p>
                  </div>
                  <div className="text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">24 Jan 2026</div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-teal-50 rounded flex items-center justify-center">
                        <DollarSign className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-xs text-slate-400">Pendapatan</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900">Rp 2.450.000</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                        <ShoppingBag className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-xs text-slate-400">Transaksi</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900">34</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-purple-50 rounded flex items-center justify-center">
                        <Users className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-xs text-slate-400">Pelanggan</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900">128</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-amber-50 rounded flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-amber-600" />
                      </div>
                      <span className="text-xs text-slate-400">Rata-rata</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900">Rp 72.000</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-700">Pendapatan 7 Hari</span>
                    <span className="text-xs text-teal-600 font-medium">+12%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-teal-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        <span className="text-[9px] text-slate-300">{['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}</span>
                      </div>
                    ))}
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

// ============ CALCULATOR ============
function Calculator() {
  const [monthlyCost, setMonthlyCost] = useState(150000);
  const [years, setYears] = useState(5);
  const ogiposLifetime = 99000;

  const calculations = useMemo(() => {
    const subscriptionTotal = monthlyCost * 12 * years;
    const savings = subscriptionTotal - ogiposLifetime;
    const savingsPercentage = Math.round((savings / subscriptionTotal) * 100);
    return { subscriptionTotal, savings, savingsPercentage };
  }, [monthlyCost, years]);

  const formatRupiah = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

  return (
    <section id="kalkulator" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <CalculatorIcon className="w-3.5 h-3.5" />
            Kalkulator Penghematan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Berapa biaya aplikasi Anda dalam 5 tahun?
          </h2>
          <p className="mt-4 text-slate-500">
            Bandingkan biaya langganan aplikasi lain dengan OGIPOS yang cukup bayar sekali saja.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Biaya langganan per bulan</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">Rp</span>
                    <input
                      type="number"
                      value={monthlyCost}
                      onChange={(e) => setMonthlyCost(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      min="0"
                      step="10000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Periode penggunaan: <span className="text-teal-600 font-bold">{years} tahun</span>
                  </label>
                  <input type="range" min="1" max="10" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-400">1 tahun</span>
                    <span className="text-xs text-slate-400">10 tahun</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Total biaya langganan {years} tahun</span>
                    <span className="text-lg font-bold text-slate-900">{formatRupiah(calculations.subscriptionTotal)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-700">Potensi Penghematan</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Biaya langganan</span>
                      <span className="text-sm font-medium text-slate-700 line-through">{formatRupiah(calculations.subscriptionTotal)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">OGIPOS Lifetime</span>
                      <span className="text-sm font-medium text-teal-700">{formatRupiah(ogiposLifetime)}</span>
                    </div>
                    <div className="border-t border-teal-200 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900">Hemat hingga</span>
                        <span className="text-xl font-bold text-teal-600">{formatRupiah(calculations.savings)}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 text-teal-600" />
                        <span className="text-xs text-teal-700 font-medium">{calculations.savingsPercentage}% lebih hemat</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
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

// ============ PRICING ============
function Pricing() {
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
    <section id="harga" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">Harga</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Harga sederhana, tanpa langganan</h2>
          <p className="mt-4 text-slate-500">Bayar sekali, gunakan selamanya. Tidak ada biaya bulanan atau tahunan untuk lisensi.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border-2 border-teal-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-medium px-4 py-1.5 rounded-bl-lg">Terpopuler</div>
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-slate-900">OGIPOS Laundry</h3>
                <p className="text-sm text-slate-500 mt-1">Lisensi Seumur Hidup</p>
              </div>
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-slate-400">Rp</span>
                  <span className="text-5xl font-bold text-slate-900">99.000</span>
                </div>
                <p className="mt-2 text-sm text-teal-600 font-medium">Bayar sekali, langsung jadi milik Anda selamanya.</p>
              </div>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-sm text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-lg transition-colors">
                  Coba Gratis Sekarang <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#fitur" className="flex items-center justify-center gap-2 w-full border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700 font-semibold py-3.5 rounded-lg transition-colors">
                  Lihat Demo
                </a>
              </div>
            </div>
            <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">Tersedia masa trial gratis. Tidak perlu kartu kredit untuk mendaftar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = [
    { question: 'Apakah ada biaya bulanan?', answer: 'Tidak. OGIPOS menggunakan sistem lisensi sekali bayar. Anda cukup membayar satu kali dan bisa menggunakan aplikasi selamanya tanpa biaya langganan bulanan atau tahunan untuk lisensi.' },
    { question: 'Apakah tersedia masa trial?', answer: 'Ya, OGIPOS menyediakan masa trial gratis yang bisa Anda gunakan untuk mencoba seluruh fitur aplikasi sebelum memutuskan untuk membeli lisensi lifetime.' },
    { question: 'Apakah mendukung multi-user?', answer: 'Ya. OGIPOS mendukung multi-user dengan sistem role. Anda bisa menambahkan akun kasir dan pegawai dengan hak akses yang berbeda sesuai kebutuhan.' },
    { question: 'Apakah bisa digunakan di HP?', answer: 'Ya. OGIPOS berbasis web dan responsif, sehingga bisa digunakan di smartphone, tablet, maupun komputer. Aplikasi juga bisa diinstal sebagai Progressive Web App (PWA).' },
    { question: 'Apakah data aman?', answer: 'Data usaha Anda tersimpan secara terpisah melalui Cloud Database OGIPOS. Setiap tenant memiliki database tersendiri sehingga data tidak tercampur.' },
    { question: 'Bagaimana aktivasi lifetime?', answer: 'Setelah masa trial, Anda bisa melakukan aktivasi lifetime melalui halaman Lisensi & Aktivasi di dashboard owner. Pembayaran dilakukan melalui QRIS.' },
    { question: 'Apakah mendukung printer Bluetooth?', answer: 'Ya. OGIPOS mendukung pencetakan struk melalui printer thermal Bluetooth menggunakan Web Bluetooth API pada browser Google Chrome.' },
    { question: 'Apakah ada biaya hosting?', answer: 'OGIPOS adalah aplikasi berbasis web yang di-hosting oleh tim kami. Anda tidak perlu memikirkan biaya hosting atau server.' },
    { question: 'Apakah lisensi berlaku selamanya?', answer: 'Ya. Setelah Anda mengaktifkan lisensi lifetime, Anda bisa menggunakan OGIPOS selamanya tanpa ada biaya lisensi tambahan.' },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">FAQ</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Pertanyaan yang sering ditanyakan</h2>
          <p className="mt-4 text-slate-500">Temukan jawaban atas pertanyaan umum tentang OGIPOS Laundry.</p>
        </div>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors">
              <button className="w-full flex items-center justify-between p-4 sm:p-5 text-left" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span className="text-sm sm:text-base font-medium text-slate-900 pr-4">{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm text-slate-500 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">OGIPOS</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              Aplikasi kasir laundry berbasis web dengan lisensi sekali bayar. Kelola usaha laundry Anda dengan mudah dan profesional.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              <li><a href="#fitur" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Fitur</a></li>
              <li><a href="#kalkulator" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Bandingkan Biaya</a></li>
              <li><a href="#harga" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Harga</a></li>
              <li><a href="#faq" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Produk</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Coba Gratis</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Masuk</a></li>
              <li><a href="#fitur" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Dashboard Owner</a></li>
              <li><a href="#fitur" className="text-sm text-slate-300 hover:text-teal-400 transition-colors">Kasir</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-500" /><span className="text-sm text-slate-300">info@ogipos.com</span></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-500" /><span className="text-sm text-slate-300">+62 812-3456-7890</span></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-teal-500 mt-0.5" /><span className="text-sm text-slate-300">Indonesia</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">Copyright 2026 OGIPOS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-teal-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-xs text-slate-400 hover:text-teal-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const steps = [
    { icon: UserPlus, step: '01', title: 'Daftar Gratis', description: 'Buat akun OGIPOS dengan nama laundry Anda. Proses registrasi cepat dan mudah.' },
    { icon: Settings, step: '02', title: 'Setup Cepat', description: 'Atur layanan laundry, harga, dan pegawai. Cloud Database otomatis disiapkan.' },
    { icon: CreditCard, step: '03', title: 'Aktivasi Lifetime', description: 'Setelah masa trial, aktifkan lisensi seumur hidup dengan satu kali pembayaran QRIS.' },
    { icon: Rocket, step: '04', title: 'Mulai Beroperasi', description: 'Gunakan OGIPOS untuk mengelola transaksi, pelanggan, stok, dan laporan. Selamanya.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">Cara Kerja</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Mulai dalam 4 langkah mudah</h2>
          <p className="mt-4 text-slate-500">Dari daftar hingga beroperasi, semua bisa dilakukan dalam hitungan menit.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, i) => (
            <div key={i} className="text-center">
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{item.step}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FEATURES ============
function Features() {
  return (
    <section id="fitur" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Dashboard Owner
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Laporan lengkap untuk pemilik</h2>
          <p className="mt-4 text-slate-500">Pantau performa usaha Anda dari satu dashboard. Lihat pendapatan, transaksi, pelanggan, dan layanan terlaris secara real-time.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: BarChart3, title: 'Total Pendapatan', desc: 'Lihat total pendapatan harian, mingguan, dan bulanan dengan grafik interaktif.' },
            { icon: Users, title: 'Data Pelanggan', desc: 'Kelola database pelanggan, riwayat transaksi, dan program loyalitas.' },
            { icon: PieChart, title: 'Layanan Terlaris', desc: 'Identifikasi layanan paling diminati untuk optimasi bisnis Anda.' },
            { icon: Calendar, title: 'Filter Tanggal', desc: 'Analisis laporan berdasarkan periode tertentu dengan mudah.' },
            { icon: ArrowUpRight, title: 'Tren Pertumbuhan', desc: 'Pantau pertumbuhan usaha dan buat keputusan berbasis data.' },
            { icon: ShoppingBag, title: 'Manajemen Stok', desc: 'Kelola inventori deterjen, pewangi, dan bahan laundry lainnya.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-200 transition-colors">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const testimonials = [
    { name: 'Budi Santoso', business: 'Laundry Bersih Jaya', location: 'Surabaya', text: 'Sejak pakai OGIPOS, pengelolaan laundry jadi jauh lebih rapi. Laporan harian otomatis, tidak perlu catat manual lagi. Yang paling penting, bayar sekali saja.', rating: 5 },
    { name: 'Siti Rahayu', business: 'Quick Clean Laundry', location: 'Bandung', text: 'Awalnya ragu karena harganya murah. Tapi setelah coba, fiturnya lengkap. Kasir cepat, laporan owner jelas, dan pelanggan juga senang karena struknya rapi.', rating: 5 },
    { name: 'Ahmad Fauzi', business: 'Fresh Laundry', location: 'Jakarta', text: 'Saya bandingkan dengan aplikasi lain yang langganan 150rb per bulan. Dalam 3 tahun sudah habis 5,4 juta. OGIPOS cukup 99 ribu sekali bayar. Jelas lebih hemat.', rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">Testimoni</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Dipercaya pemilik laundry di Indonesia</h2>
          <p className="mt-4 text-slate-500">Lihat apa kata mereka yang sudah menggunakan OGIPOS untuk mengelola usaha laundry.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-200 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-teal-700">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.business} - {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Mulai kelola laundry Anda <span className="text-teal-400">lebih profesional</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Bergabung dengan pemilik laundry yang sudah menggunakan OGIPOS. Daftar gratis, coba semua fitur, dan rasakan kemudahan mengelola usaha laundry Anda.
        </p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Daftar Gratis Sekarang <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Data aman & terpisah</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>Tanpa biaya langganan</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Zap className="w-4 h-4 text-teal-400" />
            <span>Setup cepat & mudah</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ APP ============
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Calculator />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
