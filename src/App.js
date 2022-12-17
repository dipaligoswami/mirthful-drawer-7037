import {ChakraProvider} from '@chakra-ui/react'
import AllRoutes from './Pages/AllRoutes';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins/400.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const thememui = createTheme();
  const theme = extendTheme({
    fonts: {
      body: `'Poppins', sans-serif`,
    },
  })
  return (
    <>
    <ThemeProvider theme={thememui}>
      <ChakraProvider theme={theme}>
        <AllRoutes/> 
      </ChakraProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
