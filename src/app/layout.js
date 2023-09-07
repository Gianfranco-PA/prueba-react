import "bootstrap/dist/css/bootstrap.css";
import "./layout.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Star Wars!",
  description: "Elaborada por Gianfranco Perez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="shortcut icon" href="/chewbacca.svg" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
