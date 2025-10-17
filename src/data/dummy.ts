import type {
  Siswa,
  TransaksiKeuangan,
  TagihanSiswa,
  Staff,
  StatCard,
} from "../types";

// Data Siswa
export const dummySiswa: Siswa[] = [
  {
    id: "1",
    nis: "2021001",
    nama: "Ahmad Rizki",
    kelas: "XII-A",
    jurusan: "TKJ",
    tahun_masuk: 2021,
    status: "aktif",
    orang_tua: {
      nama_ayah: "Budi Santoso",
      nama_ibu: "Siti Aminah",
      telepon: "08123456789",
      alamat: "Jl. Merdeka No. 123, Jakarta",
    },
  },
  {
    id: "2",
    nis: "2021002",
    nama: "Sari Dewi",
    kelas: "XII-B",
    jurusan: "TKR",
    tahun_masuk: 2021,
    status: "aktif",
    orang_tua: {
      nama_ayah: "Agus Priyanto",
      nama_ibu: "Rina Sari",
      telepon: "08198765432",
      alamat: "Jl. Sudirman No. 456, Bogor",
    },
  },
  {
    id: "3",
    nis: "2020015",
    nama: "Budi Hartono",
    kelas: "Lulus",
    jurusan: "TSM",
    tahun_masuk: 2020,
    status: "lulus",
    orang_tua: {
      nama_ayah: "Hartono",
      nama_ibu: "Sri Mulyani",
      telepon: "08156789012",
      alamat: "Jl. Veteran No. 789, Depok",
    },
  },
];

// Data Transaksi Keuangan
export const dummyTransaksi: TransaksiKeuangan[] = [
  {
    id: "1",
    tanggal: new Date("2024-10-01"),
    jenis: "pemasukan",
    kategori: "SPP",
    deskripsi: "Pembayaran SPP Oktober 2024 - Ahmad Rizki",
    nominal: 500000,
    siswa_id: "1",
    created_by: "staff001",
  },
  {
    id: "2",
    tanggal: new Date("2024-10-02"),
    jenis: "pengeluaran",
    kategori: "Operasional",
    deskripsi: "Pembelian alat tulis kantor",
    nominal: 250000,
    created_by: "staff001",
  },
  {
    id: "3",
    tanggal: new Date("2024-10-03"),
    jenis: "pemasukan",
    kategori: "Seragam",
    deskripsi: "Pembayaran seragam - Sari Dewi",
    nominal: 300000,
    siswa_id: "2",
    created_by: "staff001",
  },
];

// Data Tagihan Siswa
export const dummyTagihan: TagihanSiswa[] = [
  {
    id: "1",
    siswa_id: "1",
    jenis_tagihan: "spp",
    periode: "2024-10",
    nominal: 500000,
    status: "lunas",
    tanggal_jatuh_tempo: new Date("2024-10-10"),
    tanggal_bayar: new Date("2024-10-01"),
    nominal_bayar: 500000,
  },
  {
    id: "2",
    siswa_id: "1",
    jenis_tagihan: "spp",
    periode: "2024-11",
    nominal: 500000,
    status: "belum_bayar",
    tanggal_jatuh_tempo: new Date("2024-11-10"),
    nominal_bayar: 0,
  },
  {
    id: "3",
    siswa_id: "2",
    jenis_tagihan: "seragam",
    periode: "Seragam Olahraga",
    nominal: 300000,
    status: "lunas",
    tanggal_jatuh_tempo: new Date("2024-10-15"),
    tanggal_bayar: new Date("2024-10-03"),
    nominal_bayar: 300000,
  },
];

// Data Staff
export const dummyStaff: Staff[] = [
  {
    id: "1",
    nip: "198501012010011001",
    nama: "Dr. Ahmad Susanto, M.Pd",
    jabatan: "Kepala Sekolah",
    jenis: "staff_admin",
    telepon: "08123456789",
    alamat: "Jl. Pendidikan No. 1, Jakarta",
    tanggal_masuk: new Date("2010-01-01"),
    status: "aktif",
  },
  {
    id: "2",
    nip: "198903152012012002",
    nama: "Siti Nurhaliza, S.Kom",
    jabatan: "Guru TKJ",
    jenis: "guru",
    mata_pelajaran: ["Jaringan Komputer", "Sistem Operasi"],
    telepon: "08198765432",
    alamat: "Jl. Teknologi No. 25, Bekasi",
    tanggal_masuk: new Date("2012-01-15"),
    status: "aktif",
  },
  {
    id: "3",
    nama: "Rina Sari, S.E",
    jabatan: "Staff Keuangan",
    jenis: "staff_keuangan",
    telepon: "08156789012",
    alamat: "Jl. Ekonomi No. 10, Tangerang",
    tanggal_masuk: new Date("2015-08-01"),
    status: "aktif",
  },
];

// Stats untuk Dashboard Keuangan
export const keuanganStats: StatCard[] = [
  {
    title: "Total Pemasukan Bulan Ini",
    value: "Rp 15.500.000",
    change: {
      value: 12.5,
      type: "increase",
    },
  },
  {
    title: "Total Pengeluaran Bulan Ini",
    value: "Rp 8.200.000",
    change: {
      value: 3.2,
      type: "increase",
    },
  },
  {
    title: "Saldo",
    value: "Rp 45.800.000",
    change: {
      value: 8.7,
      type: "increase",
    },
  },
  {
    title: "Tunggakan SPP",
    value: "Rp 2.500.000",
    change: {
      value: 15.3,
      type: "decrease",
    },
  },
];

// Stats untuk Dashboard Utama
export const dashboardStats: StatCard[] = [
  {
    title: "Total Siswa Aktif",
    value: "485",
    change: {
      value: 2.1,
      type: "increase",
    },
  },
  {
    title: "Total Guru & Staff",
    value: "48",
    change: {
      value: 0,
      type: "increase",
    },
  },
  {
    title: "Pemasukan Bulan Ini",
    value: "Rp 15.5M",
    change: {
      value: 12.5,
      type: "increase",
    },
  },
  {
    title: "Tingkat Kelulusan",
    value: "95.2%",
    change: {
      value: 1.8,
      type: "increase",
    },
  },
];
