import React from "react";
import "./sorting.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const BarsContainer = (props) => {
  const { bars, OnGenerateButtonPressed, OnSortButtonPressed, barsPosition } =
    props;

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid item className="w-100 mb-3">
          <Paper
            square
            elevation={1}
            style={{ backgroundColor: "rgba(15, 1, 1,  0.147)" }}
          >
            <Button
              variant="contained"
              onClick={OnGenerateButtonPressed}
              color="secondary"
              size="small"
              className="ml-2"
            >
              Generate
            </Button>
            <Button
              variant="contained"
              className="m-3"
              color="secondary"
              size="small"
              onClick={OnSortButtonPressed}
            >
              Sort
            </Button>
          </Paper>
        </Grid>

        <Grid item className="w-100 bars_container">
          <Grid
            container
            justify="center"
            direction="column"
            alignItems={barsPosition}
          >
            {bars.map((e) => (
              <div
                className={"bar " + e.barsCustomClass}
                style={{ width: "" + e.width + "px" }}
                key={e.pos}
              >
                -
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BarsContainer;
