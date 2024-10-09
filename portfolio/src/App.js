import "./App.css"; // Custom styles
import Navbar from "./pages/Navbar";
import Content from "./pages/Content";
import { useState, useEffect } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [scale, setScale] = useState(1);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target.className === "modal") {
            closeModal();
        }
    };
    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/images/UBARBARESUME(2024).pdf`;
        link.download = "UBARBARESUME(2024).pdf"; // Specify the default file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const updateScale = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setScale(0.63); // Set scale for mobile
            } else {
                setScale(SpecialZoomLevel.PageFit); // Set scale for larger screens
            }
        };

        updateScale(); // Set initial scale based on current width
        window.addEventListener("resize", updateScale); // Update scale on resize

        return () => {
            window.removeEventListener("resize", updateScale); // Cleanup listener
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header d-flex flex-wrap">
                <Navbar openModal={openModal} />
                {isModalOpen && (
                    <div className="modal" onClick={handleModalClick}>
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>
                                ×
                            </span>
                            <Worker
                                workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
                            >
                                <Viewer
                                    fileUrl={`${process.env.PUBLIC_URL}/images/UBARBARESUME(2024).pdf`}
                                    //plugins={[defaultLayoutPluginInstance]} // Include the plugin here

                                    defaultScale={scale}
                                    theme={"dark"}
                                />
                            </Worker>
                            <button
                                className="buttonStyle"
                                onClick={downloadPDF}
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>
                )}
                <Content />
            </header>
        </div>
    );
}

export default App;
