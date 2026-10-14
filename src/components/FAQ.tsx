import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Apakah ada biaya bulanan?',
    answer: 'Tidak. OGIPOS menggunakan sistem lisensi sekali bayar. Anda cukup membayar satu kali dan bisa menggunakan aplikasi selamanya tanpa biaya langganan bulanan atau tahunan untuk lisensi.',
  },
  {
    question: 'Apakah tersedia masa trial?',
    answer: 'Ya, OGIPOS menyediakan masa trial gratis yang bisa Anda gunakan untuk mencoba seluruh fitur aplikasi sebelum memutuskan untuk membeli lisensi lifetime.',
  },
  {
    question: 'Apakah mendukung multi-user?',
    answer: 'Ya. OGIPOS mendukung multi-user dengan sistem role. Anda bisa menambahkan akun kasir dan pegawai dengan hak akses yang berbeda sesuai kebutuhan.',
  },
  {
    question: 'Apakah bisa digunakan di HP?',
    answer: 'Ya. OGIPOS berbasis web dan responsif, sehingga bisa digunakan di smartphone, tablet, maupun komputer. Aplikasi juga bisa diinstal sebagai Progressive Web App (PWA) di perangkat Anda.',
  },
  {
    question: 'Apakah data aman?',
    answer: 'Data usaha Anda tersimpan secara terpisah melalui Cloud Database OGIPOS. Setiap tenant memiliki database tersendiri sehingga data tidak tercampur. Sistem kami menggunakan autentikasi Firebase dan enkripsi untuk menjaga keamanan data.',
  },
  {
    question: 'Bagaimana aktivasi lifetime?',
    answer: 'Setelah masa trial, Anda bisa melakukan aktivasi lifetime melalui halaman Lisensi & Aktivasi di dashboard owner. Pembayaran dilakukan melalui QRIS. Setelah pembayaran berhasil, lisensi lifetime langsung aktif secara otomatis.',
  },
  {
    question: 'Apakah mendukung printer Bluetooth?',
    answer: 'Ya. OGIPOS mendukung pencetakan struk melalui printer thermal Bluetooth menggunakan Web Bluetooth API pada browser Google Chrome di perangkat yang kompatibel.',
  },
  {
    question: 'Apakah ada biaya hosting?',
    answer: 'OGIPOS adalah aplikasi berbasis web yang di-hosting oleh tim kami. Anda tidak perlu memikirkan biaya hosting atau server. Cukup fokus menjalankan usaha laundry Anda.',
  },
  {
    question: 'Apakah lisensi berlaku selamanya?',
    answer: 'Ya. Setelah Anda mengaktifkan lisensi lifetime, Anda bisa menggunakan OGIPOS selamanya tanpa ada biaya lisensi tambahan. Tidak ada tagihan bulanan atau tahunan untuk lisensi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p className="mt-4 text-navy-500">
            Temukan jawaban atas pertanyaan umum tentang OGIPOS Laundry.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-navy-100 rounded-xl overflow-hidden transition-colors hover:border-teal-200"
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base font-medium text-navy-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm text-navy-500 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
