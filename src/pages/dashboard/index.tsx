export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-base font-medium">Total Siswa</h3>
          </div>
          <div className="text-3xl font-bold">485</div>
          <p className="text-sm text-muted-foreground">Siswa aktif saat ini</p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-base font-medium">Pemasukan Bulan Ini</h3>
          </div>
          <div className="text-3xl font-bold">Rp 15.5M</div>
          <p className="text-sm text-muted-foreground">
            +12.5% dari bulan lalu
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-base font-medium">Tunggakan SPP</h3>
          </div>
          <div className="text-3xl font-bold">Rp 2.5M</div>
          <p className="text-sm text-muted-foreground">
            -15.3% dari bulan lalu
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="text-base font-medium">Staff Aktif</h3>
          </div>
          <div className="text-3xl font-bold">48</div>
          <p className="text-sm text-muted-foreground">Guru dan staff</p>
        </div>
      </div>
    </div>
  );
}
