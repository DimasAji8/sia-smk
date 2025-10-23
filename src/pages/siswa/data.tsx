import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { MoreHorizontal, Search, UserPlus, Eye, Edit, Trash } from "lucide-react";
import { Breadcrumbs } from "../../components/common/Breadcrumbs";

// Mock data untuk demo
const siswaData = [
  {
    id: "1",
    nis: "2024001",
    nisn: "0051234567",
    nama: "Ahmad Rizki Maulana",
    kelas: "XII",
    jurusan: "TKJ",
    status: "Aktif",
  },
  {
    id: "2",
    nis: "2024002",
    nisn: "0051234568",
    nama: "Siti Nurhaliza",
    kelas: "XI",
    jurusan: "RPL",
    status: "Aktif",
  },
  {
    id: "3",
    nis: "2024003",
    nisn: "0051234569",
    nama: "Budi Santoso",
    kelas: "X",
    jurusan: "MM",
    status: "Aktif",
  },
];

export default function DataSiswa() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [kelasFilter, setKelasFilter] = useState("all");
  const [jurusanFilter, setJurusanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSiswa = siswaData.filter((siswa: any) => {
    const matchSearch =
      siswa.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      siswa.nis.includes(searchQuery) ||
      siswa.nisn.includes(searchQuery);

    const matchKelas = kelasFilter === "all" || siswa.kelas === kelasFilter;
    const matchJurusan =
      jurusanFilter === "all" || siswa.jurusan === jurusanFilter;
    const matchStatus =
      statusFilter === "all" || siswa.status === statusFilter;

    return matchSearch && matchKelas && matchJurusan && matchStatus;
  });

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[{ label: "Siswa", href: "/siswa" }, { label: "Data Siswa" }]}
      />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Siswa</h1>
          <p className="text-base text-muted-foreground mt-1">
            Kelola data siswa SMK Sasmita Jaya 1
          </p>
        </div>
        <Button 
          className="gap-2"
          onClick={() => navigate("/siswa/tambah")}
        >
          <UserPlus className="h-4 w-4" />
          Tambah Siswa
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Filter Data Siswa</CardTitle>
          <CardDescription className="text-base">
            Gunakan filter untuk mencari siswa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari nama, NIS, atau NISN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 text-base"
              />
            </div>

            <Select value={kelasFilter} onValueChange={setKelasFilter}>
              <SelectTrigger className="h-11 text-base">
                <SelectValue placeholder="Semua Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kelas</SelectItem>
                <SelectItem value="X">Kelas X</SelectItem>
                <SelectItem value="XI">Kelas XI</SelectItem>
                <SelectItem value="XII">Kelas XII</SelectItem>
              </SelectContent>
            </Select>

            <Select value={jurusanFilter} onValueChange={setJurusanFilter}>
              <SelectTrigger className="h-11 text-base">
                <SelectValue placeholder="Semua Jurusan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jurusan</SelectItem>
                <SelectItem value="TKJ">TKJ</SelectItem>
                <SelectItem value="RPL">RPL</SelectItem>
                <SelectItem value="MM">Multimedia</SelectItem>
                <SelectItem value="AKL">AKL</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-11 text-base">
                <SelectValue placeholder="Semua Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="Aktif">Aktif</SelectItem>
                <SelectItem value="Lulus">Lulus</SelectItem>
                <SelectItem value="Pindah">Pindah</SelectItem>
                <SelectItem value="DO">Drop Out</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Daftar Siswa</CardTitle>
              <CardDescription className="text-base">
                Menampilkan {filteredSiswa.length} dari {siswaData.length} siswa
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-base">NIS / NISN</TableHead>
                  <TableHead className="text-base">Nama Lengkap</TableHead>
                  <TableHead className="text-base">Kelas</TableHead>
                  <TableHead className="text-base">Jurusan</TableHead>
                  <TableHead className="text-base">Status</TableHead>
                  <TableHead className="text-right text-base">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSiswa.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="h-24 text-center text-base"
                    >
                      Tidak ada data siswa
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSiswa.map((siswa: any) => (
                    <TableRow key={siswa.id}>
                      <TableCell className="font-medium text-base">
                        <div>
                          <div>{siswa.nis}</div>
                          <div className="text-sm text-muted-foreground">
                            {siswa.nisn}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-base">{siswa.nama}</TableCell>
                      <TableCell className="text-base">{siswa.kelas}</TableCell>
                      <TableCell className="text-base">
                        {siswa.jurusan}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            siswa.status === "Aktif"
                              ? "default"
                              : siswa.status === "Lulus"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {siswa.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                to={`/siswa/detail/${siswa.id}`}
                                className="flex items-center gap-2"
                              >
                                <Eye className="h-4 w-4" />
                                Lihat Detail
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Edit className="h-4 w-4" />
                              Edit Data
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                              <Trash className="h-4 w-4" />
                              Hapus
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
