import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

export const metadata = {
  title: "Druglord's Legacy",
  description: "Dive into the world of drug cultivation and business with Druglord's Legacy. Build your empire and become the ultimate drug tycoon!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Druglord's Legacy - Drug Tycoon Game" />
        <meta property="og:description" content="Experience the thrill of drug cultivation and trade. Manage your resources and grow your empire in Druglord's Legacy!" />
        <meta property="og:image" content="https://druglords-legacy.vercel.app/_next/image?url=%2Fimg%2FPlatzhalter.png&w=384&q=75" />
        <meta property="og:url" content="https://druglords-legacy.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className='bg-dark'>
        {children}
      </body>
    </html>
  );
}
