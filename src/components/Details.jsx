import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Details = ({ excelData }) => {

     const [pendingOrders, setPendingOrders] = useState(0);
     const [onTheWay, setOnTheWay] = useState(0);
     const [pickedUp, setPickedUp] = useState(0);
     const [delivered, setDelivered] = useState(0);
     const [confirmed, setConfirmed] = useState(0);
     const [totalOrderAmount, setTotalOrderAmount] = useState(0);
     const [totalPickUpAmount, setTotalPickUpAmount] = useState(0);
     const [pendingPickupAmount, setPendingPickupAmount] = useState(0)
     const [pendingOrderAmount, setPendingOrderAmount] = useState(0)
     const [profit, setProfit] = useState(0)

     const getOrderDetails = () => {
          let sumOfpendingOrders = 0;
          let sumOfOnTheWay = 0;
          let sumOfPickedUp = 0;
          let sumOfDelivered = 0;
          let sumOfConfirmed = 0

          excelData.forEach((order) => {
               if (order["Picking status"] === "pending") {
                    sumOfpendingOrders++;
               } else if (order["Picking status"] === "on_the_way") {
                    sumOfOnTheWay++;
               } else if (order["Picking status"] === "picked up") {
                    sumOfPickedUp++;
               } else if (order["Picking status"] === "delivered") {
                    sumOfDelivered++;
               } else if (order["Picking status"] === "confirmed") {
                    sumOfConfirmed++;
               } 
          })

          setPendingOrders(sumOfpendingOrders);
          setOnTheWay(sumOfOnTheWay);
          setPickedUp(sumOfPickedUp);
          setDelivered(sumOfDelivered);
          setConfirmed(sumOfConfirmed);
     }

     const getTotals = () => {
          let orderAmount = 0;
          let pendingOrderAmt = 0;

          let pickupAmount = 0;
          let pendingPickupAmt = 0;

          excelData.forEach((order) => {
               orderAmount += order["Order amount"]
               pendingOrderAmt += order["Picking status"] === "pending" ? order["Order amount"] : 0

               pendingPickupAmt += order["Picking status"] === "pending" ? order["Pickup Amount"] : 0
               pickupAmount += order["Pickup Amount"]
          })

          setPendingOrderAmount(pendingOrderAmt)
          setPendingPickupAmount(pendingPickupAmt)
          setTotalOrderAmount(orderAmount);
          setTotalPickUpAmount(pickupAmount);

          const profit = (orderAmount - pendingOrderAmt) - (pickupAmount - pendingPickupAmt)

          setProfit(profit);
     }

     useEffect(() => {
          if (excelData) {
               getOrderDetails();
               getTotals();
          }
     }, [excelData])

     const formatToPeso = (value) => {
          const roundedValue = value.toFixed(2);
          const formattedValue = `₱${roundedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          return formattedValue;
     }

     return (
          <>
               <div className='container-fluid'>
                    <div className='row d-flex justify-content-center'>
                         <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                              <div className="card shadow-lg border-0 bg-danger text-white rounded-0">
                                   <div className="card-header text-center fw-bold">ORDER SUMMARY</div>
                                   <div className="card-body bg-white">
                                        <ul className='list-group'>
                                             <li className='list-group-item'>
                                                  Pending Orders: <span className='fst-italic text-success fw-bold float-end'>{pendingOrders}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Delivered: <span className='fst-italic text-success fw-bold float-end'>{delivered}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  On The Way: <span className='fst-italic text-success fw-bold float-end'>{onTheWay}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Picked Up: <span className='fst-italic text-success fw-bold float-end'>{pickedUp}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Confirmed: <span className='fst-italic text-success fw-bold float-end'>{confirmed}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Total Orders: <span className='fst-italic text-success fw-bold float-end'>{excelData?.length}</span>
                                             </li>
                                             <br />
                                             <li className='list-group-item'>
                                                  Processing Rate:
                                                  <span className='fst-italic text-success fw-bold float-end'>
                                                       {(((excelData?.length - pendingOrders) / excelData?.length ) * 100).toFixed(2)}%
                                                  </span>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-3 mt-md-0">
                              <div className="card shadow-lg border-0 bg-danger text-white rounded-0">
                                   <div className="card-header text-center fw-bold">TOTALS</div>
                                   <div className="card-body bg-white">
                                        <ul className='list-group'>
                                             <li className='list-group-item'>
                                                  Total Order Amount: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(totalOrderAmount)}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Pending Order Amount: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(pendingOrderAmount)}</span>
                                             </li>

                                             <br />
                                             <li className='list-group-item'>
                                                  Total Process Amount: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(totalPickUpAmount)}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Current Process Amount: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(totalPickUpAmount - pendingPickupAmount)}</span>
                                             </li>
                                             <li className='list-group-item'>
                                                  Funds Needed: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(pendingPickupAmount)}</span>
                                             </li>
                                             <br />
                                             <li className='list-group-item'>
                                                  Total Profit: <span className='fst-italic text-success fw-bold float-end'>{formatToPeso(profit)}</span>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </>
     )
}

export default Details