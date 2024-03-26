import Navigation from "@/components/Navigation";

import "./globals.css";

export const metadata = {
  title: "Showing NextJS on CodeSnax",
  description: "Cooking and Coding!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
