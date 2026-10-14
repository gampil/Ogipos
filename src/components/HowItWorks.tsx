import { UserPlus, Settings, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Daftar Gratis',
    description: 'Buat akun OGIPOS dengan nama laundry Anda. Proses registrasi cepat dan mudah, langsung bisa dicoba.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Setup Cepat',
    description: 'Atur layanan laundry, harga, dan pegawai. Cloud Database Anda otomatis disiapkan tanpa konfigurasi rumit.',
  },
  {
    icon: CreditCard,
    step: '03',
    title: 'Aktivasi Lifetime',
    description: 'Setelah masa trial, aktifkan lisensi seumur hidup dengan satu kali pembayaran QRIS. Tanpa langganan.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Mulai Beroperasi',
    description: 'Gunakan OGIPOS untuk mengelola transaksi, pelanggan, stok, dan laporan. Selamanya.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            Cara Kerja
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Mulai dalam 4 langkah mudah
          </h2>
          <p className="mt-4 text-navy-500">
            Dari daftar hingga beroperasi, semua bisa dilakukan dalam hitungan menit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-navy-100"></div>
              )}
              
              <div className="text-center">
                {/* Step number & icon */}
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-100">
                    <item.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-navy-900 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.step}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
