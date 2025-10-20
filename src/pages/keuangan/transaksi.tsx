import { useState } from "react";

export default function KeuanganTransaksi() {
  const [jenisTransaksi, setJenisTransaksi] = useState("pemasukan");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Input Transaksi Keuangan
        </h1>
        <p className="text-muted-foreground">
          Catat pemasukan dan pengeluaran sekolah
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Form Input */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-medium mb-4">Tambah Transaksi Baru</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-base font-medium mb-2">
                Jenis Transaksi
              </label>
              <select
                className="w-full border rounded-md p-3 text-base"
                value={jenisTransaksi}
                onChange={(e) => setJenisTransaksi(e.target.value)}
              >
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-medium mb-2">Kategori</label>
              <select className="w-full border rounded-md p-3 text-base">
                {jenisTransaksi === "pemasukan" ? (
                  <>
                    <option value="spp">SPP</option>
                    <option value="seragam">Seragam</option>
                    <option value="buku">Buku</option>
                    <option value="kegiatan">Kegiatan</option>
                    <option value="lainnya">Lainnya</option>
                  </>
                ) : (
                  <>
                    <option value="operasional">Operasional</option>
                    <option value="gaji">Gaji</option>
                    <option value="pemeliharaan">Pemeliharaan</option>
                    <option value="kegiatan">Kegiatan</option>
                    <option value="lainnya">Lainnya</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-base font-medium mb-2">Nominal</label>
              <input
                type="number"
                className="w-full border rounded-md p-3 text-base"
                placeholder="Masukkan nominal"
              />
            </div>

            <div>
              <label className="block text-base font-medium mb-2">
                Deskripsi
              </label>
              <textarea
                className="w-full border rounded-md p-3 text-base"
                rows={3}
                placeholder="Deskripsi transaksi"
              />
            </div>

            {jenisTransaksi === "pemasukan" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Siswa (Opsional)
                </label>
                <select className="w-full border rounded-md p-2">
                  <option value="">Pilih siswa (jika berlaku)</option>
                  <option value="1">Ahmad Rizki - XII-A</option>
                  <option value="2">Sari Dewi - XII-B</option>
                  <option value="3">Budi Hartono - XI-A</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Tanggal</label>
              <input
                type="date"
                className="w-full border rounded-md p-2"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-md p-2 text-white font-medium ${
                jenisTransaksi === "pemasukan"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Simpan Transaksi
            </button>
          </form>
        </div>

        {/* Preview/Recent */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="text-lg font-medium mb-4">Transaksi Hari Ini</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <div className="font-medium">SPP Oktober - Ahmad Rizki</div>
                <div className="text-sm text-muted-foreground">15:30</div>
              </div>
              <div className="text-green-600 font-medium">+Rp 500.000</div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <div className="font-medium">Pembelian Alat Tulis</div>
                <div className="text-sm text-muted-foreground">14:15</div>
              </div>
              <div className="text-red-600 font-medium">-Rp 150.000</div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <div className="font-medium">Seragam - Sari Dewi</div>
                <div className="text-sm text-muted-foreground">13:45</div>
              </div>
              <div className="text-green-600 font-medium">+Rp 300.000</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span>Total Pemasukan Hari Ini:</span>
              <span className="text-green-600 font-medium">Rp 800.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Pengeluaran Hari Ini:</span>
              <span className="text-red-600 font-medium">Rp 150.000</span>
            </div>
            <div className="flex justify-between font-medium border-t pt-2 mt-2">
              <span>Net Hari Ini:</span>
              <span className="text-green-600">+Rp 650.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
