import { Cloud, Shield, Smartphone, Printer } from 'lucide-react';

const techFeatures = [
  {
    icon: Cloud,
    title: 'Cloud Database',
    description: 'Data usaha Anda tersimpan secara terpisah dan aman melalui Cloud Database OGIPOS. Setiap tenant memiliki database tersendiri.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Autentikasi Firebase, enkripsi data, dan proteksi API memastikan data usaha Anda tetap aman dan privat.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform',
    description: 'Akses dari komputer, tablet, atau smartphone. Bisa diinstal sebagai aplikasi di perangkat Anda melalui PWA.',
  },
  {
    icon: Printer,
    title: 'Cetak Struk Thermal',
    description: 'Dukungan printer thermal Bluetooth untuk mencetak struk transaksi langsung dari perangkat kasir Anda.',
  },
];

export default function Technology() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            Teknologi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Dibangun dengan teknologi modern
          </h2>
          <p className="mt-4 text-navy-500">
            OGIPOS menggunakan teknologi terkini untuk memastikan performa, keamanan, dan keandalan sistem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-navy-100 p-6 hover:border-teal-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
