import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";

import ArchiveIcon from "@material-ui/icons/Archive";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useRouter } from "next/router";

import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const DrawerList = (props) => {
  const badgeUpdateDate = "2021/05/24";

  useEffect(() => {
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

  const classes = useStyles();

  return (
    <React.Fragment>
      <List component="nav">
        <ListItem
          alignItems="flex-start"
          button
          onClick={() => {
            props.setMobileOpen(false);
            router.push("/");
          }}
        >
          <ListItemAvatar>
            <Avatar src="/avatar.jpg" />
          </ListItemAvatar>
          <ListItemText primary="플래티" secondary="Sylvia Moonfish" />
        </ListItem>
        <Divider />
        <ListSubheader component="div">글로벌 &amp; 한국 서버</ListSubheader>
        <ListItem
          button
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
        </ListItem>
        <Divider />
        <ListSubheader component="div">공략 &amp; 팁</ListSubheader>

        <ListItem
          button
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
        </ListItem>
        <Divider />
        <ListSubheader component="div">아카이브</ListSubheader>
        <ListItem button onClick={toggleArchiveOpen}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="BiS 아카이브" />
          {isArchiveOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={isArchiveOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              dense
              onClick={() => {
                props.setMobileOpen(false);
                router.push("/5.2/guide/bis-guide");
              }}
              selected={router.asPath.indexOf("/5.2/guide/bis-guide") !== -1}
            >
              <ListItemText primary="5.2 BiS 가이드" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </React.Fragment>
  );
};

export default DrawerList;
