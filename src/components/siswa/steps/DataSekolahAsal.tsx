import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type { FormData } from "../MultiStepForm";

interface DataSekolahAsalProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const JENIS_SEKOLAH = [
  { value: "smp", label: "SMP" },
  { value: "mts", label: "MTs" },
  { value: "smp-terbuka", label: "SMP Terbuka" },
  { value: "paket-b", label: "Paket B" },
];

const PROVINSI_OPTIONS = [
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "banten", label: "Banten" },
];

export function DataSekolahAsal({
  formData,
  updateFormData,
}: DataSekolahAsalProps) {
  return (
    <div className="space-y-6">
      {/* Jenis Sekolah */}
      <div className="space-y-2">
        <Label htmlFor="jenisSekolahAsal">
          Jenis Sekolah Asal <span className="text-red-500">*</span>
        </Label>
        <Select
          value={formData.jenisSekolahAsal}
          onValueChange={(value) => updateFormData({ jenisSekolahAsal: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Jenis Sekolah" />
          </SelectTrigger>
          <SelectContent>
            {JENIS_SEKOLAH.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Nama Sekolah */}
      <div className="space-y-2">
        <Label htmlFor="namaSekolahAsal">
          Nama Sekolah Asal <span className="text-red-500">*</span>
        </Label>
        <Input
          id="namaSekolahAsal"
          placeholder="Masukkan nama sekolah asal"
          value={formData.namaSekolahAsal}
          onChange={(e) => updateFormData({ namaSekolahAsal: e.target.value })}
          required
        />
      </div>

      {/* Alamat Sekolah */}
      <div className="space-y-2">
        <Label htmlFor="alamatSekolahAsal">
          Alamat Sekolah Asal <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="alamatSekolahAsal"
          placeholder="Masukkan alamat lengkap sekolah asal"
          value={formData.alamatSekolahAsal}
          onChange={(e) =>
            updateFormData({ alamatSekolahAsal: e.target.value })
          }
          rows={3}
          required
        />
      </div>

      {/* Provinsi & Kecamatan Sekolah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="provinsiSekolah">
            Provinsi <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.provinsiSekolah}
            onValueChange={(value) => updateFormData({ provinsiSekolah: value })}
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
          <Label htmlFor="kecamatanSekolah">
            Kecamatan <span className="text-red-500">*</span>
          </Label>
          <Input
            id="kecamatanSekolah"
            placeholder="Masukkan Kecamatan"
            value={formData.kecamatanSekolah}
            onChange={(e) =>
              updateFormData({ kecamatanSekolah: e.target.value })
            }
            required
          />
        </div>
      </div>

      {/* Kabupaten & Kelurahan Sekolah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="kabupatenSekolah">
            Kabupaten/Kota <span className="text-red-500">*</span>
          </Label>
          <Input
            id="kabupatenSekolah"
            placeholder="Masukkan Kabupaten/Kota"
            value={formData.kabupatenSekolah}
            onChange={(e) =>
              updateFormData({ kabupatenSekolah: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kelurahanSekolah">Kelurahan</Label>
          <Input
            id="kelurahanSekolah"
            placeholder="Masukkan Kelurahan"
            value={formData.kelurahanSekolah}
            onChange={(e) =>
              updateFormData({ kelurahanSekolah: e.target.value })
            }
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Data Ijazah</h3>
      </div>

      {/* Nomor & Tanggal Ijazah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nomorIjazah">
            Nomor Ijazah <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nomorIjazah"
            placeholder="Masukkan nomor ijazah"
            value={formData.nomorIjazah}
            onChange={(e) => updateFormData({ nomorIjazah: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tanggalIjazah">
            Tanggal Ijazah <span className="text-red-500">*</span>
          </Label>
          <Input
            id="tanggalIjazah"
            type="date"
            value={formData.tanggalIjazah}
            onChange={(e) => updateFormData({ tanggalIjazah: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}
