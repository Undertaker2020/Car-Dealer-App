import "./globals.css";


export const metadata = {
  title: "Car Dealer App",
  description: "This application will allow users to filter vehicles by type and model year",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
