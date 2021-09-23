import { Close as CloseIcon } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";
import * as React from "react";

import SiteInfo from "/data/site-info";
import {
  generateFooter,
  generateHead,
  generatePreviewImage,
} from "/src/utility";

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

const transition = React.forwardRef(function Transition(props, ref) {
  return <Grow {...props} ref={ref} />;
});

export default function BisGuideJob(props) {
  const [selectedTableIndex, setSelectedTableIndex] = React.useState(-1);
  const [selectedGearSetIndex, setSelectedGearSetIndex] = React.useState(-1);

  const router = useRouter();

  if (router.isFallback) {
    return <LinearProgress color="secondary" />;
  }

  const { version, job } = router.query;

  const ImgComponent = styled("img")({
    maxWidth: 128,
    width: "100%",
  });

  const AnchorComponent = styled("a")({
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  });

  const DivComponent = styled("div")({
    flexGrow: 1,
  });

  const ParagraphComponent = styled("p")({
    margin: 0,
  });

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
              color="inherit"
              onClick={() => {
                router.push(`/bis-guide/${version}`);
              }}
              sx={{
                color: "inherit",
                cursor: "pointer",
                textDecoration: "none",
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
                  justifyContent="center"
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
                  justifyContent="center"
                >
                  <Grid item>
                    <ImgComponent src={props.pageData.banner} />
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
                      <AnchorComponent href="/contact">링크</AnchorComponent>
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
                      <TableCell
                        sx={{
                          display: {
                            xs: "none",
                            md: "table-cell",
                          },
                        }}
                      />
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
                            hover
                            onClick={() => {
                              setSelectedTableIndex(tableIndex);
                              setSelectedGearSetIndex(gearSetIndex);
                            }}
                            sx={{
                              color: "inherit",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            <TableCell
                              sx={{
                                display: {
                                  xs: "none",
                                  md: "table-cell",
                                },
                              }}
                            >
                              {gearSet.title}
                            </TableCell>
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
                                <DivComponent>
                                  <Typography variant="body1">
                                    {gearSet.title}
                                  </Typography>
                                </DivComponent>
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
                                        <TableRow hover>
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
                                                hover
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
                                                        <ParagraphComponent
                                                          key={strIndex}
                                                        >
                                                          {str}
                                                        </ParagraphComponent>
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
}
