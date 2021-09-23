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
import BisItemsHealer from "../../../../data/5.2/bis-items-healer";
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
  title: "5.2 백마도사 BiS 가이드",
  description: "파이널 판타지 14 패치 5.2 백마도사 BiS 가이드.",
};

const gearSets = [
  {
    type: "5.2bis",
    description: "신앙 838 추천 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 11899.14,
    hps: 0,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    mpRegen: 0,
    dialog: {
      intro:
        "무난하게 사용 가능한 추천 장비 세트. 조금 더 높은 신앙을 선호하시는 분들은 신앙 1049 장비 세트 참조.",
      gears: [
        {
          itemId: "edenchoirCane",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirWingsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRobeOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirArmletsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirBreechesOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumShoesOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirEarringsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirWristbandOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirRingOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfHealing",
          materiaIds: ["ch8", "sps8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "신앙 838 빠른 마시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 11897.59,
    hps: 0,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    mpRegen: 0,
    dialog: {
      intro: "빠른 마시를 선호하시는 분들을 위한 장비 세트.",
      gears: [
        {
          itemId: "edenchoirCane",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirWingsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRobeOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirArmletsOfHealing",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfHealing",
          materiaIds: ["sps8", "sps8"],
        },
        {
          itemId: "edenchoirBreechesOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumShoesOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirEarringsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirWristbandOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirRingOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "신앙 1049 높은 신앙 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 11805.16,
    hps: 0,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    mpRegen: 0,
    dialog: {
      intro:
        "신앙에 더 투자한 장비 세트. 힐러 운용에 아직 미숙하거나 MP 관리가 힘드신 분들께 추천.",
      gears: [
        {
          itemId: "edenchoirCane",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirWingsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRobeOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirArmletsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirBreechesOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedCrystariumShoesOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirEarringsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumWristbandOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirRingOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfHealing",
          materiaIds: ["ch8", "sps8"],
        },
      ],
    },
  },
  {
    type: "ultimate",
    description: "신앙 743 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 9697.76,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    dialog: {
      intro: "절 알렉산더용 장비 세트.",
      gears: [
        {
          itemId: "augmentedDeepshadowSignum",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceTempleChainOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceArmletsOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceChokerOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "deepshadowRingOfHealing",
          materiaIds: ["dh8", "det8"],
        },
      ],
    },
  },
  {
    type: "ultimate",
    description: "신앙 1915 높은 신앙 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sps: 0,
      pie: 0,
    },
    dps: 9288.1,
    hps: 0,
    mpRegen: 0,
    gcd: 0,
    foodId: "herringPie",
    dh: 0,
    ch: 0,
    dialog: {
      intro: "높은 신앙 절 알렉산더용 장비 세트.",
      gears: [
        {
          itemId: "edengraceCane",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowHoodOfHealing",
          materiaIds: ["ch8", "det8"],
        },
        {
          itemId: "augmentedDeepshadowScaleMailOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowArmguardsOfHealing",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edengraceTassetsOfHealing",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edengracePantaloonsOfHealing",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edengraceSandalsOfHealing",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfHealing",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "augmentedDeepshadowNecklaceOfHealing",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edengraceBraceletOfHealing",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edengraceRingOfHealing",
          materiaIds: ["ch8", "det8"],
        },
        {
          itemId: "augmentedDeepshadowRingOfHealing",
          materiaIds: ["det8", "det8"],
        },
      ],
    },
  },
];

class Whm extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
    const BisItems = {
      ...BisItemsCommon,
      ...BisItemsHealer,
    };

    gearSets.forEach((gearSet, gearSetIndex) => {
      gearSet.index = gearSetIndex;
      gearSet.attributes.main = Math.floor(
        Math.floor(
          (BisCalculations.level.main * BisCalculations.whm.mnd) / 100
        ) +
          BisCalculations.clan.mnd +
          BisCalculations.trait
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sps = BisCalculations.level.sub;
      gearSet.attributes.pie = BisCalculations.level.main;

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
      gearSet.mpRegen =
        Math.floor(
          ((gearSet.attributes.pie - BisCalculations.level.main) * 150) /
            BisCalculations.level.div
        ) + 200;

      const healingPotency = 700;
      const trait = 30;

      const fDet = Math.floor(
        ((gearSet.attributes.det - BisCalculations.level.main) * 130) /
          BisCalculations.level.div +
          1000
      );
      const fWd = Math.floor(
        (BisCalculations.level.main * BisCalculations.whm.mnd) / 1000 +
          gearSet.attributes.wd
      );
      const fCrit = Math.floor(
        ((gearSet.attributes.ch - BisCalculations.level.sub) * 200) /
          BisCalculations.level.div +
          1400
      );

      const fHmp =
        Math.floor(((gearSet.attributes.main - 340) * 100) / 304) + 100;

      const h1 = Math.floor(
        Math.floor(Math.floor(healingPotency * fHmp * fDet) / 100) / 1000
      );
      const h2 = Math.floor(
        Math.floor(Math.floor(Math.floor(h1 * fWd) / 100) * (trait + 100)) / 100
      );
      const h3ch = Math.floor(Math.floor(h2 * fCrit) / 1000);
      const healing =
        (h3ch * gearSet.ch) / 100 + (h2 * (100 - gearSet.ch)) / 100;

      gearSet.hps = Math.floor((healing / gearSet.gcd) * 100) / 100;
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
                        src="/icons/job-crystals/whm.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.2 기준 백마도사의 Best-in-Slot 장비 세트 목록입니다.
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
            <Typography variant="body2">
              백마도사의 BiS는 신앙 스탯에 따라 갈립니다. 본인이 자주 사망하는
              편이거나 파티원들이 자주 사망해 부활로 인한 MP 소모가 클 경우 높은
              신앙을 가진 장비 세트를 선택하는 것이 나을 수 있습니다.
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>평균 HPS</TableCell>
                    <TableCell>틱당 MP회복</TableCell>
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
                          <TableCell>{gearSet.hps}</TableCell>
                          <TableCell>{gearSet.mpRegen}</TableCell>
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
                    <TableCell>평균 HPS</TableCell>
                    <TableCell>틱당 MP회복</TableCell>
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
                          <TableCell>{gearSet.hps}</TableCell>
                          <TableCell>{gearSet.mpRegen}</TableCell>
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
                            <TableCell align="center">정신력</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">마시</TableCell>
                            <TableCell align="center">신앙</TableCell>
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
                            <TableCell align="center">
                              {gearSet.attributes.pie}
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

export default withStyles(styles)(withRouter(Whm));
