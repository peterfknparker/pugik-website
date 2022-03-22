import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl" className="dark">
      <Head />
      <body className="text-[#303030] leading-loose bg-white dark:bg-[#1B2834] dark:text-white transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
