"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import { Button, Offcanvas } from 'react-bootstrap';
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

function Page() {  
    const [releaseDate, setReleaseDate] = useState("2024-10-10"); 
    const [isDownloadEnabled, setIsDownloadEnabled] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const today = new Date();
        const release = new Date(releaseDate);

        if (release > today) {
            setIsDownloadEnabled(false);
        } else {
            setIsDownloadEnabled(true);
        }
    }, [releaseDate]);

    return (
        <div>
            <Navbar />

            <Offcanvas show={show} onHide={handleClose} className='bg-dark text-success'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Security Problem</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image className='custom-img mb-4' src={"/img/Warning.png"} width={350} height={350} />
                    Translation: <br />
                    The computer was protected by Windows Microsoft Defender SmartScreen prevented an unknown app from starting. Running this app may pose a risk to your PC. App: druglords legacy.exe Publisher: Unknown Publisher <br /> <br />
                    Explanation: <br />
                    This warning appears because Microsoft Defender SmartScreen has detected an application that is not recognized or verified and therefore considered a potential risk to the computer. The protection mechanism then blocks the execution of the application to protect both the user and the system. That's because I don't have a license for Windows because it cost around 500$ a year, but it's safe and if have any concerns u can check the file by an malware scanner as example virustotal.com.
                </Offcanvas.Body>
            </Offcanvas>

            <div style={{ marginTop: "100px" }} className='d-flex justify-content-center'>
                <div className='custom-card outline-success p-4'>
                    <div className='d-flex p-0 m-0'>
                        <p className='fs-1 text-success m-0 p-0'>Game Download</p>
                        <Button className='bg-dark text-success m-0 p-0 ms-2' style={{ border: "none" }} onClick={handleShow}><InfoIcon /></Button>
                    </div>
                    <p className='text-success'>Release Date: {releaseDate}</p>

                    <Image className='custom-img mb-4' src={"/img/Platzhalter.png"} width={350} height={350} />

                    {isDownloadEnabled ? (
                        <Button className='bg-dark button-100' variant="outline-success">
                            <a className='text-success text-decoration-none' href="/Druglord's Legacy.zip" download><DownloadIcon /> Download</a>
                        </Button>
                    ) : (
                        <Button className='bg-dark button-100' variant="outline-success" disabled>
                            <DownloadIcon /> Download
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page; 