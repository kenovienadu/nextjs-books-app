import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
