import Sidebar from "@/components/blocks/sidebar/Sidebar";
import "./globals.css";
import { Poppins } from 'next/font/google';
import ProgressBar from "@/components/ui/ProgressBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // Semua weight dari 200 hingga 700
  variable: '--font-poppins', // Menggunakan CSS Variable
})

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main>
          <ProgressBar/>
        <Sidebar/>
        {children}
        </main>
      </body>
    </html>
  );
}
