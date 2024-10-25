
import "./globals.css";



export const metadata = {
  title: "Student LMS System",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
