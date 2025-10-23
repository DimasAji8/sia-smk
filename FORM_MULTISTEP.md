# Form Multi-Step Tambah Data Siswa

## Struktur Komponen

```
src/components/siswa/
├── MultiStepForm.tsx           # Main component dengan state management
└── steps/
    ├── DataDiriSiswa.tsx       # Step 1: Data diri dan alamat siswa
    ├── DataSekolahAsal.tsx     # Step 2: Informasi sekolah asal
    ├── DataOrangTua.tsx        # Step 3: Data ayah, ibu, dan alamat
    └── DataWali.tsx            # Step 4: Data wali (opsional)
```

## Halaman

- **Route**: `/siswa/tambah`
- **File**: `src/pages/siswa/tambah.tsx`
- **Akses**: Via tombol "Tambah Siswa" di `/siswa/data`

## Fitur

### ✅ Progress Stepper
- Visual indicator langkah aktif (1/4, 2/4, dst)
- Progress bar animasi
- Deskripsi setiap step

### ✅ Navigation
- Tombol "Kembali" dan "Selanjutnya"
- Tombol "Simpan Data" di step terakhir
- Tombol kembali ke halaman data siswa

### ✅ Validasi
- Field required ditandai dengan `*` merah
- Input types sesuai (date, tel, text, textarea)

### ✅ Smart Features
- **Data Orang Tua**: Checkbox "Alamat sama dengan siswa"
  - Auto-fill alamat dari data siswa
  - Disable fields saat checked
  
- **Data Wali**: Fully optional
  - Alert info bahwa data opsional

### ✅ Responsif
- Grid layout adaptif (1 kolom mobile, 2-3 kolom desktop)
- Form width optimal (max-w-5xl)

## State Management

Menggunakan `useState` untuk:
- `currentStep`: Tracking step aktif (1-4)
- `formData`: Object dengan semua field form

Data dipertahankan antar step - tidak hilang saat navigate.

## Komponen Shadcn UI yang Digunakan

- ✅ Card, CardHeader, CardContent, CardTitle, CardDescription
- ✅ Button (dengan variant outline untuk "Kembali")
- ✅ Input (text, date, tel)
- ✅ Label
- ✅ Select, SelectTrigger, SelectContent, SelectItem
- ✅ Textarea
- ✅ Progress
- ✅ Checkbox
- ✅ Alert, AlertDescription

## Cara Penggunaan

1. Klik tombol **"Tambah Siswa"** di halaman Data Siswa
2. Isi form step by step
3. Klik **"Selanjutnya"** untuk lanjut ke step berikutnya
4. Klik **"Kembali"** untuk kembali ke step sebelumnya
5. Di step terakhir, klik **"Simpan Data"**
6. Data akan di-log ke console (TODO: implement API call)

## TODO / Enhancement

- [ ] Integrate dengan API backend
- [ ] Real validation dengan react-hook-form + zod
- [ ] Loading state saat submit
- [ ] Success/error notification
- [ ] Auto-populate Kabupaten/Kecamatan based on Provinsi (API wilayah)
- [ ] Upload foto siswa
- [ ] Preview data sebelum simpan
- [ ] Draft save (simpan sebagai draft)

## Data Structure

```typescript
interface FormData {
  // Data Diri Siswa (10 fields)
  nisn, nis, jurusan, provinsi, kabupaten, kecamatan, 
  kelurahan, kodePos, rt, rw
  
  // Data Sekolah Asal (9 fields)
  jenisSekolahAsal, namaSekolahAsal, alamatSekolahAsal,
  provinsiSekolah, kabupatenSekolah, kecamatanSekolah,
  kelurahanSekolah, nomorIjazah, tanggalIjazah
  
  // Data Orang Tua (18 fields)
  namaAyah, pekerjaanAyah, pendidikanAyah, penghasilanAyah,
  namaIbu, pekerjaanIbu, pendidikanIbu, penghasilanIbu,
  alamatOrangTua, provinsiOrangTua, kabupatenOrangTua,
  kecamatanOrangTua, kelurahanOrangTua, kodePosOrangTua,
  rtOrangTua, rwOrangTua, nomorHpOrangTua, nomorTeleponRumah,
  alamatSamaDenganSiswa (boolean)
  
  // Data Wali - Optional (12 fields)
  namaWali, pekerjaanWali, alamatWali, provinsiWali,
  kabupatenWali, kecamatanWali, kelurahanWali,
  kodePosWali, rtWali, rwWali, nomorHpWali, nomorTeleponWali
}
```

**Total**: 49 fields

## Styling

- Smooth transitions antar step
- Card-based layout untuk clean appearance
- Consistent spacing dan typography
- Primary color untuk active step
- Muted color untuk inactive/disabled elements
