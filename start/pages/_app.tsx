import '../styles/styles.css';

// nextjs app component
export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
  return <Component {...pageProps} />;
}
