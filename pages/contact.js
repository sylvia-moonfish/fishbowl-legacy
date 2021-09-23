import Avatar from "@mui/material/Avatar";
import { blue, indigo, red } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { Mail as MailIcon, Twitter as TwitterIcon } from "@mui/icons-material";

import * as React from "react";

import SiteInfo from "/data/site-info";
import DiscordIcon from "/src/components/icons/discord-icon";
import {
  generateFooter,
  generateHead,
  generatePreviewImage,
} from "/src/utility";

export default function Contact(props) {
  const AnchorComponent = styled("a")({
    color: "inherit",
    textDecoration: "none",
  });
  return (
    <React.Fragment>
      {generateHead(`연락처 | ${SiteInfo.siteTitle}`, "")}
      {generatePreviewImage("/avatar.jpg")}
      <Container maxWidth="md">
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Typography variant="body2">
              본 사이트에 기재된 내용 중 문의하고 싶으신 사항이 있으시거나
              오탈자 등을 발견하셨을 경우 아래 경로로 제보해주시면
              감사하겠습니다 :D
            </Typography>
          </Grid>
          <Grid item>
            <List>
              <AnchorComponent
                href={SiteInfo.twitterLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemButton
                  style={{
                    color: blue[100],
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <TwitterIcon
                        style={{
                          color: blue[100],
                        }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`@${SiteInfo.twitterUsername}`}
                    secondary="이곳을 클릭해 프로필 페이지로 이동 후 쪽지 혹은 개인 멘션으로 연락 바랍니다."
                  />
                </ListItemButton>
              </AnchorComponent>
              <AnchorComponent
                href={SiteInfo.discordInviteLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemButton
                  style={{
                    color: indigo[100],
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        color: indigo[100],
                      }}
                    >
                      <DiscordIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={SiteInfo.discordName}
                    secondary="이곳을 클릭해 제보 채널에 참가 후 메세지를 보내거나 위 디스코드 태그로 친구 추가 후 개인 메세지를 보내주세요!"
                  />
                </ListItemButton>
              </AnchorComponent>
              <AnchorComponent href={`mailto:${SiteInfo.email}`}>
                <ListItemButton
                  style={{
                    color: red[100],
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon
                        style={{
                          color: red[100],
                        }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="sylvia.moonfish@gmail.com"
                    secondary="이메일은 자주 확인하는 편이 아니라서 답변이 늦어질 수 있어요 :("
                  />
                </ListItemButton>
              </AnchorComponent>
            </List>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              파이널 판타지 14 게임 내에서 연락하고 싶으신 경우 아래 캐릭터로
              귓속말을 보내주시면 됩니다 :)
            </Typography>
          </Grid>
          <Grid item>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="/global-avatar.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Sylvia Moonfish"
                  secondary="서버: Midgardsormr / 데이터센터: Aether"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="/kor-avatar.png" />
                </ListItemAvatar>
                <ListItemText primary="플래티" secondary="서버: 카벙클" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>{generateFooter()}</Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
