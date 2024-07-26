import { ThemeProvider } from 'styled-components';

import Termo from './pages/termo';

import Global from './styles/global';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Termo />
    </ThemeProvider>
  );
};

export default App;
