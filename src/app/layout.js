import "./globals.css";
import Header from "./components/Header";
import Cursor from "./components/cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
