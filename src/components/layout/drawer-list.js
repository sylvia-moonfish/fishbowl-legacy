import {
  Archive as ArchiveIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import * as React from "react";
import { useRouter } from "next/router";

export default function DrawerList(props) {
  const badgeUpdateDate = "2021/05/24";

  React.useEffect(() => {
    if (window) {
      if (
        !window.localStorage.badgeDate ||
        window.localStorage.badgeDate !== badgeUpdateDate
      ) {
        window.localStorage.badgeDate = badgeUpdateDate;
        setBadgeNumber(0);
      }
    }
  }, []);

  const router = useRouter();

  const [isArchiveOpen, setArchiveOpen] = React.useState(false);
  const toggleArchiveOpen = () => {
    setArchiveOpen(!isArchiveOpen);
  };
  const [badgeNumber, setBadgeNumber] = React.useState(0);

  return (
    <React.Fragment>
      <List component="nav">
        <ListItemButton
          alignItems="flex-start"
          onClick={() => {
            props.setMobileOpen(false);
            router.push("/");
          }}
        >
          <ListItemAvatar>
            <Avatar src="/avatar.jpg" />
          </ListItemAvatar>
          <ListItemText primary="플래티" secondary="Sylvia Moonfish" />
        </ListItemButton>
        <Divider />
        <ListSubheader component="div">글로벌 &amp; 한국 서버</ListSubheader>
        <ListItemButton
          onClick={() => {
            props.setMobileOpen(false);
            router.push("/bis-guide/5.5");
          }}
          selected={router.asPath.indexOf("/bis-guide/5.5") !== -1}
        >
          <ListItemAvatar>
            <Avatar src="/icons/job-guide.png" />
          </ListItemAvatar>
          <ListItemText primary="5.5 BiS 가이드" />
        </ListItemButton>
        <Divider />
        <ListSubheader component="div">공략 &amp; 팁</ListSubheader>
        <ListItemButton
          onClick={() => {
            if (window !== undefined) {
              window.localStorage.badgeDate = badgeUpdateDate;
              setBadgeNumber(0);
              window.open(
                "https://youtube.com/playlist?list=PLaD-EPHYB6mzru3_df7OfNWyw5Hal30mk",
                "_blank"
              );
            }
          }}
        >
          <ListItemAvatar>
            <Badge color="secondary" badgeContent={badgeNumber}>
              <Avatar src="/icons/jobs/tank.png" variant="square" />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary="[탱팁] 재생 영식"
            secondary={`${badgeUpdateDate} 업데이트`}
          />
        </ListItemButton>
        <Divider />
      </List>
    </React.Fragment>
  );
}
