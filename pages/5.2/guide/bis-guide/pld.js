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
  title: "5.2 나이트 BiS 가이드",
  description: "파이널 판타지 14 패치 5.2 나이트 BiS 가이드.",
};

const gearSets = [
  {
    type: "firstWeek",
    description: "노금단 제작 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 9146.1,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "1주차 풀금단을 하기 부담스러우신 분들을 위한 노금단 제작 세트. 1~2층 트라이에 적합.",
      gears: [
        {
          itemId: "neoIshgardianSword",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianShield",
          materiaIds: [],
        },
        {
          itemId: "neoIshgardianCapOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianTopOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "neoIshgardianGauntletsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianPlateBeltOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianBottomsOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "neoIshgardianSolleretsOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "neoIshgardianEarringOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianChokerOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianWristbandsOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8"],
        },
      ],
    },
  },
  {
    type: "firstWeek",
    description: "노금단 + 극만신 + 일반 레이드 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 9373.1,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "1주차 풀금단을 하기 부담스러우신 분들을 위한 노금단 세트에 첫 주에 획득 가능한 극만신 무기와 일반 레이드 상의, 그리고 석판 반지를 조합한 세트. 1~3층 트라이에 적합. 실력에 자신이 있다면 4층도 도전 가능.",
      gears: [
        {
          itemId: "rubyBroadsword",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "rubyScutum",
          materiaIds: [],
        },
        {
          itemId: "neoIshgardianCapOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edencallMailOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianGauntletsOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianPlateBeltOfFending",
          materiaIds: ["dh8"],
        },
        {
          itemId: "neoIshgardianBottomsOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "neoIshgardianSolleretsOfFending",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "neoIshgardianEarringOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianChokerOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "neoIshgardianWristbandsOfFending",
          materiaIds: ["ch8"],
        },
        {
          itemId: "crystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8"],
        },
      ],
    },
  },
  {
    type: "firstWeek",
    description: "풀금단 제작 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 9653.4,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro: "1주차 풀금단 제작 세트. 1~4층 트라이에 적합.",
      gears: [
        {
          itemId: "neoIshgardianSword",
          materiaIds: ["dh8", "dh8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianShield",
          materiaIds: [],
        },
        {
          itemId: "neoIshgardianCapOfFending",
          materiaIds: ["dh8", "dh8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianTopOfFending",
          materiaIds: ["ch8", "ch8", "ch8", "ch7", "dh7"],
        },
        {
          itemId: "neoIshgardianGauntletsOfFending",
          materiaIds: ["dh8", "dh8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianPlateBeltOfFending",
          materiaIds: ["ch8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianBottomsOfFending",
          materiaIds: ["ch8", "ch8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianSolleretsOfFending",
          materiaIds: ["ch8", "ch8", "ch8", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianEarringOfFending",
          materiaIds: ["ch8", "ch8", "ch7", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianChokerOfFending",
          materiaIds: ["ch8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianWristbandsOfFending",
          materiaIds: ["ch8", "ch8", "ch7", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8", "dh8", "dh7", "dh7", "dh7"],
        },
      ],
    },
  },
  {
    type: "firstWeek",
    description: "풀금단 + 극만신 + 일반 레이드 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 9771.9,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "1주차 풀금단 제작 세트에 첫 주에 획득 가능한 극만신 무기와 일반 레이드 상의, 그리고 석판 반지를 조합한 세트. 1~4층 트라이에 적합.",
      gears: [
        {
          itemId: "rubyBroadsword",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "rubyScutum",
          materiaIds: [],
        },
        {
          itemId: "neoIshgardianCapOfFending",
          materiaIds: ["dh8", "dh8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "edencallMailOfFending",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "neoIshgardianGauntletsOfFending",
          materiaIds: ["dh8", "dh8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianPlateBeltOfFending",
          materiaIds: ["ch8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianBottomsOfFending",
          materiaIds: ["ch8", "ch8", "dh8", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianSolleretsOfFending",
          materiaIds: ["ch8", "ch8", "ch8", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianEarringOfFending",
          materiaIds: ["ch8", "ch8", "ch7", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianChokerOfFending",
          materiaIds: ["ch8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "neoIshgardianWristbandsOfFending",
          materiaIds: ["ch8", "ch8", "ch7", "ch7", "ch7"],
        },
        {
          itemId: "neoIshgardianRingOfFending",
          materiaIds: ["dh8", "dh8", "dh7", "dh7", "dh7"],
        },
        {
          itemId: "crystariumRingOfFending",
          materiaIds: ["ch8", "dh8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "글쿨 2.42초 암기/건브 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10821.3,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운을 2.42초로 맞추고 나이트의 스킬 로테이션에 따라 DPS를 최적화한 장비 세트. 암흑기사 2.43초 장비 세트와 건브레이커 2.42초 장비 세트와도 호환되어 전사를 제외한 3탱 공용으로 사용하기 좋음.",
      gears: [
        {
          itemId: "edenchoirBastardSword",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "edenchoirScutum",
          materiaIds: [],
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
    description: "글쿨 2.39초 빠른 기시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10818.1,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "글로벌 쿨다운을 2.39초로 맞춘 장비 세트. 빠른 기시를 선호하거나 핑이 안 좋으신 분, 혹은 특정 전투를 위해 로테이션을 조절 중이신 분들께 추천.",
      gears: [
        {
          itemId: "edenchoirBastardSword",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "edenchoirScutum",
          materiaIds: [],
        },
        {
          itemId: "edenchoirHelmOfFending",
          materiaIds: ["ch8", "ch8"],
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
    description: "글쿨 2.41초 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 8893.4,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "절 알렉산더용 장비 세트. 클리어 후에는 무기를 절 알렉산더 무기로 바꿀 것. (방패는 그대로 유지)",
      gears: [
        {
          itemId: "edengraceBastardSword",
          materiaIds: ["ch8", "dh8"],
        },
        {
          itemId: "edenchoirScutum",
          materiaIds: [],
        },
        {
          itemId: "augmentedDeepshadowHelmOfFending",
          materiaIds: ["dh8", "sks8"],
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
          itemId: "edengraceEarringOfFending",
          materiaIds: ["dh8", "dh8"],
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
    description: "글쿨 2.42초 암기/건브 호환 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
      ten: 0,
    },
    dps: 10831.7,
    gcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    dialog: {
      intro:
        "패치 5.2 글쿨 2.42초 장비 세트에서 머리 장비와 무기 마테를 바꾼 장비 세트. 약간의 DPS 향상을 기대할 수 있으나 직격 확률에 크게 의존하므로 운이 좋지 않으면 전보다 더 낮은 DPS가 나올 수도 있음.",
      gears: [
        {
          itemId: "edenchoirBastardSword",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirScutum",
          materiaIds: [],
        },
        {
          itemId: "idealizedChevaliersTempleChain",
          materiaIds: ["dh8", "dh8", "dh8", "sks8", "sks8"],
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

class Pld extends PageComponent {
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
          (BisCalculations.level.main * BisCalculations.pld.str) / 100
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
                        src="/icons/job-crystals/pld.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.2 기준 나이트의 Best-in-Slot 장비 세트 목록입니다.
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
              <Typography variant="h6">1주차 출발 BiS</Typography>
            </Toolbar>
            <Typography variant="body2">
              패치 5.2 1주차 영식 공략을 위한 스타팅 BiS 리스트입니다. 꼭
              풀금단을 하지 않아도 영식 1~2층까지는 도전해볼만 하지만, 3층
              이상부터는 극만신 무기와 일반 레이드 방어구를 꼭 지참하거나 풀금단
              제작 장비를 착용하실 것을 권장드립니다.
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
                    .filter((gearSet) => gearSet.type === "firstWeek")
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

export default withStyles(styles)(withRouter(Pld));
