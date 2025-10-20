import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Printer, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Breadcrumbs } from "../../components/common/Breadcrumbs";

export default function DetailSiswa() {
  const { id } = useParams();

  // Mock data - replace with actual data fetch
  const siswa = {
    id: id || "1",
    nis: "2024001",
    nisn: "0051234567",
    nama: "Ahmad Rizki Maulana",
    kelas: "XII",
    jurusan: "TKJ",
    status: "Aktif",
    email: "ahmad.rizki@student.smk.sch.id",
    telepon: "081234567890",
    alamat: "Jl. Raya Pendidikan No. 123, Bandung",
    tanggalLahir: "15 Januari 2007",
    tempatLahir: "Bandung",
    jenisKelamin: "Laki-laki",
    agama: "Islam",
    namaAyah: "Budi Santoso",
    namaIbu: "Siti Aminah",
    teleponOrtu: "082345678901",
    pekerjaanAyah: "Wiraswasta",
    pekerjaanIbu: "Ibu Rumah Tangga",
  };

  const riwayatPembayaran = [
    {
      id: 1,
      tanggal: "10 Sep 2024",
      jenis: "SPP September 2024",
      nominal: 500000,
      status: "Lunas",
    },
    {
      id: 2,
      tanggal: "10 Agt 2024",
      jenis: "SPP Agustus 2024",
      nominal: 500000,
      status: "Lunas",
    },
    {
      id: 3,
      tanggal: "10 Jul 2024",
      jenis: "SPP Juli 2024",
      nominal: 500000,
      status: "Lunas",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Siswa", href: "/siswa" },
          { label: "Data Siswa", href: "/siswa/data" },
          { label: siswa.nama },
        ]}
      />

      <div className="flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Detail Siswa
          </h1>
          <p className="text-base text-muted-foreground mt-1">
            Informasi lengkap data siswa
          </p>
        </div>
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="h-5 w-5" />
          Cetak
        </Button>
      </div>

      {/* Data Pribadi */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{siswa.nama}</CardTitle>
              <CardDescription className="text-base mt-1">
                NIS: {siswa.nis} | NISN: {siswa.nisn}
              </CardDescription>
            </div>
            <Badge
              variant={siswa.status === "Aktif" ? "default" : "secondary"}
              className="text-base px-3 py-1"
            >
              {siswa.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Kelas & Jurusan
                </p>
                <p className="text-lg font-semibold mt-1">
                  {siswa.kelas} {siswa.jurusan}
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Tempat, Tanggal Lahir
                </p>
                <p className="text-lg mt-1">
                  {siswa.tempatLahir}, {siswa.tanggalLahir}
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Jenis Kelamin
                </p>
                <p className="text-lg mt-1">{siswa.jenisKelamin}</p>
              </div>
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Agama
                </p>
                <p className="text-lg mt-1">{siswa.agama}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-base font-medium text-muted-foreground">
                    Email
                  </p>
                  <p className="text-lg mt-1">{siswa.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-base font-medium text-muted-foreground">
                    Telepon
                  </p>
                  <p className="text-lg mt-1">{siswa.telepon}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-base font-medium text-muted-foreground">
                    Alamat
                  </p>
                  <p className="text-lg mt-1">{siswa.alamat}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Orang Tua */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Data Orang Tua / Wali</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Nama Ayah
                </p>
                <p className="text-lg mt-1">{siswa.namaAyah}</p>
              </div>
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Pekerjaan
                </p>
                <p className="text-lg mt-1">{siswa.pekerjaanAyah}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Nama Ibu
                </p>
                <p className="text-lg mt-1">{siswa.namaIbu}</p>
              </div>
              <div>
                <p className="text-base font-medium text-muted-foreground">
                  Pekerjaan
                </p>
                <p className="text-lg mt-1">{siswa.pekerjaanIbu}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-base font-medium text-muted-foreground">
                    Telepon Orang Tua
                  </p>
                  <p className="text-lg mt-1">{siswa.teleponOrtu}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ringkasan Keuangan */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Ringkasan Keuangan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-base">
                  Total Tagihan
                </CardDescription>
                <CardTitle className="text-3xl">
                  {formatCurrency(1500000)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-base">
                  Sudah Dibayar
                </CardDescription>
                <CardTitle className="text-3xl text-green-600">
                  {formatCurrency(1500000)}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-base">Tunggakan</CardDescription>
                <CardTitle className="text-3xl text-red-600">
                  {formatCurrency(0)}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Riwayat Pembayaran */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Riwayat Pembayaran</CardTitle>
          <CardDescription className="text-base">
            3 pembayaran terakhir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-base">Tanggal</TableHead>
                  <TableHead className="text-base">Jenis Pembayaran</TableHead>
                  <TableHead className="text-base">Nominal</TableHead>
                  <TableHead className="text-base">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riwayatPembayaran.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-base">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {item.tanggal}
                      </div>
                    </TableCell>
                    <TableCell className="text-base">{item.jenis}</TableCell>
                    <TableCell className="text-lg font-semibold">
                      {formatCurrency(item.nominal)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Lunas</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
