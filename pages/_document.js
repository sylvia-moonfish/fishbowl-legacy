import createEmotionServer from "@emotion/server/create-instance";

import { ServerStyleSheets } from "@material-ui/styles";

import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { cache } from "/pages/_app";

const { extractCritical } = createEmotionServer(cache);

export default class FishbowlDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

FishbowlDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  };
};
