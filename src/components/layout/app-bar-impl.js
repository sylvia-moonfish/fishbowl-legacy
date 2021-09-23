import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import Link from "next/link";
import { useRouter } from "next/router";

import SiteInfo from "/data/site-info";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const AppBarImpl = (props) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar variant="dense">
        <IconButton
          className={classes.menuButton}
          color="inherit"
          edge="start"
          onClick={props.toggleMobileOpen}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow}>
          <Link href="/">
            <a className={classes.link}>
              <Typography variant="h6">{SiteInfo.siteTitle}</Typography>
            </a>
          </Link>
        </div>
        <Button
          color="secondary"
          onClick={() => {
            router.push("/contact");
          }}
          variant="outlined"
        >
          문의사항/오탈자 제보
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarImpl;
