import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i class="fas fa-edit"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
      </li>
    );
  }
}
