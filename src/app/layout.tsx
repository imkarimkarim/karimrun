import "@/lib/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200 m-4 dark:bg-[#181c25] text-gray-800 dark:text-gray-200 transition-colors">
        {children}
      </body>
    </html>
  );
}
