import "@/styles/globals.css";

export const metadata = {
  title: "Prabhu Patil | Developer Portfolio",
  description:
    "A futuristic developer portfolio showcasing projects, experience, and passion for building technology.",
  metadataBase: new URL("https://prabhupatil.com"),
  openGraph: {
    title: "Prabhu Patil | Developer Portfolio",
    description:
      "A futuristic developer portfolio showcasing projects, experience, and passion for building technology.",
    url: "https://prabhupatil.com",
    siteName: "Prabhu Patil",
    images: [
      {
        url: "/profile_pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Prabhu Patil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhu Patil | Developer Portfolio",
    description:
      "A futuristic developer portfolio showcasing projects, experience, and passion for building technology.",
    images: ["/profile_pic.jpeg"],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
