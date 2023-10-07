import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import account from '../assets/account.png';
import login from '../assets/login.png';
import dot from '../assets/dot.png';
import desktopSite from '../assets/desktopSite.png';
import orders from '../assets/orders.png';
import findDate from '../assets/findDate.png';
import start from '../assets/start.png';
import end from '../assets/end.png';
import orderExport from '../assets/orderExport.png';
import downloaded from '../assets/downloaded.png';
import upload from '../assets/upload.png';
import files from '../assets/files.png';
import xlsFile from '../assets/xlsFile.png';
import details from '../assets/details.png';

const Instructions = () => {

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     return (
          <>
               <div className="container-fluid mt-3">
                    <div className="row">
                         <div className="col-12 text-center">
                              <h6>Don't know how to use? Click
                                   <span className='text-danger' onClick={handleShow} style={{ cursor: "pointer" }}> here.</span>
                              </h6>
                         </div>

                    </div>
               </div>

               <Modal show={show} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                         <Modal.Title>Instruction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <ol>
                              <li className='fw-bold'>
                                   Login to your seataoo account in any of your browser ex: Chrome. <a href="https://seataoo.com/" target='_blank'> seataoo.</a>
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={account} className='img-fluid' /></div>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mt-3 mt-lg-0 mx-auto mx-lg-0"><img src={login} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Click account then click orders.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={account} className='img-fluid' /></div>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mt-3 mt-lg-0 mx-auto mx-lg-0"><img src={orders} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Click the 3 dot button at the top.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={dot} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Find Desktop site and make sure you have check it.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={desktopSite} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Find Start Date and End Date at the top.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={findDate} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   For the start date, select what start date you want to check but for this example , I want to check the month of October, so I'll set the start date for Oct 1.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={start} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   For the end date , select what end date you want to check but for this example , I want to check the month of October, so I'll set the end date for Oct 31.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={end} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Click orders export to download the excel file.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={orderExport} className='img-fluid' /></div>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mt-3 mt-lg-0 mx-auto mx-lg-0"><img src={downloaded} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Click the Choose File to upload the excel file.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={upload} className='img-fluid' /></div>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mt-3 mt-lg-0 mx-auto mx-lg-0"><img src={files} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   Select the downloaded file from seataoo.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={xlsFile} className='img-fluid' /></div>
                                   </div>
                              </li>
                              <li className='fw-bold mt-4'>
                                   You can now view the details.
                                   <div className='row mt-2'>
                                        <div className="col-12 col-sm-9 col-lg-6 col-xl-3 mx-auto mx-lg-0"><img src={details} className='img-fluid' /></div>
                                   </div>
                              </li>
                         </ol>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                              Close
                         </Button>
                    </Modal.Footer>
               </Modal>
          </>
     )
}

export default Instructions