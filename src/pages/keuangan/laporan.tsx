export default function KeuanganLaporan() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Laporan Keuangan</h1>
        <p className="text-muted-foreground">
          Generate dan lihat laporan keuangan sekolah
        </p>
      </div>

      {/* Filter Laporan */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Filter Laporan</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Jenis Laporan
            </label>
            <select className="w-full border rounded-md p-2">
              <option value="ringkasan">Ringkasan Bulanan</option>
              <option value="detail">Detail Transaksi</option>
              <option value="kas">Arus Kas</option>
              <option value="spp">Laporan SPP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Periode</label>
            <select className="w-full border rounded-md p-2">
              <option value="2024-10">Oktober 2024</option>
              <option value="2024-09">September 2024</option>
              <option value="2024-08">Agustus 2024</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Format</label>
            <select className="w-full border rounded-md p-2">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="view">Lihat di Browser</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700">
              Generate Laporan
            </button>
          </div>
        </div>
      </div>

      {/* Ringkasan Keuangan */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-medium mb-4">Ringkasan Oktober 2024</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Pemasukan:</span>
              <span className="font-medium text-green-600">Rp 15.500.000</span>
            </div>
            <div className="flex justify-between">
              <span>Total Pengeluaran:</span>
              <span className="font-medium text-red-600">Rp 8.200.000</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-medium">Net Income:</span>
              <span className="font-bold text-green-600">Rp 7.300.000</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-medium mb-4">Breakdown Pemasukan</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>SPP:</span>
              <span>Rp 12.000.000 (77%)</span>
            </div>
            <div className="flex justify-between">
              <span>Seragam:</span>
              <span>Rp 2.500.000 (16%)</span>
            </div>
            <div className="flex justify-between">
              <span>Buku:</span>
              <span>Rp 800.000 (5%)</span>
            </div>
            <div className="flex justify-between">
              <span>Lainnya:</span>
              <span>Rp 200.000 (2%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Laporan yang Tersedia */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Laporan yang Tersedia</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-4 hover:bg-accent cursor-pointer">
            <div className="font-medium">Laporan Bulanan Oktober 2024</div>
            <div className="text-sm text-muted-foreground">
              Generated: 15 Okt 2024
            </div>
            <div className="mt-2">
              <button className="text-blue-600 hover:underline text-sm mr-4">
                Download PDF
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:bg-accent cursor-pointer">
            <div className="font-medium">Laporan SPP September 2024</div>
            <div className="text-sm text-muted-foreground">
              Generated: 30 Sep 2024
            </div>
            <div className="mt-2">
              <button className="text-blue-600 hover:underline text-sm mr-4">
                Download PDF
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:bg-accent cursor-pointer">
            <div className="font-medium">Arus Kas Q3 2024</div>
            <div className="text-sm text-muted-foreground">
              Generated: 30 Sep 2024
            </div>
            <div className="mt-2">
              <button className="text-blue-600 hover:underline text-sm mr-4">
                Download Excel
              </button>
              <button className="text-blue-600 hover:underline text-sm">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Placeholder */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Trend Keuangan</h3>
        <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-lg font-medium">Grafik Trend Keuangan</div>
            <div className="text-sm">Chart akan ditampilkan di sini</div>
            <div className="text-xs mt-2">
              (Dapat menggunakan Recharts atau Chart.js)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
