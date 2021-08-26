import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary">
                <i className="fas fa-keyboard p-1"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo Items.."
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success my-3 w-100"
                : "btn btn-block btn-primary my-3 w-100"
            }
          >
            {editItem ? "EDIT TODO" : "ADD TODO"}
          </button>
        </form>
      </div>
    );
  }
}
