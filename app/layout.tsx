import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider } from "./components/LanguageContext";
import "./globals.css";

 const interFont  = Inter({
  subsets: ['latin'],
  display: "swap"
 })

export const metadata = {
  title: {
    template: "%s | Sapore",
    default: "Sapore"
  },
  description: "Descubra o Sapore, um restaurante italiano situado no encantador Parque Eduardo VII, em Lisboa, onde a tradição e o sabor se encontram. Oferecemos uma seleção de pratos típicos da Itália, preparados com ingredientes frescos e genuínos. Desde massas artesanais a pizzas crocantes feitas no forno a lenha, cada prato é uma homenagem à culinária italiana. Com um ambiente acolhedor e uma vista deslumbrante sobre o parque, o Sapore é o local perfeito para um almoço tranquilo, um jantar romântico, ou uma reunião com amigos. Desfrute de uma experiência gastronômica única no centro de Lisboa, com pratos que trazem o verdadeiro sabor da Itália para a sua mesa. Venha ao Sapore e sinta o gosto autêntico de Itália em cada garfada!"
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} `} suppressHydrationWarning={true}>
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
