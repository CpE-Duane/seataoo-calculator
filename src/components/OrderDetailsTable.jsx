import React from 'react'

const OrderDetailsTable = ({ excelData }) => {

     function formatDate(inputDate) {
          const date = new Date(inputDate);
          const monthNames = [
               'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ];
          const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
          return formattedDate;
     }

     return (
          <>
               <div className="container-fluid my-5">
                    <div className='col col-lg-8 col-xxl-6 mx-auto'>
                         <div className="table-responsive">
                              <table className='table table-hover table-striped text-center'>
                                   <thead className='bg-danger text-white'>
                                        <tr>
                                             <th>Order Code</th>
                                             <th>Order Time</th>
                                             <th>Status</th>
                                             <th>Order Amount</th>
                                             <th>Process Amount</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             excelData && excelData.map((order) => {
                                                  return (
                                                       <tr key={order["Order ID"]}>
                                                            <td>{order["Order ID"]}</td>
                                                            <td>{formatDate(order["Order time"])}</td>
                                                            <td className='word-wrap'>
                                                                 {order["Picking status"] === "on_the_way" ? "OTW" : order["Picking status"]}
                                                            </td>
                                                            <td>{order["Order amount"]}</td>
                                                            <td>{order["Pickup Amount"]}</td>
                                                       </tr>
                                                  )
                                             })
                                        }
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default OrderDetailsTable