import Navigation from "@/components/blocks/navigation/Navigation";
import "../globals.css";
import { Poppins } from 'next/font/google'
import Footer from "@/components/blocks/footer/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // Semua weight dari 200 hingga 700
  variable: '--font-poppins', // Menggunakan CSS Variable
})

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
