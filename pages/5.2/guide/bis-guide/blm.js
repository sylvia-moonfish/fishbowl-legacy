import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from "@material-ui/icons/Launch";

import { withRouter } from "next/router";

import React from "react";

import BisCalculations from "../../../../data/5.2/bis-calculations";
import BisItemsCommon from "../../../../data/5.2/bis-items-common";
import BisItemsInt from "../../../../data/5.2/bis-items-int";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const styles = (theme) => ({
  banner: {
    maxWidth: 128,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
  noMargin: {
    margin: 0,
  },
});

const pageData = {
  title: "5.2 흑마도사 BiS 가이드",
  description: "파이널 판타지 14 패치 5.2 흑마도사 BiS 가이드.",
};

const gearSets = [
  {
    type: "5.2bis",
    description: "글쿨 2.16초 빠른 마시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 19736.42,
    gcd: 0,
    foodId: "pickledHerring",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.16초 빠른 마시 장비 세트. 시뮬레이션 DPS는 가장 높으나 실제 전투에서는 극대 세트보다 낮은 DPS가 나오는 경우도 있음. 빠른 마시 흑마를 선호하시는 분들께 추천.",
      gears: [
        {
          itemId: "edenchoirRod",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirHatOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "augmentedCrystariumRobeOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "augmentedCrystariumShortglovesOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirTassetsOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirBreechesOfCasting",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "augmentedCrystariumBootsOfCasting",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edenchoirEarringsOfCasting",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfCasting",
          materiaIds: ["det8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfCasting",
          materiaIds: ["dh8", "sps8"],
        },
        {
          itemId: "edenchoirRingOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumRingOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "글쿨 2.33초 극대 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 19530.02,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.3초 극대 장비 세트. 특정 전투에서는 빠른 마시 세트보다 효율적일 수 있으나 운용 난이도가 높음.",
      gears: [
        {
          itemId: "edenchoirRod",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumHalfmaskOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "edenchoirTunicOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "edenchoirArmletsOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumHoseOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "edenchoirBootsOfCasting",
          materiaIds: ["ch8", "det8"],
        },
        {
          itemId: "edenchoirEarringsOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirChokerOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "edenchoirWristbandOfCasting",
          materiaIds: ["ch8", "sps8"],
        },
        {
          itemId: "edenchoirRingOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumRingOfCasting",
          materiaIds: ["ch8", "sps8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "글쿨 2.33초 캐스터 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 19478.66,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.33초 캐스터 호환 장비 세트. 장비 마테리아 세팅이 소환사/적마도사 BiS와 호환됨. 3캐스터를 전부 플레이할 경우 추천.",
      gears: [
        {
          itemId: "edenchoirRod",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumHalfmaskOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirTunicOfCasting",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edenchoirArmletsOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirTassetsOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumHoseOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumBootsOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirEarringsOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfCasting",
          materiaIds: ["ch8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirRingOfCasting",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumRingOfCasting",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "ultimate",
    description: "글쿨 2.23초 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
    },
    dps: 16161.52,
    gcd: 0,
    foodId: "pickledHerring",
    dh: 0,
    ch: 0,
    dialog: {
      intro: "글로벌 쿨다운 2.23초 절 알렉산더용 장비 세트.",
      gears: [
        {
          itemId: "edengraceRod",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowHoodOfCasting",
          materiaIds: ["dh8", "sps8"],
        },
        {
          itemId: "edengraceJacketOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfCasting",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceThighbootsOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceEarringOfCasting",
          materiaIds: ["dh8", "sps8"],
        },
        {
          itemId: "edengraceChokerOfCasting",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfCasting",
          materiaIds: ["dh8", "sps8"],
        },
        {
          itemId: "edengraceRingOfCasting",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedDeepshadowRingOfCasting",
          materiaIds: ["dh8", "sps8"],
        },
      ],
    },
  },
];

class Blm extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
    const BisItems = {
      ...BisItemsCommon,
      ...BisItemsInt,
    };

    gearSets.forEach((gearSet, gearSetIndex) => {
      gearSet.index = gearSetIndex;
      gearSet.attributes.main = Math.floor(
        Math.floor(
          (BisCalculations.level.main * BisCalculations.blm.int) / 100
        ) +
          BisCalculations.clan.int +
          BisCalculations.trait
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sps = BisCalculations.level.sub;

      gearSet.dialog.gears.forEach((gear) => {
        if (!BisItems[gear.itemId]) {
          console.log(gear.itemId);
          return;
        }

        if (BisItems[gear.itemId].stats.wd) {
          gearSet.attributes.wd = BisItems[gear.itemId].stats.wd;
        }

        const attributes = Object.keys(BisItems[gear.itemId].stats)
          .filter((key) => {
            return key !== "wd";
          })
          .map((key) => {
            return {
              key: key,
              value: BisItems[gear.itemId].stats[key],
            };
          });

        attributes.sort((a, b) => {
          return b.value - a.value;
        });

        const subAttrMax = attributes[1].value;

        const attributeObj = {};

        attributes.forEach((attr) => {
          attributeObj[attr.key] = attr.value;
        });

        gear.materiaIds.forEach((materiaId) => {
          if (!BisItems[materiaId]) {
            console.log(materiaId);
            return;
          }

          Object.keys(BisItems[materiaId].stats).forEach((key) => {
            if (!attributeObj[key]) {
              attributeObj[key] = BisItems[materiaId].stats[key];
            } else {
              attributeObj[key] += BisItems[materiaId].stats[key];
            }

            if (attributeObj[key] && attributeObj[key] > subAttrMax) {
              attributeObj[key] = subAttrMax;
            }
          });
        });

        Object.keys(attributeObj).forEach((key) => {
          if (!gearSet.attributes[key]) {
            gearSet.attributes[key] = attributeObj[key];
          } else {
            gearSet.attributes[key] += attributeObj[key];
          }
        });
      });

      if (!BisItems[gearSet.foodId]) {
        console.log(gearSet.foodId);
        return;
      }

      Object.keys(BisItems[gearSet.foodId].stats).forEach((key) => {
        if (!gearSet.attributes[key]) return;

        let value = Math.floor(
          (gearSet.attributes[key] *
            BisItems[gearSet.foodId].stats[key].value) /
            100
        );
        if (value > BisItems[gearSet.foodId].stats[key].max)
          value = BisItems[gearSet.foodId].stats[key].max;

        gearSet.attributes[key] += value;
      });

      gearSet.gcd =
        Math.floor(
          (Math.floor(
            2000 -
              Math.floor(
                ((gearSet.attributes.sps - BisCalculations.level.sub) * 130) /
                  BisCalculations.level.div +
                  1000
              )
          ) *
            2500) /
            1000 /
            10
        ) / 100;
      gearSet.ch =
        Math.floor(
          ((gearSet.attributes.ch - BisCalculations.level.sub) * 200) /
            BisCalculations.level.div +
            50
        ) / 10;
      gearSet.dh =
        Math.floor(
          ((gearSet.attributes.dh - BisCalculations.level.sub) * 550) /
            BisCalculations.level.div
        ) / 10;
    });

    return (
      <React.Fragment>
        {this.generateHead(
          pageData.title + " | " + SiteInfo.siteTitle,
          pageData.description
        )}
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Breadcrumbs>
              <Link
                className={this.props.classes.link}
                color="inherit"
                onClick={() => {
                  this.props.router.push("/5.2/guide/bis-guide");
                }}
              >
                5.2 BiS 가이드
              </Link>
              <Typography color="textPrimary">{pageData.title}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Container maxWidth="md">
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <Typography variant="h5">{pageData.title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <img
                        alt=""
                        className={this.props.classes.banner}
                        src="/icons/job-crystals/blm.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.2 기준 흑마도사의 Best-in-Slot 장비 세트 목록입니다.
                    아래 표에서 열람하고자 하는 세트 목록을 클릭해주세요.
                  </Typography>
                  <br />
                  <ul>
                    <li>
                      DPS 시뮬레이션 자료 출처:{" "}
                      <a
                        className={this.props.classes.link}
                        href="https://discord.gg/rkDkxQW"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          color="secondary"
                          icon={<LaunchIcon />}
                          label="Allagan Studies"
                          onClick={() => {}}
                          size="small"
                          variant="outlined"
                        />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">5.2 BiS</Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>글로벌 쿨다운</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets
                    .filter((gearSet) => gearSet.type === "5.2bis")
                    .map((gearSet, gearSetIndex) => {
                      return (
                        <TableRow
                          className={this.props.classes.link}
                          hover
                          key={gearSetIndex}
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              openedDialog: gearSet.index,
                            });
                          }}
                        >
                          <Hidden mdDown>
                            <TableCell>{gearSet.description}</TableCell>
                          </Hidden>
                          <TableCell>{gearSet.dps}</TableCell>
                          <TableCell>{gearSet.gcd} 초</TableCell>
                          <TableCell>
                            {BisItems[gearSet.foodId]
                              ? BisItems[gearSet.foodId].name
                              : gearSet.foodId}
                          </TableCell>
                          <TableCell>{gearSet.dh} %</TableCell>
                          <TableCell>{gearSet.ch} %</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">절 알렉산더 BiS</Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>글로벌 쿨다운</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets
                    .filter((gearSet) => gearSet.type === "ultimate")
                    .map((gearSet, gearSetIndex) => {
                      return (
                        <TableRow
                          className={this.props.classes.link}
                          hover
                          key={gearSetIndex}
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              openedDialog: gearSet.index,
                            });
                          }}
                        >
                          <Hidden mdDown>
                            <TableCell>{gearSet.description}</TableCell>
                          </Hidden>
                          <TableCell>{gearSet.dps}</TableCell>
                          <TableCell>{gearSet.gcd} 초</TableCell>
                          <TableCell>
                            {BisItems[gearSet.foodId]
                              ? BisItems[gearSet.foodId].name
                              : gearSet.foodId}
                          </TableCell>
                          <TableCell>{gearSet.dh} %</TableCell>
                          <TableCell>{gearSet.ch} %</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>{this.generateFooter()}</Grid>
        </Grid>
        {gearSets.map((gearSet, gearSetIndex) => {
          return (
            <Dialog
              fullWidth
              key={gearSetIndex}
              maxWidth="lg"
              onClose={() => {
                this.setState({
                  ...this.state,
                  openedDialog: -1,
                });
              }}
              open={this.state.openedDialog === gearSet.index}
              scroll="paper"
              TransitionComponent={transition}
            >
              <AppBar position="static">
                <Toolbar variant="dense">
                  <div className={this.props.classes.grow}>
                    <Typography variant="body1">
                      {gearSet.description}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        openedDialog: -1,
                      });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <DialogContent>
                <Grid container direction="column" spacing={5}>
                  <Grid item />
                  <Grid item>
                    <li>{gearSet.dialog.intro}</li>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">지능</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">마시</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell align="center">
                              {gearSet.attributes.main}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.ch}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.dh}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.det}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.sps}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell align="center">종류</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">마테리아</TableCell>
                            <TableCell align="center">필요 재화</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>음식</TableCell>
                            <TableCell>
                              {BisItems[gearSet.foodId] && (
                                <Avatar
                                  alt=""
                                  src={BisItems[gearSet.foodId].iconSrc}
                                  variant="square"
                                />
                              )}
                            </TableCell>
                            <TableCell>제작</TableCell>
                            <TableCell>
                              {BisItems[gearSet.foodId]
                                ? BisItems[gearSet.foodId].name
                                : gearSet.foodId}
                            </TableCell>
                            <TableCell colSpan={3} />
                          </TableRow>
                          {gearSet.dialog.gears.map((gear, gearId) => {
                            const item = BisItems[gear.itemId];

                            if (!item) {
                              return <div key={gearId}>{gear.itemId}</div>;
                            }

                            return (
                              <TableRow
                                key={gearId}
                                selected={
                                  item.from === "영웅 레이드" ||
                                  item.from === "극만신" ||
                                  item.from === "일반 레이드"
                                }
                              >
                                <TableCell>{item.type}</TableCell>
                                <TableCell>
                                  <Avatar
                                    alt=""
                                    src={item.iconSrc}
                                    variant="square"
                                  />
                                </TableCell>
                                <TableCell>{item.from}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                {gear.materiaIds.length > 0 ? (
                                  <TableCell>
                                    <Grid container direction="row" spacing={1}>
                                      {gear.materiaIds.map(
                                        (materiaId, materiaIdIndex) => {
                                          if (!BisItems[materiaId]) {
                                            return (
                                              <div key={materiaIdIndex}>
                                                {materiaId}
                                              </div>
                                            );
                                          }

                                          if (
                                            materiaIdIndex >=
                                            item.materiaSlots +
                                              item.overmeldSlots
                                          ) {
                                            return (
                                              <div key={materiaIdIndex}>
                                                {gear.itemId}
                                              </div>
                                            );
                                          }

                                          return (
                                            <Grid item key={materiaIdIndex}>
                                              <Tooltip
                                                title={BisItems[materiaId].name}
                                              >
                                                <Chip
                                                  avatar={
                                                    <Avatar
                                                      alt=""
                                                      src={
                                                        "/icons/materia-slots/" +
                                                        (materiaIdIndex <
                                                        item.materiaSlots
                                                          ? "blue"
                                                          : "red") +
                                                        BisItems[materiaId]
                                                          .materiaNumber +
                                                        ".png"
                                                      }
                                                    />
                                                  }
                                                  label={
                                                    BisItems[materiaId]
                                                      .shortName
                                                  }
                                                  size="small"
                                                  variant="outlined"
                                                />
                                              </Tooltip>
                                            </Grid>
                                          );
                                        }
                                      )}
                                    </Grid>
                                  </TableCell>
                                ) : (
                                  <TableCell />
                                )}
                                <TableCell>
                                  {item.required
                                    .split("\n")
                                    .map((str, strIndex) => {
                                      return (
                                        <p
                                          className={
                                            this.props.classes.noMargin
                                          }
                                          key={strIndex}
                                        >
                                          {str}
                                        </p>
                                      );
                                    })}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(Blm));
