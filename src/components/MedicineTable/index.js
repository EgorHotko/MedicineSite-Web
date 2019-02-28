import React, { Component } from "react";
import "./styles.css";

export default class MedicineTable extends React.Component {
  render() {
    return (
      <div>
        <table class="table-container">
          <thead class="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr>
              <td> 1 </td>
              <td> Парацетамол </td>
              <td> 12 </td>
              <td> Стома </td>
              <td> 2 </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td> Ибуклин </td>
              <td> 12 </td>
              <td> Минскинтеркапс </td>
              <td> 2 </td>
            </tr>
            <tr>
              <td> 3 </td>
              <td> Ибупрофен </td>
              <td> 15 </td>
              <td> Фармалэнд </td>
              <td> 2 </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
