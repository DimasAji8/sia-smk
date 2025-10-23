import { useNavigate } from "react-router-dom";
import { MultiStepForm } from "../../components/siswa/MultiStepForm";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TambahSiswa() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/siswa/data")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Tambah Data Siswa Baru
              </h1>
              <p className="text-muted-foreground mt-1">
                Lengkapi formulir pendaftaran siswa baru dengan data yang valid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Step Form */}
      <MultiStepForm />
    </div>
  );
}
