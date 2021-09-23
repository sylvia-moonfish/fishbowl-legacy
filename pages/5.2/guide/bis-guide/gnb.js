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
import BisItemsTank from "../../../../data/5.2/bis-items-tank";
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
  title: "5.2 건브레이커 BiS 가이드",
  description: "파이널 판타지 14 패치 5.2 건브레이커 BiS 가이드.",
};

const gearSets = [
  {
    type: "5.2bis",
    description: "글쿨 2.42초 나이트/암기 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10777.1,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "적정 글로벌 쿨다운 2.42초 장비 세트. 어느 전투에서든 사용하기 무난한 추천 세트. 나이트 2.42초, 암흑기사 2.43초 장비 세트와 호환.",
      gears: [
        {
          itemId: "edenchoirGunblade",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumCircletOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTabardOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGauntletsOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirTassetsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirCuissesOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumThighbootsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumEarringsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirChokerOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirRingOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "글쿨 2.40초 암기 호환 빠른 기시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10772.7,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.40초 장비 세트. 조금 더 빠른 기시를 선호하시는 분들께 추천. 암흑기사 2.38초 장비 세트와 호환.",
      gears: [
        {
          itemId: "edenchoirGunblade",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumCircletOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTabardOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGauntletsOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirTassetsOfFending",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirCuissesOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumThighbootsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumEarringsOfFending",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirChokerOfFending",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfFending",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirRingOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "ultimate",
    description: "글쿨 2.40초 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 8829.2,
    gcd: 0,
    foodId: "stuffedHighlandCabbage",
    dh: 0,
    ch: 0,
    dialog: {
      intro: "글로벌 쿨다운 2.40초 절 알렉산더용 장비 세트.",
      gears: [
        {
          itemId: "edengraceManatrigger",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceMailOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceGauntletsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowBreechesOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceGreavesOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceBraceletOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowRingOfFending",
          materiaIds: ["ch8", "ch8"],
        },
      ],
    },
  },
  {
    type: "5.25bis",
    description: "글쿨 2.40초 보강 추천 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10805.6,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.40초 장비 세트. 글로벌 쿨다운도 여유 있으며 높은 직격 확률로 시뮬레이션 DPS도 가장 높음. 다만 실전에서는 실제 직격 확률에 따라 DPS 편차가 클 수 있으므로 주의.",
      gears: [
        {
          itemId: "edenchoirGunblade",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "idealizedBodyguardsBlinder",
          materiaIds: ["ch8", "dh8", "dh8", "dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTabardOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGauntletsOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirTassetsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirCuissesOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumThighbootsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumEarringsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirChokerOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfFending",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirRingOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "5.25bis",
    description: "글쿨 2.41초 나이트/암기 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10784.8,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운 2.41초 장비 세트. 나이트 2.42초, 암흑기사 2.43초 장비 세트와 호환.",
      gears: [
        {
          itemId: "edenchoirGunblade",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "idealizedBodyguardsBlinder",
          materiaIds: ["ch8", "dh8", "dh8", "dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTabardOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGauntletsOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirTassetsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirCuissesOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumThighbootsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumEarringsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirChokerOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirRingOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
];

class Gnb extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
    const BisItems = {
      ...BisItemsCommon,
      ...BisItemsTank,
    };

    gearSets.forEach((gearSet, gearSetIndex) => {
      gearSet.index = gearSetIndex;
      gearSet.attributes.main = Math.floor(
        Math.floor(
          (BisCalculations.level.main * BisCalculations.gnb.str) / 100
        ) + BisCalculations.clan.str
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sks = BisCalculations.level.sub;
      gearSet.attributes.ten = BisCalculations.level.sub;

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
                ((gearSet.attributes.sks - BisCalculations.level.sub) * 130) /
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
      gearSet.ten =
        Math.floor(
          ((gearSet.attributes.ten - BisCalculations.level.sub) * 100) /
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
                        src="/icons/job-crystals/gnb.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.2 기준 건브레이커의 Best-in-Slot 장비 세트
                    목록입니다. 아래 표에서 열람하고자 하는 세트 목록을
                    클릭해주세요.
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
            <Typography variant="body2">
              건브레이커 스킬 로테이션을 위한 적정 글로벌 쿨다운은 2.42초입니다.
              다만 건브레이커의 경우는 적정 글로벌 쿨다운을 맞추지 못하더라도
              DPS 차가 크지 않기 때문에 장비를 맞춰가는 도중에는 글쿨에 크게
              신경쓰지 않아도 괜찮습니다.
            </Typography>
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
                    <TableCell>불굴 추가 방어력</TableCell>
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
                          <TableCell>{gearSet.ten} %</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">5.25 BiS</Typography>
            </Toolbar>
            <Typography variant="body2">
              패치 5.25에 추가되는 신규 극만신에서 얻을 수 있는 Relic 장비를
              포함한 BiS 리스트입니다.
            </Typography>
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
                    <TableCell>불굴 추가 방어력</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets
                    .filter((gearSet) => gearSet.type === "5.25bis")
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
                          <TableCell>{gearSet.ten} %</TableCell>
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
                    <TableCell>불굴 추가 방어력</TableCell>
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
                          <TableCell>{gearSet.ten} %</TableCell>
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
                            <TableCell align="center">힘</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">기시</TableCell>
                            <TableCell align="center">불굴</TableCell>
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
                              {gearSet.attributes.sks}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.ten}
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

export default withStyles(styles)(withRouter(Gnb));
