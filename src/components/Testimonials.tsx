import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    business: 'Laundry Bersih Jaya',
    location: 'Surabaya',
    text: 'Sejak pakai OGIPOS, pengelolaan laundry jadi jauh lebih rapi. Laporan harian otomatis, tidak perlu catat manual lagi. Yang paling penting, bayar sekali saja.',
    rating: 5,
  },
  {
    name: 'Siti Rahayu',
    business: 'Quick Clean Laundry',
    location: 'Bandung',
    text: 'Awalnya ragu karena harganya murah. Tapi setelah coba, fiturnya lengkap. Kasir cepat, laporan owner jelas, dan pelanggan juga senang karena struknya rapi.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    business: 'Fresh Laundry',
    location: 'Jakarta',
    text: 'Saya bandingkan dengan aplikasi lain yang langganan 150rb per bulan. Dalam 3 tahun sudah habis 5,4 juta. OGIPOS cukup 99 ribu sekali bayar. Jelas lebih hemat.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            Testimoni
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Dipercaya pemilik laundry di Indonesia
          </h2>
          <p className="mt-4 text-navy-500">
            Lihat apa kata mereka yang sudah menggunakan OGIPOS untuk mengelola usaha laundry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-navy-100 p-6 hover:border-teal-200 transition-colors"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-navy-600 leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-teal-700">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">{item.name}</p>
                  <p className="text-xs text-navy-400">{item.business} - {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Laundry terdaftar' },
            { value: '50.000+', label: 'Transaksi diproses' },
            { value: '99.9%', label: 'Uptime sistem' },
            { value: '4.9/5', label: 'Rating pengguna' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-teal-600">{stat.value}</p>
              <p className="text-sm text-navy-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
