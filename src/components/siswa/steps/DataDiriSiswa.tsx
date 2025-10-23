import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type { FormData } from "../MultiStepForm";

interface DataDiriSiswaProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const JURUSAN_OPTIONS = [
  { value: "tkj", label: "Teknik Komputer dan Jaringan" },
  { value: "rpl", label: "Rekayasa Perangkat Lunak" },
  { value: "mm", label: "Multimedia" },
  { value: "tkr", label: "Teknik Kendaraan Ringan" },
  { value: "akl", label: "Akuntansi dan Keuangan Lembaga" },
];

const JENIS_KELAMIN_OPTIONS = [
  { value: "laki-laki", label: "Laki-laki" },
  { value: "perempuan", label: "Perempuan" },
];

const AGAMA_OPTIONS = [
  { value: "islam", label: "Islam" },
  { value: "kristen", label: "Kristen" },
  { value: "katolik", label: "Katolik" },
  { value: "hindu", label: "Hindu" },
  { value: "buddha", label: "Buddha" },
  { value: "konghucu", label: "Konghucu" },
];

const PROVINSI_OPTIONS = [
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "banten", label: "Banten" },
];

export function DataDiriSiswa({ formData, updateFormData }: DataDiriSiswaProps) {
  return (
    <div className="space-y-8">
      {/* Section: Jurusan */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-foreground border-b pb-2">
          Pilih Jurusan
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="jurusan">
            Jurusan <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.jurusan}
            onValueChange={(value) => updateFormData({ jurusan: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Jurusan" />
            </SelectTrigger>
            <SelectContent>
              {JURUSAN_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Section: Identitas */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-foreground border-b pb-2">
          Identitas Siswa
        </h3>
        
        {/* Nama Lengkap */}
        <div className="space-y-2">
          <Label htmlFor="namaLengkap">
            Nama Lengkap <span className="text-red-500">*</span>
          </Label>
          <Input
            id="namaLengkap"
            placeholder="Masukkan nama lengkap siswa"
            value={formData.namaLengkap}
            onChange={(e) => updateFormData({ namaLengkap: e.target.value })}
            required
          />
        </div>

        {/* NIK & NISN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nik">
              Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nik"
              placeholder="Masukkan NIK (16 digit)"
              value={formData.nik}
              onChange={(e) => updateFormData({ nik: e.target.value })}
              maxLength={16}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nisn">
              NISN <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nisn"
              placeholder="Masukkan NISN"
              value={formData.nisn}
              onChange={(e) => updateFormData({ nisn: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Tempat Lahir & Tanggal Lahir */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tempatLahir">
              Tempat Lahir <span className="text-red-500">*</span>
            </Label>
            <Input
              id="tempatLahir"
              placeholder="Masukkan tempat lahir"
              value={formData.tempatLahir}
              onChange={(e) => updateFormData({ tempatLahir: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tanggalLahir">
              Tanggal Lahir <span className="text-red-500">*</span>
            </Label>
            <Input
              id="tanggalLahir"
              type="date"
              value={formData.tanggalLahir}
              onChange={(e) => updateFormData({ tanggalLahir: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Jenis Kelamin & Agama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="jenisKelamin">
              Jenis Kelamin <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.jenisKelamin}
              onValueChange={(value) => updateFormData({ jenisKelamin: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Jenis Kelamin" />
              </SelectTrigger>
              <SelectContent>
                {JENIS_KELAMIN_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="agama">
              Agama <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.agama}
              onValueChange={(value) => updateFormData({ agama: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Agama" />
              </SelectTrigger>
              <SelectContent>
                {AGAMA_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Email, Nomor HP, Nomor Telepon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Alamat Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@contoh.com"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nomorHp">
              Nomor HP <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nomorHp"
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={formData.nomorHp}
              onChange={(e) => updateFormData({ nomorHp: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nomorTelepon">Nomor Telepon</Label>
            <Input
              id="nomorTelepon"
              type="tel"
              placeholder="021xxxxxxx"
              value={formData.nomorTelepon || ""}
              onChange={(e) => updateFormData({ nomorTelepon: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Section: Alamat */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-foreground border-b pb-2">
          Alamat Tempat Tinggal
        </h3>

        {/* Alamat Lengkap */}
        <div className="space-y-2">
          <Label htmlFor="alamatLengkap">
            Alamat Lengkap <span className="text-red-500">*</span>
          </Label>
          <Input
            id="alamatLengkap"
            placeholder="Masukkan alamat lengkap"
            value={formData.alamatLengkap}
            onChange={(e) => updateFormData({ alamatLengkap: e.target.value })}
            required
          />
        </div>

        {/* Provinsi */}
        <div className="space-y-2">
          <Label htmlFor="provinsi">
            Provinsi <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.provinsi}
            onValueChange={(value) => updateFormData({ provinsi: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {PROVINSI_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Kabupaten/Kota */}
        <div className="space-y-2">
          <Label htmlFor="kabupaten">
            Kabupaten/Kota <span className="text-red-500">*</span>
          </Label>
          <Input
            id="kabupaten"
            placeholder="Masukkan Kabupaten/Kota"
            value={formData.kabupaten}
            onChange={(e) => updateFormData({ kabupaten: e.target.value })}
            required
          />
        </div>

        {/* Grid untuk Kecamatan & Kelurahan (berdampingan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="kecamatan">
              Kecamatan <span className="text-red-500">*</span>
            </Label>
            <Input
              id="kecamatan"
              placeholder="Masukkan Kecamatan"
              value={formData.kecamatan}
              onChange={(e) => updateFormData({ kecamatan: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="kelurahan">
              Kelurahan <span className="text-red-500">*</span>
            </Label>
            <Input
              id="kelurahan"
              placeholder="Masukkan Kelurahan"
              value={formData.kelurahan}
              onChange={(e) => updateFormData({ kelurahan: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Grid untuk RT, RW, Kode Pos (berdampingan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rt">RT <span className="text-red-500">*</span></Label>
            <Input
              id="rt"
              placeholder="RT"
              value={formData.rt}
              onChange={(e) => updateFormData({ rt: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rw">RW <span className="text-red-500">*</span></Label>
            <Input
              id="rw"
              placeholder="RW"
              value={formData.rw}
              onChange={(e) => updateFormData({ rw: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="kodePos">Kode Pos</Label>
            <Input
              id="kodePos"
              placeholder="Kode Pos"
              value={formData.kodePos}
              onChange={(e) => updateFormData({ kodePos: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
