import type { ReactNode } from "react";

// Types untuk Sistem Akademik SMK

// User & Authentication
export interface User {
  id: string;
  nama: string;
  email: string;
  role: "admin" | "guru" | "staff_keuangan" | "kepala_sekolah";
  avatar?: string;
}

// Siswa
export interface Siswa {
  id: string;
  nis: string;
  nama: string;
  kelas: string;
  jurusan: string;
  tahun_masuk: number;
  status: "aktif" | "lulus" | "dropout";
  orang_tua: {
    nama_ayah: string;
    nama_ibu: string;
    telepon: string;
    alamat: string;
  };
}

// Keuangan
export interface TransaksiKeuangan {
  id: string;
  tanggal: Date;
  jenis: "pemasukan" | "pengeluaran";
  kategori: string;
  deskripsi: string;
  nominal: number;
  siswa_id?: string;
  created_by: string;
  bukti?: string;
}

export interface TagihanSiswa {
  id: string;
  siswa_id: string;
  jenis_tagihan: "spp" | "seragam" | "buku" | "kegiatan" | "lainnya";
  periode: string; // YYYY-MM untuk SPP, atau deskripsi untuk yang lain
  nominal: number;
  status: "belum_bayar" | "sebagian" | "lunas";
  tanggal_jatuh_tempo: Date;
  tanggal_bayar?: Date;
  nominal_bayar: number;
}

// Staff & Guru
export interface Staff {
  id: string;
  nip?: string;
  nama: string;
  jabatan: string;
  jenis: "guru" | "staff_admin" | "staff_keuangan";
  mata_pelajaran?: string[];
  telepon: string;
  alamat: string;
  tanggal_masuk: Date;
  status: "aktif" | "cuti" | "resign";
}

// Akademik
export interface MataPelajaran {
  id: string;
  kode: string;
  nama: string;
  jurusan: string[];
  jam_per_minggu: number;
}

export interface Kelas {
  id: string;
  nama: string;
  jurusan: string;
  tingkat: 10 | 11 | 12;
  tahun_ajaran: string;
  wali_kelas: string;
  siswa_ids: string[];
}

// Dashboard Stats
export interface StatCard {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon?: ReactNode;
}

// Navigation
export interface MenuItem {
  title: string;
  href: string;
  icon?: ReactNode;
  badge?: string | number;
  children?: MenuItem[];
}
