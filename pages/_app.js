import { CacheProvider } from "@emotion/react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import Head from "next/head";
import Router from "next/router";
import PropTypes from "prop-types";
import * as React from "react";

import SiteInfo from "/data/site-info";
import AppBarImpl from "/src/components/layout/app-bar-impl";
import DrawerImpl from "/src/components/layout/drawer-impl";
import createEmotionCache from "/src/createEmotionCache";
import theme from "/src/theme";
import "/styles/fonts.css";

Router.events.on("routeChangeComplete", (url) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("config", SiteInfo.gtmId, {
      page_location: url,
    });
  }
});

const clientSideEmotionCache = createEmotionCache();

export default function FishbowlApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isMobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobileOpen = () => {
    setMobileOpen(!isMobileOpen);
  };

  const MainComponent = styled("main")({
    display: "flex",
  });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
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
        <MainComponent>
          <AppBarImpl
            isMobileOpen={isMobileOpen}
            toggleMobileOpen={toggleMobileOpen}
          />
          <DrawerImpl
            isMobileOpen={isMobileOpen}
            setMobileOpen={setMobileOpen}
            toggleMobileOpen={toggleMobileOpen}
          />
          <Container
            sx={{
              flexGrow: 1,
              padding: 3,
              width: "100%",
            }}
          >
            <Toolbar />
            <Component {...pageProps} />
          </Container>
        </MainComponent>
      </ThemeProvider>
    </CacheProvider>
  );
}

FishbowlApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
