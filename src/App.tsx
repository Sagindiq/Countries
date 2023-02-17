import { createTheme, CssBaseline, PaletteMode, Theme, ThemeProvider } from "@mui/material";

function App() {
  const palette = localStorage.getItem("paletType");
  const paletType: PaletteMode = palette == "dark" ? "dark" : "light";

  const theme: Theme = createTheme({
    palette: {
      mode: paletType,
      action: {
        hoverOpacity: 0.08,
        disabledOpacity: 0.26,
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabled: "rgba(0, 0, 0, 0.26)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>HELLO WORLD</h1>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
