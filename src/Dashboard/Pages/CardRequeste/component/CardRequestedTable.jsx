import React from "react";
import { CardRequestedTableData } from "../../../../data/CardRequestedTableData";

function CardRequestedTable() {
  return (
    <div className="card-requested-table-section">
      {CardRequestedTableData.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Order Placed</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
        
          <tbody>
              {
                  CardRequestedTableData.map((data, index) =><tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.placeDate}</td>
                  <td>{data.status}</td>
                </tr> )
              }
            
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardRequestedTable;
