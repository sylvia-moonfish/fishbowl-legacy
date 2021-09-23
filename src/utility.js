import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Head from "next/head";

import SiteInfo from "/data/site-info";

export function generateHead(title, description) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta content={description} key="description" name="description" />

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
    </Head>
  );
}

export function generatePreviewImage(url) {
  return (
    <Head>
      <meta content={url} property="og:image" />
      <meta content={url} name="twitter:image" />
    </Head>
  );
}

export function generateFooter() {
  return (
    <Grid container justify="center">
      <Typography
        align="center"
        paragraph
        style={{
          color: "rgba(255, 255, 255, 0.7)",
        }}
        variant="caption"
      >
        {SiteInfo.siteTitle} ⓒ {SiteInfo.copyrightYear} {SiteInfo.author}. All
        Rights Reserved.
      </Typography>
    </Grid>
  );
}
