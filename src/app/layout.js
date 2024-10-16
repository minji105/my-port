import "./globals.css";
import Nav from "./components/Nav";
import Cursor from "./components/cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
