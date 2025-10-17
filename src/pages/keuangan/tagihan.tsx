export default function KeuanganTagihan() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tagihan Siswa</h1>
        <p className="text-muted-foreground">
          Kelola tagihan SPP dan pembayaran lainnya
        </p>
      </div>

      {/* Filter & Search */}
      <div className="flex gap-4 flex-wrap">
        <select className="border rounded-md p-2">
          <option value="semua">Semua Status</option>
          <option value="belum_bayar">Belum Bayar</option>
          <option value="sebagian">Sebagian</option>
          <option value="lunas">Lunas</option>
        </select>
        <select className="border rounded-md p-2">
          <option value="semua">Semua Kelas</option>
          <option value="X">Kelas X</option>
          <option value="XI">Kelas XI</option>
          <option value="XII">Kelas XII</option>
        </select>
        <input
          type="text"
          className="border rounded-md p-2 flex-1 min-w-[200px]"
          placeholder="Cari nama siswa atau NIS..."
        />
      </div>

      {/* Ringkasan */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Total Tagihan Aktif</h3>
          <div className="text-xl font-bold">Rp 25.500.000</div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Sudah Terbayar</h3>
          <div className="text-xl font-bold text-green-600">Rp 23.000.000</div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Belum Terbayar</h3>
          <div className="text-xl font-bold text-red-600">Rp 2.500.000</div>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="text-sm font-medium">Siswa Menunggak</h3>
          <div className="text-xl font-bold text-orange-600">12 siswa</div>
        </div>
      </div>

      {/* Tabel Tagihan */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Daftar Tagihan SPP</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">NIS</th>
                  <th className="text-left p-2">Nama Siswa</th>
                  <th className="text-left p-2">Kelas</th>
                  <th className="text-left p-2">Periode</th>
                  <th className="text-left p-2">Tagihan</th>
                  <th className="text-left p-2">Terbayar</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">2021001</td>
                  <td className="p-2">Ahmad Rizki</td>
                  <td className="p-2">XII-A</td>
                  <td className="p-2">Okt 2024</td>
                  <td className="p-2">Rp 500.000</td>
                  <td className="p-2 text-green-600">Rp 500.000</td>
                  <td className="p-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Lunas
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline text-sm">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">2021002</td>
                  <td className="p-2">Sari Dewi</td>
                  <td className="p-2">XII-B</td>
                  <td className="p-2">Okt 2024</td>
                  <td className="p-2">Rp 500.000</td>
                  <td className="p-2 text-orange-600">Rp 250.000</td>
                  <td className="p-2">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Sebagian
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline text-sm mr-2">
                      Bayar
                    </button>
                    <button className="text-blue-600 hover:underline text-sm">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">2021003</td>
                  <td className="p-2">Budi Hartono</td>
                  <td className="p-2">XI-A</td>
                  <td className="p-2">Okt 2024</td>
                  <td className="p-2">Rp 500.000</td>
                  <td className="p-2 text-red-600">Rp 0</td>
                  <td className="p-2">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                      Belum Bayar
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline text-sm mr-2">
                      Bayar
                    </button>
                    <button className="text-blue-600 hover:underline text-sm">
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-lg font-medium mb-4">Aksi Cepat</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <button className="rounded-lg bg-blue-600 p-4 text-left text-white hover:bg-blue-700">
            <div className="font-medium">Generate Tagihan Bulanan</div>
            <div className="text-sm opacity-90">
              Buat tagihan SPP bulan baru
            </div>
          </button>
          <button className="rounded-lg border p-4 text-left hover:bg-accent">
            <div className="font-medium">Kirim Reminder</div>
            <div className="text-sm text-muted-foreground">
              Notifikasi siswa menunggak
            </div>
          </button>
          <button className="rounded-lg border p-4 text-left hover:bg-accent">
            <div className="font-medium">Export Data</div>
            <div className="text-sm text-muted-foreground">
              Download laporan tagihan
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
