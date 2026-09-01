import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { alpha } from "@mui/material/styles";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  ThemeProvider,
} from "@mui/material";

import {
  DarkMode,
  GitHub,
  LightMode,
  LinkedIn,
  Description,
  ArrowUpward,
} from "@mui/icons-material";

import { lightTheme, darkTheme } from "./theme";

const getInitialDarkMode = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => getInitialDarkMode());
  const [biography, setBiography] = useState("");

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    fetch("/biography.md")
      .then((response) => response.text())
      .then((text) => setBiography(text))
      .catch((error) => {
        console.error("Unable to load biography:", error);
      });
  }, []);

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Ashanth-Ganesh",
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ashanth-ganesh/",
      icon: <LinkedIn />,
    },
    {
      name: "Resume",
      url: "https://1drv.ms/b/c/157aaa4af6764509/IQB2JeXVnYepTLQ80qDau99eAcggjfki-6hMLIXH5Cdjw2o?e=8MbtZy",
      icon: <Description />,
    },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh" }}>
        <AppBar
          position="sticky"
          elevation={0}
          color="transparent"
          sx={(theme) => ({
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid",
            borderColor: alpha(theme.palette.text.primary, 0.15),
            backgroundColor: darkMode
              ? "rgba(8, 11, 16, 0.72)"
              : "rgba(245, 249, 255, 0.72)",
          })}
        >
          <Toolbar sx={{ px: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h6"
              component="a"
              href="#top"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
              }}
            >
              Ashanth Ganesh
            </Typography>

            <Tooltip
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                color="inherit"
                aria-label="toggle color theme"
              >
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <main id="top" style={{ width: "100%" }}>
          <Box
            sx={(theme) => ({
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              minHeight: { xs: "auto", sm: "480px" },
              px: { xs: 2.5, sm: 3 },
              py: { xs: 8.75, sm: 10 },
              "&::before": {
                content: '""',
                position: "absolute",
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: alpha(theme.palette.primary.main, 0.08),
                top: -200,
                right: -150,
                pointerEvents: "none",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: alpha(theme.palette.primary.main, 0.06),
                bottom: -180,
                left: -100,
                pointerEvents: "none",
              },
            })}
          >
            <Container maxWidth="lg" sx={{ width: "80vw", maxWidth: "80vw" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={5}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <Avatar
                  src="/images/Professional_headshot.jpg"
                  alt="Ashanth Ganesh"
                  sx={(theme) => ({
                    width: { xs: 150, sm: 190 },
                    height: { xs: 150, sm: 190 },
                    border: "5px solid",
                    borderColor: theme.palette.primary.main,
                    boxShadow: "0 15px 40px rgba(25, 118, 210, 0.2)",
                  })}
                >
                  AG
                </Avatar>

                <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: "-1.5px",
                      fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.5rem" },
                      lineHeight: 1.08,
                    }}
                  >
                    Ashanth Ganesh
                  </Typography>

                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 1, fontSize: { xs: "1.1rem", sm: "1.25rem" }, lineHeight: 1.5 }}
                  >
                    AI and Software Engineer | Quantum Computing Enthusiast
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 2, maxWidth: 650, fontSize: { xs: "1.05rem", sm: "1.2rem" }, lineHeight: 1.7 }}
                  >
                    Welcome to my portfolio. Here you can learn more about me,
                    my work, and the projects I've built.
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{ width: "80vw", maxWidth: "80vw" }}>
            <Box sx={{ py: 6.25 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: "1.7rem", sm: "2.05rem" } }} gutterBottom>
                Find Me Online
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 3 }}
              >
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={(theme) => ({
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                      px: 2.25,
                      py: 1.5,
                      border: "1px solid",
                      borderColor: alpha(theme.palette.text.primary, 0.25),
                      borderRadius: 2,
                      color: "inherit",
                      transition:
                        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.15)}`,
                      },
                    })}
                  >
                    {link.icon}

                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>

            <Paper
              elevation={0}
              sx={(theme) => ({
                p: { xs: 3, sm: 5 },
                mb: 10,
                border: "1px solid",
                borderColor: alpha(theme.palette.text.primary, 0.15),
              })}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: 700, fontSize: { xs: "2.2rem", sm: "2.9rem" } }}
                gutterBottom
              >
                Biography
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Box
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "1.08rem", sm: "1.22rem" },
                  "& h1, & h2, & h3": {
                    mt: 2.8,
                    mb: 0.6,
                  },
                  "& h1:first-of-type, & h2:first-of-type, & h3:first-of-type": {
                    mt: 0,
                  },
                  "& p": {
                    my: 1,
                  },
                  "& ul, & ol": {
                    pl: 3,
                  },
                  "& li": {
                    mb: 0.5,
                  },
                  "& a": {
                    color: "primary.main",
                    fontWeight: 500,
                  },
                  "& blockquote": {
                    my: 2,
                    px: 2.5,
                    py: 1.5,
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                    backgroundColor: alpha("#1976d2", 0.06),
                  },
                  "& code": {
                    px: 1.25,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: alpha("#808080", 0.15),
                  },
                  "& pre": {
                    p: 2.25,
                    overflowX: "auto",
                    borderRadius: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                {biography ? (
                  <ReactMarkdown>{biography}</ReactMarkdown>
                ) : (
                  <Typography color="text.secondary">Loading biography...</Typography>
                )}
              </Box>
            </Paper>
          </Container>

          <Box sx={{ pb: 3.75 }}>
            <Container maxWidth="lg" sx={{ width: "80vw", maxWidth: "80vw" }}>
              <Divider sx={{ mb: 3 }} />

              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body2" color="text.secondary">
                  © {new Date().getFullYear()} Ashanth Ganesh
                </Typography>

                <Tooltip title="Back to top">
                  <IconButton component="a" href="#top" size="small">
                    <ArrowUpward />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Container>
          </Box>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;