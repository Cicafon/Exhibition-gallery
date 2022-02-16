import "../styles/globals.css";
import "../styles/colors.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Progress from "../components/progress/Progress";

function MyApp({ Component, pageProps }: AppProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
