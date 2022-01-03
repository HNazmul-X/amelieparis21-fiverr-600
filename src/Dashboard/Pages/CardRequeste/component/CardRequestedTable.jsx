import React from "react";
import { CardRequestedTableData } from "../../../../data/CardRequestedTableData";

function CardRequestedTable() {
  return (
    <div className="card-requested-table-section">
     <div className="table-conatiner">
     {CardRequestedTableData.length > 0 ? (
        <table className="my-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Order Placed</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {CardRequestedTableData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.placeDate}</td>
                <td
                  className={
                    data.status === "Pending"
                      ? "st-pending"
                      : data.status === "Delivered"
                      ? "st-delivered"
                      : "st-rejected"
                  }
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
     </div>
    </div>
  );
}

export default CardRequestedTable;
