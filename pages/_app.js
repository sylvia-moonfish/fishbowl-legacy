import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/styles";

import Head from "next/head";
import Router from "next/router";
import React from "react";

import SiteInfo from "/data/site-info";
import AppBarImpl from "/src/components/layout/app-bar-impl";
import DrawerImpl from "/src/components/layout/drawer-impl";
import theme from "/src/theme";
import "/styles/fonts.css";

Router.events.on("routeChangeComplete", (url) => {
  if (typeof window !== "undefined") {
    window.gtag("config", SiteInfo.gtmId, {
      page_location: url,
    });
  }
});

export const cache = createCache({ key: "css", prepend: true });

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
  },
  root: {
    display: "flex",
  },
}));

const FishbowlApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [isMobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobileOpen = () => {
    setMobileOpen(!isMobileOpen);
  };
  const [currentMenu, setCurrentMenu] = React.useState("");

  const classes = useStyles();

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="#4a148c" name="theme-color" />
        <link href="/avatar.jpg" rel="icon" type="image/jpg" />
        <meta content="website" property="og:type" />
        <meta content="summary" name="twitter:card" />
        <meta content={"@" + SiteInfo.twitterUsername} name="twitter:site" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${SiteInfo.gtmId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${SiteInfo.gtmId}');
          `,
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.root}>
          <AppBarImpl
            isMobileOpen={isMobileOpen}
            toggleMobileOpen={toggleMobileOpen}
          />
          <DrawerImpl
            currentMenu={currentMenu}
            isMobileOpen={isMobileOpen}
            setMobileOpen={setMobileOpen}
            toggleMobileOpen={toggleMobileOpen}
          />
          <Container className={classes.content}>
            <Toolbar />
            <Component {...pageProps} />
          </Container>
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FishbowlApp;
