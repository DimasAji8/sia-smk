import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Checkbox } from "../../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type { FormData } from "../MultiStepForm";

interface DataOrangTuaProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PEKERJAAN_OPTIONS = [
  { value: "pns", label: "PNS" },
  { value: "tni-polri", label: "TNI/Polri" },
  { value: "swasta", label: "Karyawan Swasta" },
  { value: "wiraswasta", label: "Wiraswasta" },
  { value: "petani", label: "Petani" },
  { value: "buruh", label: "Buruh" },
  { value: "tidak-bekerja", label: "Tidak Bekerja" },
  { value: "lainnya", label: "Lainnya" },
];

const PENDIDIKAN_OPTIONS = [
  { value: "sd", label: "SD" },
  { value: "smp", label: "SMP" },
  { value: "sma", label: "SMA/SMK" },
  { value: "d3", label: "D3" },
  { value: "s1", label: "S1" },
  { value: "s2", label: "S2" },
  { value: "s3", label: "S3" },
  { value: "tidak-sekolah", label: "Tidak Sekolah" },
];

const PENGHASILAN_OPTIONS = [
  { value: "< 1jt", label: "< Rp 1.000.000" },
  { value: "1-3jt", label: "Rp 1.000.000 - Rp 3.000.000" },
  { value: "3-5jt", label: "Rp 3.000.000 - Rp 5.000.000" },
  { value: "5-10jt", label: "Rp 5.000.000 - Rp 10.000.000" },
  { value: "> 10jt", label: "> Rp 10.000.000" },
];

const PROVINSI_OPTIONS = [
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "banten", label: "Banten" },
];

export function DataOrangTua({ formData, updateFormData }: DataOrangTuaProps) {
  const handleAlamatSama = (checked: boolean) => {
    if (checked) {
      updateFormData({
        alamatSamaDenganSiswa: true,
        alamatOrangTua: "", // Copy from siswa if needed
        provinsiOrangTua: formData.provinsi,
        kabupatenOrangTua: formData.kabupaten,
        kecamatanOrangTua: formData.kecamatan,
        kelurahanOrangTua: formData.kelurahan,
        kodePosOrangTua: formData.kodePos,
        rtOrangTua: formData.rt,
        rwOrangTua: formData.rw,
      });
    } else {
      updateFormData({
        alamatSamaDenganSiswa: false,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Data Ayah */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">Data Ayah</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="namaAyah">
              Nama Ayah <span className="text-red-500">*</span>
            </Label>
            <Input
              id="namaAyah"
              placeholder="Masukkan nama ayah"
              value={formData.namaAyah}
              onChange={(e) => updateFormData({ namaAyah: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pekerjaanAyah">
                Pekerjaan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.pekerjaanAyah}
                onValueChange={(value) =>
                  updateFormData({ pekerjaanAyah: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pekerjaan" />
                </SelectTrigger>
                <SelectContent>
                  {PEKERJAAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pendidikanAyah">
                Pendidikan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.pendidikanAyah}
                onValueChange={(value) =>
                  updateFormData({ pendidikanAyah: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pendidikan" />
                </SelectTrigger>
                <SelectContent>
                  {PENDIDIKAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="penghasilanAyah">
                Penghasilan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.penghasilanAyah}
                onValueChange={(value) =>
                  updateFormData({ penghasilanAyah: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Penghasilan" />
                </SelectTrigger>
                <SelectContent>
                  {PENGHASILAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Data Ibu */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">Data Ibu</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="namaIbu">
              Nama Ibu <span className="text-red-500">*</span>
            </Label>
            <Input
              id="namaIbu"
              placeholder="Masukkan nama ibu"
              value={formData.namaIbu}
              onChange={(e) => updateFormData({ namaIbu: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pekerjaanIbu">
                Pekerjaan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.pekerjaanIbu}
                onValueChange={(value) =>
                  updateFormData({ pekerjaanIbu: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pekerjaan" />
                </SelectTrigger>
                <SelectContent>
                  {PEKERJAAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pendidikanIbu">
                Pendidikan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.pendidikanIbu}
                onValueChange={(value) =>
                  updateFormData({ pendidikanIbu: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pendidikan" />
                </SelectTrigger>
                <SelectContent>
                  {PENDIDIKAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="penghasilanIbu">
                Penghasilan <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.penghasilanIbu}
                onValueChange={(value) =>
                  updateFormData({ penghasilanIbu: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Penghasilan" />
                </SelectTrigger>
                <SelectContent>
                  {PENGHASILAN_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Alamat Orang Tua */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Alamat Orang Tua</h3>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="alamatSama"
              checked={formData.alamatSamaDenganSiswa}
              onCheckedChange={handleAlamatSama}
            />
            <Label
              htmlFor="alamatSama"
              className="text-sm font-normal cursor-pointer"
            >
              Sama dengan alamat siswa
            </Label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="alamatOrangTua">
              Alamat Lengkap <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="alamatOrangTua"
              placeholder="Masukkan alamat lengkap orang tua"
              value={formData.alamatOrangTua}
              onChange={(e) =>
                updateFormData({ alamatOrangTua: e.target.value })
              }
              rows={3}
              disabled={formData.alamatSamaDenganSiswa}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="provinsiOrangTua">
                Provinsi <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.provinsiOrangTua}
                onValueChange={(value) =>
                  updateFormData({ provinsiOrangTua: value })
                }
                disabled={formData.alamatSamaDenganSiswa}
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
            <div className="space-y-2">
              <Label htmlFor="kabupatenOrangTua">
                Kabupaten/Kota <span className="text-red-500">*</span>
              </Label>
              <Input
                id="kabupatenOrangTua"
                placeholder="Masukkan Kabupaten/Kota"
                value={formData.kabupatenOrangTua}
                onChange={(e) =>
                  updateFormData({ kabupatenOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="kecamatanOrangTua">Kecamatan</Label>
              <Input
                id="kecamatanOrangTua"
                placeholder="Masukkan Kecamatan"
                value={formData.kecamatanOrangTua}
                onChange={(e) =>
                  updateFormData({ kecamatanOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kelurahanOrangTua">Kelurahan</Label>
              <Input
                id="kelurahanOrangTua"
                placeholder="Masukkan Kelurahan"
                value={formData.kelurahanOrangTua}
                onChange={(e) =>
                  updateFormData({ kelurahanOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="kodePosOrangTua">Kode Pos</Label>
              <Input
                id="kodePosOrangTua"
                placeholder="Kode Pos"
                value={formData.kodePosOrangTua}
                onChange={(e) =>
                  updateFormData({ kodePosOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rtOrangTua">RT</Label>
              <Input
                id="rtOrangTua"
                placeholder="RT"
                value={formData.rtOrangTua}
                onChange={(e) =>
                  updateFormData({ rtOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rwOrangTua">RW</Label>
              <Input
                id="rwOrangTua"
                placeholder="RW"
                value={formData.rwOrangTua}
                onChange={(e) =>
                  updateFormData({ rwOrangTua: e.target.value })
                }
                disabled={formData.alamatSamaDenganSiswa}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nomorHpOrangTua">
                Nomor HP <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nomorHpOrangTua"
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={formData.nomorHpOrangTua}
                onChange={(e) =>
                  updateFormData({ nomorHpOrangTua: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nomorTeleponRumah">Nomor Telepon Rumah</Label>
              <Input
                id="nomorTeleponRumah"
                type="tel"
                placeholder="021xxxxxxx"
                value={formData.nomorTeleponRumah}
                onChange={(e) =>
                  updateFormData({ nomorTeleponRumah: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
