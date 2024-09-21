"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import { Button, Offcanvas } from 'react-bootstrap';
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

function Page() {  // Komponentennamen mit einem Großbuchstaben
    const [releaseDate, setReleaseDate] = useState("2024-09-10"); // Korrektur des Datumsformats
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
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
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

export default Page;  // Exportiere die Komponente mit dem neuen Namen