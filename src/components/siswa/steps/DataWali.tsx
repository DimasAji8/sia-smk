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
import { Alert, AlertDescription } from "../../ui/alert";
import { InfoIcon } from "lucide-react";

interface DataWaliProps {
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

const PROVINSI_OPTIONS = [
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "banten", label: "Banten" },
];

export function DataWali({ formData, updateFormData }: DataWaliProps) {
  return (
    <div className="space-y-6">
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Data wali bersifat opsional. Isi jika siswa memiliki wali yang berbeda
          dengan orang tua kandung.
        </AlertDescription>
      </Alert>

      {/* Nama Wali */}
      <div className="space-y-2">
        <Label htmlFor="namaWali">Nama Wali</Label>
        <Input
          id="namaWali"
          placeholder="Masukkan nama wali (jika ada)"
          value={formData.namaWali}
          onChange={(e) => updateFormData({ namaWali: e.target.value })}
        />
      </div>

      {/* Pekerjaan Wali */}
      <div className="space-y-2">
        <Label htmlFor="pekerjaanWali">Pekerjaan Wali</Label>
        <Select
          value={formData.pekerjaanWali}
          onValueChange={(value) => updateFormData({ pekerjaanWali: value })}
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

      {/* Divider */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Alamat Wali</h3>
      </div>

    {/* Alamat Wali */}
      <div className="space-y-2">
        <Label htmlFor="alamatWali">Alamat Lengkap</Label>
        <Textarea
          id="alamatWali"
          placeholder="Masukkan alamat lengkap wali"
          value={formData.alamatWali}
          onChange={(e) => updateFormData({ alamatWali: e.target.value })}
          rows={3}
        />
      </div>

      {/* Provinsi & Kecamatan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="provinsiWali">Provinsi</Label>
          <Select
            value={formData.provinsiWali}
            onValueChange={(value) => updateFormData({ provinsiWali: value })}
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
          <Label htmlFor="kecamatanWali">Kecamatan</Label>
          <Input
            id="kecamatanWali"
            placeholder="Masukkan Kecamatan"
            value={formData.kecamatanWali}
            onChange={(e) =>
              updateFormData({ kecamatanWali: e.target.value })
            }
          />
        </div>
      </div>

      {/* Kabupaten & Kelurahan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="kabupatenWali">Kabupaten/Kota</Label>
          <Input
            id="kabupatenWali"
            placeholder="Masukkan Kabupaten/Kota"
            value={formData.kabupatenWali}
            onChange={(e) => updateFormData({ kabupatenWali: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kelurahanWali">Kelurahan</Label>
          <Input
            id="kelurahanWali"
            placeholder="Masukkan Kelurahan"
            value={formData.kelurahanWali}
            onChange={(e) =>
              updateFormData({ kelurahanWali: e.target.value })
            }
          />
        </div>
      </div>


      {/* Kode Pos, RT, RW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="kodePosWali">Kode Pos</Label>
          <Input
            id="kodePosWali"
            placeholder="Kode Pos"
            value={formData.kodePosWali}
            onChange={(e) => updateFormData({ kodePosWali: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rtWali">RT</Label>
          <Input
            id="rtWali"
            placeholder="RT"
            value={formData.rtWali}
            onChange={(e) => updateFormData({ rtWali: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rwWali">RW</Label>
          <Input
            id="rwWali"
            placeholder="RW"
            value={formData.rwWali}
            onChange={(e) => updateFormData({ rwWali: e.target.value })}
          />
        </div>
      </div>

      {/* Kontak Wali */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nomorHpWali">Nomor HP</Label>
          <Input
            id="nomorHpWali"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={formData.nomorHpWali}
            onChange={(e) => updateFormData({ nomorHpWali: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nomorTeleponWali">Nomor Telepon Rumah</Label>
          <Input
            id="nomorTeleponWali"
            type="tel"
            placeholder="021xxxxxxx"
            value={formData.nomorTeleponWali}
            onChange={(e) =>
              updateFormData({ nomorTeleponWali: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}
