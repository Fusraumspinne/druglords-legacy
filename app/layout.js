import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Druglord's Legacy",
  description: "Dive into the world of drug cultivation and business with Druglord's Legacy. Build your empire and become the ultimate cannabis tycoon!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Druglord's Legacy - Drug Tycoon Game" />
        <meta property="og:description" content="Experience the thrill of cannabis cultivation and trade. Manage your resources and grow your empire in Druglord's Legacy!" />
        <meta property="og:image" content="/img/Platzhalter.png" />
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
