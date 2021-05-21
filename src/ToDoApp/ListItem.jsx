import React from "react";

const ListItem = (props) => {
  function IsCompleted() {
    if (props.Name.isCompleted) return "Completed";
    return "";
  }

  return (
    <div
      className="card border-secondary mb-1 listItem_container"
      onClick={() => props.onListItemClick(props.Name)}
    >
      <div className="card-header ">
        <span className="date_field">{props.Name.dateTime}</span>
        <span className="badge badge-success badge-sm complete_badge mx-3">
          <IsCompleted></IsCompleted>
        </span>
        <button
          key={props.id + "delete"}
          className="btn btn-sm btn-danger delete_btn"
          onClick={() => props.onDelete(props.Name)}
        >
          X
        </button>
      </div>
      <div className="card-body">
        <span key={props.id} className="card-text">
          {props.Name.value}
        </span>
      </div>
    </div>
  );
};

export default ListItem;
