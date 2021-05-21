import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Array = (props) => {
  const {
    array,
    onArrayValueChange,
    onhandleSearchValuechange,
    onSearchkeypressed,
    searchKey,
    searchBoxStyle,
    shouldDisplayResult,
    searching,
    arraySize,
    onhandleArraySizeValuechange,
    keyFound,
    generateButtonPlaced,
    onfillrandomButtonPressed,
    onSortButtonPressed,
  } = props;

  function Result() {
    if (shouldDisplayResult && !searching) {
      if (keyFound)
        return <span className="search_result SearchKeyFound p-2">Found</span>;
      else
        return (
          <span className="search_result searchKeyCheckedAndNotFound p-2">
            Not Found
          </span>
        );
    } else return "";
  }

  function searchbuttonpressed() {
    if (!shouldDisplayResult && !searching) {
      return onSearchkeypressed;
    }
    return null;
  }

  function Sort() {
    return (
      <button
        className="btn btn-sm btn-info ml-2 "
        onClick={onSortButtonPressed}
      >
        Sort
      </button>
    );
  }

  return (
    <React.Fragment>
      <Paper className="p-3">
        <div>
          <span>
            <span className="label">Size:</span>
            <input
              value={arraySize}
              type="text"
              className="arraysizebox m-2"
              onChange={onhandleArraySizeValuechange}
              maxlength="3"
              size="3"
            ></input>
          </span>

          <Button
            onClick={generateButtonPlaced}
            variant="outlined"
            color="primary"
            size="small"
          >
            Generate
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            className="ml-2"
            onClick={onfillrandomButtonPressed}
          >
            Fill Random
          </Button>

          <Sort />
        </div>
        <div className="mt-3 ml-2">
          <span>
            <span className="label">What To Search</span>

            <input
              value={searchKey}
              type="text"
              className={"arraysizebox m-2 " + searchBoxStyle}
              onChange={onhandleSearchValuechange}
              maxlength="3"
              size="3"
            ></input>
          </span>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            className=""
            onClick={searchbuttonpressed()}
          >
            Search
          </Button>

          <span>{props.children} </span>

          <Result />
        </div>
      </Paper>

      <div className="array ml-2 mt-5">
        {array.map((element) => (
          <input
            className={"arrayBox " + element.customClass}
            type="text"
            key={element.index}
            value={element.value}
            name={element.index}
            onChange={onArrayValueChange}
            maxlength="3"
            size="3"
          ></input>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Array;
