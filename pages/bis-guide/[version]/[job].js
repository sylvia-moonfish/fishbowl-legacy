import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import { blue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
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

import { useRouter } from "next/router";
import React from "react";

import SiteInfo from "/data/site-info";
import {
  generateFooter,
  generateHead,
  generatePreviewImage,
} from "/src/utility";

const useStyles = makeStyles((theme) => ({
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
  textLink: {
    color: blue[500],
  },
  noMargin: {
    margin: 0,
  },
}));

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { version, job } = context.params;

  const parentPageData = await fetch(
    `${process.env.HOSTNAME}/data/bis-guide/${version}/bis-page-data.json`
  )
    .then((response) => {
      if (!response.ok) return { notFound: true };
      return response.json();
    })
    .catch((error) => {
      return { notFound: true };
    });
  if (parentPageData.notFound) return parentPageData;

  const pageData = await fetch(
    `${process.env.HOSTNAME}/data/bis-guide/${version}/bis-${job}-page-data.json`
  )
    .then((response) => {
      if (!response.ok) return { notFound: true };
      return response.json();
    })
    .catch((error) => {
      return { notFound: true };
    });
  if (pageData.notFound) return pageData;

  const gearData = await fetch(
    `${process.env.HOSTNAME}/data/bis-guide/${version}/bis-${job}-gear-data.json`
  )
    .then((response) => {
      if (!response.ok) return { notFound: true };
      return response.json();
    })
    .catch((error) => {
      return { notFound: true };
    });
  if (gearData.notFound) return gearData;

  return {
    props: {
      parentPageData: parentPageData,
      pageData: pageData,
      gearData: gearData,
      hostname: process.env.HOSTNAME,
    },
  };
}

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const BisGuideJob = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LinearProgress color="secondary" />;
  }

  const { version, job } = router.query;

  const [selectedTableIndex, setSelectedTableIndex] = React.useState(-1);
  const [selectedGearSetIndex, setSelectedGearSetIndex] = React.useState(-1);

  const classes = useStyles();

  return (
    <React.Fragment>
      {generateHead(
        `${props.pageData.pageTitle} | ${SiteInfo.siteTitle}`,
        props.pageData.pageDescription
      )}
      {generatePreviewImage(`${props.hostname}${props.pageData.banner}`)}
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Breadcrumbs>
            <Link
              className={classes.link}
              color="inherit"
              onClick={() => {
                router.push(`/bis-guide/${version}`);
              }}
            >
              {props.parentPageData.pageTitle}
            </Link>
            <Typography color="textPrimary">
              {props.pageData.pageTitle}
            </Typography>
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
                    <Typography variant="h5">
                      {props.pageData.pageTitle}
                    </Typography>
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
                      className={classes.banner}
                      src={props.pageData.banner}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography component="p" variant="body1">
                  {props.pageData.descriptionText}
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      문의사항 및 오탈자 제보:{" "}
                      <a className={classes.textLink} href="/contact">
                        링크
                      </a>
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        {props.gearData.map((table, tableIndex) => {
          return (
            <Grid item key={tableIndex}>
              <Toolbar>
                <Typography variant="h6">{table.title}</Typography>
              </Toolbar>
              <Typography variant="body2">{table.description}</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <Hidden mdDown>
                        <TableCell />
                      </Hidden>
                      {table.columnDefinitions.map(
                        (columnDefinition, columnDefinitionIndex) => {
                          return (
                            <TableCell key={columnDefinitionIndex}>
                              {columnDefinition.printedName}
                            </TableCell>
                          );
                        }
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.gearSets.map((gearSet, gearSetIndex) => {
                      return (
                        <React.Fragment key={gearSetIndex}>
                          <TableRow
                            className={classes.link}
                            hover
                            onClick={() => {
                              setSelectedTableIndex(tableIndex);
                              setSelectedGearSetIndex(gearSetIndex);
                            }}
                          >
                            <Hidden mdDown>
                              <TableCell>{gearSet.title}</TableCell>
                            </Hidden>
                            {table.columnDefinitions.map(
                              (columnDefinition, columnDefinitionIndex) => {
                                return (
                                  <TableCell key={columnDefinitionIndex}>
                                    {gearSet[columnDefinition.propertyName]}
                                    {columnDefinition.append}
                                  </TableCell>
                                );
                              }
                            )}
                          </TableRow>
                          <Dialog
                            fullWidth
                            maxWidth="lg"
                            onClose={() => {
                              setSelectedTableIndex(-1);
                              setSelectedGearSetIndex(-1);
                            }}
                            open={
                              selectedTableIndex === tableIndex &&
                              selectedGearSetIndex === gearSetIndex
                            }
                            scroll="paper"
                            TransitionComponent={transition}
                          >
                            <AppBar position="static">
                              <Toolbar variant="dense">
                                <div className={classes.grow}>
                                  <Typography variant="body1">
                                    {gearSet.title}
                                  </Typography>
                                </div>
                                <IconButton
                                  onClick={() => {
                                    setSelectedTableIndex(-1);
                                    setSelectedGearSetIndex(-1);
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
                                  <li>{gearSet.description}</li>
                                </Grid>
                                <Grid item>
                                  <TableContainer>
                                    <Table size="small">
                                      <TableHead>
                                        <TableRow>
                                          {table.statDefinitions.map(
                                            (
                                              statDefinition,
                                              statDefinitionIndex
                                            ) => {
                                              return (
                                                <TableCell
                                                  align="center"
                                                  key={statDefinitionIndex}
                                                >
                                                  {statDefinition.printedName}
                                                </TableCell>
                                              );
                                            }
                                          )}
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        <TableRow>
                                          {table.statDefinitions.map(
                                            (
                                              statDefinition,
                                              statDefinitionIndex
                                            ) => {
                                              return (
                                                <TableCell
                                                  align="center"
                                                  key={statDefinitionIndex}
                                                >
                                                  {
                                                    gearSet.attribute[
                                                      statDefinition
                                                        .propertyName
                                                    ]
                                                  }
                                                </TableCell>
                                              );
                                            }
                                          )}
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
                                          <TableCell align="center">
                                            종류
                                          </TableCell>
                                          <TableCell align="center">
                                            이름
                                          </TableCell>
                                          <TableCell align="center">
                                            마테리아
                                          </TableCell>
                                          <TableCell align="center">
                                            필요 재화
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        <TableRow>
                                          <TableCell>음식</TableCell>
                                          <TableCell>
                                            <Avatar
                                              src={gearSet.meal.iconSrc}
                                              variant="square"
                                            />
                                          </TableCell>
                                          <TableCell>제작</TableCell>
                                          <TableCell>
                                            {gearSet.meal.nameKo
                                              ? gearSet.meal.nameKo
                                              : gearSet.meal.nameEn}
                                          </TableCell>
                                          <TableCell colSpan={3} />
                                        </TableRow>
                                        {gearSet.gears.map(
                                          (gear, gearIndex) => {
                                            return (
                                              <TableRow
                                                key={gearIndex}
                                                selected={
                                                  gear.from === "영웅 레이드" ||
                                                  gear.from === "극만신" ||
                                                  gear.from === "일반 레이드"
                                                }
                                              >
                                                <TableCell>
                                                  {gear.type}
                                                </TableCell>
                                                <TableCell>
                                                  <Avatar
                                                    src={gear.iconSrc}
                                                    variant="square"
                                                  />
                                                </TableCell>
                                                <TableCell>
                                                  {gear.from}
                                                </TableCell>
                                                <TableCell>
                                                  {gear.nameKo
                                                    ? gear.nameKo
                                                    : gear.nameEn}
                                                </TableCell>
                                                {gear.materias.length === 0 ? (
                                                  <TableCell />
                                                ) : (
                                                  <TableCell>
                                                    <Grid
                                                      container
                                                      direction="row"
                                                      spacing={1}
                                                    >
                                                      {gear.materias.map(
                                                        (
                                                          materia,
                                                          materiaIndex
                                                        ) => {
                                                          return (
                                                            <Grid
                                                              item
                                                              key={materiaIndex}
                                                            >
                                                              {materia.nameEn ? (
                                                                <Tooltip
                                                                  title={
                                                                    materia.nameKo
                                                                      ? materia.nameKo
                                                                      : materia.nameEn
                                                                  }
                                                                >
                                                                  <Chip
                                                                    avatar={
                                                                      <Avatar
                                                                        src={`/icons/materia-slots/${
                                                                          materiaIndex <
                                                                          gear.materiaSlots
                                                                            ? "blue"
                                                                            : "red"
                                                                        }${
                                                                          materia.materiaNumber
                                                                        }.png`}
                                                                      />
                                                                    }
                                                                    label={
                                                                      materia.shortName
                                                                    }
                                                                    size="small"
                                                                    variant="outlined"
                                                                  />
                                                                </Tooltip>
                                                              ) : (
                                                                <Chip
                                                                  label={
                                                                    materia.shortName
                                                                  }
                                                                  color="secondary"
                                                                  size="small"
                                                                  variant="outlined"
                                                                />
                                                              )}
                                                            </Grid>
                                                          );
                                                        }
                                                      )}
                                                    </Grid>
                                                  </TableCell>
                                                )}
                                                <TableCell>
                                                  {gear.required
                                                    .split("\n")
                                                    .map((str, strIndex) => {
                                                      return (
                                                        <p
                                                          className={
                                                            classes.noMargin
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
                                          }
                                        )}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Grid>
                              </Grid>
                            </DialogContent>
                          </Dialog>
                        </React.Fragment>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          );
        })}
        <Grid item>{generateFooter()}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BisGuideJob;
