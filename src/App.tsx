import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import KeuanganDashboard from "./pages/keuangan/dashboard";
import KeuanganTransaksi from "./pages/keuangan/transaksi";
import KeuanganTagihan from "./pages/keuangan/tagihan";
import KeuanganLaporan from "./pages/keuangan/laporan";
import DataSiswa from "./pages/siswa/data";
import DetailSiswa from "./pages/siswa/detail";
import TambahSiswa from "./pages/siswa/tambah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "keuangan",
        children: [
          {
            path: "dashboard",
            element: <KeuanganDashboard />,
          },
          {
            path: "transaksi",
            element: <KeuanganTransaksi />,
          },
          {
            path: "tagihan",
            element: <KeuanganTagihan />,
          },
          {
            path: "laporan",
            element: <KeuanganLaporan />,
          },
        ],
      },
      // Modul Siswa
      {
        path: "siswa",
        children: [
          {
            path: "data",
            element: <DataSiswa />,
          },
          {
            path: "tambah",
            element: <TambahSiswa />,
          },
          {
            path: "detail/:id",
            element: <DetailSiswa />,
          },
        ],
      },
      {
        path: "staff/*",
        element: (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Modul Staff - Coming Soon</h1>
          </div>
        ),
      },
      {
        path: "akademik/*",
        element: (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Modul Akademik - Coming Soon</h1>
          </div>
        ),
      },
    ],
  },
  // Redirect untuk route lama ke dashboard baru
  {
    path: "/siswa/*",
    element: <AppLayout />,
    children: [
      {
        path: "data",
        element: <DataSiswa />,
      },
      {
        path: "tambah",
        element: <TambahSiswa />,
      },
      {
        path: "detail/:id",
        element: <DetailSiswa />,
      },
    ],
  },
  {
    path: "/keuangan/*",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <KeuanganDashboard />,
      },
      {
        path: "transaksi",
        element: <KeuanganTransaksi />,
      },
      {
        path: "tagihan",
        element: <KeuanganTagihan />,
      },
      {
        path: "laporan",
        element: <KeuanganLaporan />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
