import './App.css';
import { Providers } from './context';
import { AppRoutes } from './routes';
import { Layout } from './layout';
function App() {
  return (
    <Providers>
      <Layout>
        <AppRoutes />
      </Layout>
    </Providers>
  );
}

export default App;
