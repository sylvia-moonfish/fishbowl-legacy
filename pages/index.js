import {
  Twitter as TwitterIcon,
  YouTube as YoutubeIcon,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { blue, purple, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import * as React from "react";

import SiteInfo from "/data/site-info";
import TwitchIcon from "/src/components/icons/twitch-icon";
import {
  generateFooter,
  generateHead,
  generatePreviewImage,
} from "/src/utility";

export async function getStaticProps(context) {
  return {
    props: {
      hostname: process.env.HOSTNAME,
    },
  };
}

export default function Index(props) {
  const AnchorComponent = styled("a")({
    color: "inherit",
    textDecoration: "none",
  });

  return (
    <React.Fragment>
      {generateHead(SiteInfo.siteTitle, SiteInfo.siteDescription)}
      {generatePreviewImage(`${props.hostname}/banner.png`)}
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Card>
            <CardMedia
              image="/banner.png"
              sx={{
                height: {
                  xs: 300,
                  md: 400,
                },
              }}
            />
            <CardContent align="center">
              <Grid
                alignItems="center"
                container
                direction="column"
                spacing={1}
              >
                <Grid item>
                  <Typography paragraph variant="h6">
                    {SiteInfo.siteTitle}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <AnchorComponent
                        href={SiteInfo.globalFFlogsLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          avatar={<Avatar src="/icons/fflogs.png" />}
                          label="Sylvia Moonfish@Midgardsormr/Aether"
                          onClick={() => {}}
                          size="small"
                          variant="outlined"
                        />
                      </AnchorComponent>
                    </Grid>
                    <Grid item>
                      <Chip
                        label="플래티@카벙클"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <AnchorComponent
                        href={SiteInfo.twitterLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          avatar={
                            <TwitterIcon
                              style={{
                                color: blue[100],
                              }}
                            />
                          }
                          label="@sylvia_moonfish"
                          onClick={() => {}}
                          size="small"
                          style={{
                            color: blue[100],
                          }}
                          variant="outlined"
                        />
                      </AnchorComponent>
                    </Grid>
                    <Grid item>
                      <AnchorComponent
                        href={SiteInfo.twitchLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          avatar={
                            <TwitchIcon
                              style={{
                                color: purple[100],
                              }}
                            />
                          }
                          label="sylvia_moonfish"
                          onClick={() => {}}
                          size="small"
                          style={{
                            color: purple[100],
                          }}
                          variant="outlined"
                        />
                      </AnchorComponent>
                    </Grid>
                    <Grid item>
                      <AnchorComponent
                        href={SiteInfo.youtubeLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          avatar={
                            <YoutubeIcon
                              style={{
                                color: red[100],
                              }}
                            />
                          }
                          label="플래티"
                          onClick={() => {}}
                          size="small"
                          style={{
                            color: red[100],
                          }}
                          variant="outlined"
                        />
                      </AnchorComponent>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>{generateFooter()}</Grid>
      </Grid>
    </React.Fragment>
  );
}
