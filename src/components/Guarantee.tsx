import { ShieldCheck, RefreshCw, Headphones, Lock } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Lisensi Selamanya',
    description: 'Bayar sekali, gunakan selamanya. Tidak ada biaya lisensi bulanan atau tahunan.',
  },
  {
    icon: RefreshCw,
    title: 'Update Fitur',
    description: 'Dapatkan update fitur baru secara gratis tanpa biaya tambahan.',
  },
  {
    icon: Headphones,
    title: 'Dukungan Teknis',
    description: 'Tim support siap membantu jika Anda mengalami kendala teknis.',
  },
  {
    icon: Lock,
    title: 'Data Aman',
    description: 'Data tersimpan terpisah per tenant dengan keamanan tingkat enterprise.',
  },
];

export default function Guarantee() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-navy-900">
            Jaminan OGIPOS untuk Anda
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.title}</h4>
              <p className="text-xs text-navy-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
