export default function KeuanganDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Keuangan
        </h1>
        <p className="text-muted-foreground">
          Overview keuangan sekolah dan status pembayaran siswa
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Total Pemasukan Bulan Ini</h3>
          <div className="text-2xl font-bold text-green-600">Rp 15.500.000</div>
          <p className="text-xs text-muted-foreground">
            +12.5% dari bulan lalu
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Total Pengeluaran</h3>
          <div className="text-2xl font-bold text-red-600">Rp 8.200.000</div>
          <p className="text-xs text-muted-foreground">+3.2% dari bulan lalu</p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Saldo Kas</h3>
          <div className="text-2xl font-bold">Rp 45.800.000</div>
          <p className="text-xs text-muted-foreground">+8.7% dari bulan lalu</p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Tunggakan SPP</h3>
          <div className="text-2xl font-bold text-orange-600">Rp 2.500.000</div>
          <p className="text-xs text-muted-foreground">
            -15.3% dari bulan lalu
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Aksi Cepat Keuangan</h3>
        <div className="grid gap-3 md:grid-cols-4">
          <button className="rounded-lg bg-green-600 p-4 text-left text-white hover:bg-green-700">
            <div className="font-medium">Input Pemasukan</div>
            <div className="text-sm opacity-90">SPP, pembayaran lain</div>
          </button>
          <button className="rounded-lg bg-red-600 p-4 text-left text-white hover:bg-red-700">
            <div className="font-medium">Input Pengeluaran</div>
            <div className="text-sm opacity-90">Operasional, pembelian</div>
          </button>
          <button className="rounded-lg border p-4 text-left hover:bg-accent">
            <div className="font-medium">Cek Tagihan</div>
            <div className="text-sm text-muted-foreground">
              Status SPP siswa
            </div>
          </button>
          <button className="rounded-lg border p-4 text-left hover:bg-accent">
            <div className="font-medium">Generate Laporan</div>
            <div className="text-sm text-muted-foreground">Laporan bulanan</div>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Transaksi Terkini</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <div className="font-medium">SPP Oktober - Ahmad Rizki</div>
              <div className="text-sm text-muted-foreground">01 Okt 2024</div>
            </div>
            <div className="text-green-600 font-medium">+Rp 500.000</div>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <div className="font-medium">Pembelian Alat Tulis</div>
              <div className="text-sm text-muted-foreground">02 Okt 2024</div>
            </div>
            <div className="text-red-600 font-medium">-Rp 250.000</div>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <div className="font-medium">Seragam - Sari Dewi</div>
              <div className="text-sm text-muted-foreground">03 Okt 2024</div>
            </div>
            <div className="text-green-600 font-medium">+Rp 300.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
