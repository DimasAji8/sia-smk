import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import Dashboard from "./pages/dashboard";
import KeuanganDashboard from "./pages/keuangan/dashboard";
import KeuanganTransaksi from "./pages/keuangan/transaksi";
import KeuanganTagihan from "./pages/keuangan/tagihan";
import KeuanganLaporan from "./pages/keuangan/laporan";

const router = createBrowserRouter([
  {
    path: "/",
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
      // Placeholder untuk modul lain
      {
        path: "siswa/*",
        element: (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Modul Siswa - Coming Soon</h1>
          </div>
        ),
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
