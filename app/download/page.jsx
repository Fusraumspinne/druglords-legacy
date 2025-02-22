"use client";

import React from 'react';
import NavigationBar from '@/components/navbar';
import { Button, Offcanvas } from 'react-bootstrap';
import DownloadIcon from '@mui/icons-material/Download';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '@/components/footer';

function Page() {
    const [show, setShow] = useState(false);

    const [downloadCounter, setDownloadCounter] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchCounter()
    }, [])

    const fetchCounter = async () => {
        try {
            const res = await fetch("/api/getCounter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                const counterData = await res.json();
                setDownloadCounter(counterData.counter);
            } else {
                console.error("Fehler beim Abrufen des Counters");
            }
        } catch (error) {
            console.error("Fehler beim Abrufen des Counters:", error);
        }
    }

    const handleCounterUpdate = async () => {
        try {
            const resSave = await fetch("/api/updateCounter", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            if (resSave.ok) {
                console.log("Counter erfolgreich aktualisiert");
                setDownloadCounter(downloadCounter + 1)
            } else {
                console.error("Fehler beim Aktualisieren des Counters");
            }
        } catch (error) {
            console.error("Fehler beim Aktualisieren des Counters:", error);
        }
    };


    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavigationBar />

            <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark" className='bg-dark text_white'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fs-3'>Download Informations</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <p className='fs-4 mt-3'>How to play</p>
                        <ol>
                            <li>Download the ZIP File: <br />Click the download button to save the ZIP file to your computer.</li>
                            <li>Extract the Files: <br />Once the download is complete, locate the ZIP file in your file explorer. Right-click on the file and select &quot;Extract All&quot; to unzip the contents.</li>
                            <li>Open the Game Folder: <br />After extraction, open the folder that was created.</li>
                            <li>Run the Game: <br />Inside the folder, locate the 4th file, which is the .exe file. Double-click on this file to launch the game.</li>
                            <li>Updating the Game: <br />If there is an update available, you will need to install it manually. However, rest assured that your progress will be saved across different versions of the game.</li>
                            <li>Need Assistance?: <br />If you have any questions or need support, feel free to contact us on Discord.</li>
                        </ol>
                    </div>
                    <div>
                        <p className='fs-4'>Security Problem</p>
                        <Image className='mb-4 h_100 w_100' src={"/img/Warning.png"} width={550} height={550} />
                        <p className='mb-1 p-0 fs-5'>Translation:</p>
                        <p>The Windows Microsoft Defender SmartScreen has prevented the launch of an unknown application. Running this application could pose a risk to your PC. Application: druglords legacy.exe Publisher: Unknown Publisher</p>
                        <p className='mb-1 p-0 fs-5'>Explanation:</p>
                        <p>This warning appears because Microsoft Defender SmartScreen has detected an application that is not verified or recognized, and therefore considered a potential risk to the computer. The protection mechanism then blocks the execution of the application to protect both the user and the system. I do not have a license for Windows, as it costs around $500 per year, but the application is safe. If you have any concerns, you can check the file with a malware scanner, such as virustotal.com.</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div style={{ flex: 1 }}>
                <div className="d-flex justify-content-center">
                    <div className="content_container text_white">
                        <div className="pt-5">
                            <div className="pt-5 d-flex">
                                <p className="fs-2 fw-bold m-0 p-0">Game Download</p>
                                <Button className="p-0 bg-dark border-0 ms-2" onClick={handleShow}><InfoIcon /></Button>
                            </div>

                            <p>Windows Version | Download Counter: {downloadCounter}</p>

                            <Image className="w_100 h_100 border_o" src={"/img/Hauptmenu.png"} width={1920} height={1080} />
                            <a className="text-decoration-none text_white" href="https://dl.dropboxusercontent.com/scl/fi/sbkphxsld8opy9c3ah8kt/Druglord-s-Legacy.zip?rlkey=gwsug1op91c0qteu5mmsgqq5p&st=db88i7br">
                                <Button className="custom_btn border-0 w_100 border_u" onClick={handleCounterUpdate}>
                                    <div className="normal_font"><DownloadIcon /> Download - Beta Version v.0.7.3 | Size ~ 750MB</div>
                                </Button>
                            </a>

                            <div className="d-flex align-items-center mt-2">
                                <Button className="p-0 bg-dark border-0 me-2" onClick={handleShow}><InfoIcon /></Button>
                                <p className="m-0 p-0 normal_font">Please read the additional information about the download!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page; 
