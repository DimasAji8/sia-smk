import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { ChevronLeft, ChevronRight, Save } from "lucide-react";
import { cn } from "../../lib/utils";

// Import step components
import { DataDiriSiswa } from "./steps/DataDiriSiswa";
import { DataSekolahAsal } from "./steps/DataSekolahAsal";
import { DataOrangTua } from "./steps/DataOrangTua";
import { DataWali } from "./steps/DataWali";

// Form data interface
export interface FormData {
  // Data Diri Siswa
  namaLengkap: string;
  nik: string;
  nisn: string;
  nis: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  agama: string;
  nomorHp: string;
  nomorTelepon: string;
  email: string;
  fotoProfil: string;
  jurusan: string;
  alamatLengkap: string;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  kelurahan: string;
  kodePos: string;
  rt: string;
  rw: string;

  // Data Sekolah Asal
  jenisSekolahAsal: string;
  namaSekolahAsal: string;
  alamatSekolahAsal: string;
  provinsiSekolah: string;
  kabupatenSekolah: string;
  kecamatanSekolah: string;
  kelurahanSekolah: string;
  nomorIjazah: string;
  tanggalIjazah: string;

  // Data Orang Tua - Ayah
  namaAyah: string;
  pekerjaanAyah: string;
  pendidikanAyah: string;
  penghasilanAyah: string;

  // Data Orang Tua - Ibu
  namaIbu: string;
  pekerjaanIbu: string;
  pendidikanIbu: string;
  penghasilanIbu: string;

  // Alamat Orang Tua
  alamatOrangTua: string;
  provinsiOrangTua: string;
  kabupatenOrangTua: string;
  kecamatanOrangTua: string;
  kelurahanOrangTua: string;
  kodePosOrangTua: string;
  rtOrangTua: string;
  rwOrangTua: string;
  nomorHpOrangTua: string;
  nomorTeleponRumah: string;
  alamatSamaDenganSiswa: boolean;

  // Data Wali (Optional)
  namaWali: string;
  pekerjaanWali: string;
  alamatWali: string;
  provinsiWali: string;
  kabupatenWali: string;
  kecamatanWali: string;
  kelurahanWali: string;
  kodePosWali: string;
  rtWali: string;
  rwWali: string;
  nomorHpWali: string;
  nomorTeleponWali: string;
}

const STEPS = [
  {
    id: 1,
    title: "Data Diri Siswa",
    description: "Informasi identitas dan alamat siswa",
  },
  {
    id: 2,
    title: "Data Sekolah Asal",
    description: "Informasi sekolah asal siswa",
  },
  {
    id: 3,
    title: "Data Orang Tua",
    description: "Informasi orang tua/wali siswa",
  },
  {
    id: 4,
    title: "Data Wali",
    description: "Informasi wali siswa (opsional)",
  },
];

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Initialize all fields with empty values
    namaLengkap: "",
    nik: "",
    nisn: "",
    nis: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    nomorHp: "",
    nomorTelepon: "",
    email: "",
    fotoProfil: "",
    jurusan: "",
    alamatLengkap: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    kodePos: "",
    rt: "",
    rw: "",
    jenisSekolahAsal: "",
    namaSekolahAsal: "",
    alamatSekolahAsal: "",
    provinsiSekolah: "",
    kabupatenSekolah: "",
    kecamatanSekolah: "",
    kelurahanSekolah: "",
    nomorIjazah: "",
    tanggalIjazah: "",
    namaAyah: "",
    pekerjaanAyah: "",
    pendidikanAyah: "",
    penghasilanAyah: "",
    namaIbu: "",
    pekerjaanIbu: "",
    pendidikanIbu: "",
    penghasilanIbu: "",
    alamatOrangTua: "",
    provinsiOrangTua: "",
    kabupatenOrangTua: "",
    kecamatanOrangTua: "",
    kelurahanOrangTua: "",
    kodePosOrangTua: "",
    rtOrangTua: "",
    rwOrangTua: "",
    nomorHpOrangTua: "",
    nomorTeleponRumah: "",
    alamatSamaDenganSiswa: false,
    namaWali: "",
    pekerjaanWali: "",
    alamatWali: "",
    provinsiWali: "",
    kabupatenWali: "",
    kecamatanWali: "",
    kelurahanWali: "",
    kodePosWali: "",
    rtWali: "",
    rwWali: "",
    nomorHpWali: "",
    nomorTeleponWali: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // TODO: Implement API call to save data
    alert("Data berhasil disimpan! (lihat console untuk data)");
  };

  const progressPercentage = (currentStep / STEPS.length) * 100;

  return (
    <div className="w-full">
      {/* Progress Stepper */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center w-full">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                    currentStep >= step.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.id}
                </div>
                <div className="text-center mt-1">
                  <p
                    className={cn(
                      "text-xs font-medium transition-colors duration-300",
                      currentStep >= step.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-2 transition-all duration-300",
                    currentStep > step.id ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <Progress value={progressPercentage} className="h-1.5" />
      </div>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {STEPS[currentStep - 1].title}
          </CardTitle>
          <CardDescription>
            Langkah {currentStep} dari {STEPS.length} -{" "}
            {STEPS[currentStep - 1].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Render current step component */}
          <div className="transition-all duration-300 ease-in-out">
            {currentStep === 1 && (
              <DataDiriSiswa
                formData={formData}
                updateFormData={updateFormData}
              />
            )}
            {currentStep === 2 && (
              <DataSekolahAsal
                formData={formData}
                updateFormData={updateFormData}
              />
            )}
            {currentStep === 3 && (
              <DataOrangTua
                formData={formData}
                updateFormData={updateFormData}
              />
            )}
            {currentStep === 4 && (
              <DataWali formData={formData} updateFormData={updateFormData} />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t-2">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2 h-10 px-6 border-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Kembali
            </Button>

            <div className="text-sm text-muted-foreground">
              Step {currentStep} / {STEPS.length}
            </div>

            {currentStep === STEPS.length ? (
              <Button onClick={handleSubmit} className="gap-2 h-10 px-6">
                <Save className="w-4 h-4" />
                Simpan Data
              </Button>
            ) : (
              <Button onClick={nextStep} className="gap-2 h-10 px-6">
                Selanjutnya
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
