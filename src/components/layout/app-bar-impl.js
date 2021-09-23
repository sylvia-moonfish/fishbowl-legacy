import { Menu as MenuIcon } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import SiteInfo from "/data/site-info";

export default function AppBarImpl(props) {
  const router = useRouter();

  const DivComponent = styled("div")({
    flexGrow: 1,
  });

  const AnchorComponent = styled("a")({
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          edge="start"
          onClick={props.toggleMobileOpen}
          sx={{
            marginRight: 2,
            display: {
              lg: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link href="/" passHref>
          <AnchorComponent>
            <Typography variant="h6">{SiteInfo.siteTitle}</Typography>
          </AnchorComponent>
        </Link>
        <DivComponent />
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
}
