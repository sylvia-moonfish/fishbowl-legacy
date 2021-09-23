import createEmotionServer from "@emotion/server/create-instance";

import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";

import createEmotionCache from "/src/createEmotionCache";
import theme from "/src/theme";

export default class FishbowlDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

FishbowlDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: function enhanceApp(App) {
        return function _enhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        };
      },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
