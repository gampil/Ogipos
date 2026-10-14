import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      {/* Browser chrome */}
      <div className="mockup-header">
        <div className="mockup-dot bg-red-400"></div>
        <div className="mockup-dot bg-yellow-400"></div>
        <div className="mockup-dot bg-green-400"></div>
        <div className="ml-4 flex-1 bg-navy-800 rounded px-3 py-1">
          <span className="text-xs text-navy-300">app.ogipos.com/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 sm:p-5 bg-navy-50">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Dashboard Owner</h3>
            <p className="text-xs text-navy-400">Ringkasan hari ini</p>
          </div>
          <div className="text-xs text-navy-400 bg-white px-2 py-1 rounded border border-navy-100">
            24 Jan 2026
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-navy-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-teal-50 rounded flex items-center justify-center">
                <DollarSign className="w-3 h-3 text-teal-600" />
              </div>
              <span className="text-xs text-navy-400">Pendapatan</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-navy-900">Rp 2.450.000</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-navy-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                <ShoppingBag className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-xs text-navy-400">Transaksi</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-navy-900">34</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-navy-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-purple-50 rounded flex items-center justify-center">
                <Users className="w-3 h-3 text-purple-600" />
              </div>
              <span className="text-xs text-navy-400">Pelanggan</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-navy-900">128</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-navy-100">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-amber-50 rounded flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-amber-600" />
              </div>
              <span className="text-xs text-navy-400">Rata-rata</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-navy-900">Rp 72.000</p>
          </div>
        </div>

        {/* Chart mockup */}
        <div className="bg-white rounded-lg p-3 sm:p-4 border border-navy-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-navy-700">Pendapatan 7 Hari</span>
            <span className="text-xs text-teal-600 font-medium">+12%</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-teal-500 rounded-t-sm"
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[9px] text-navy-300">
                  {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
