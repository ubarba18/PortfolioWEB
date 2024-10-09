import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";

// Set the workerSrc for PDF.js

const ResumeViewer = ({ fileUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setScale(0.63); // Scale for mobile
            } else {
                setScale(1); // Scale for larger screens
            }
        };

        updateScale(); // Set initial scale based on current width
        window.addEventListener("resize", updateScale); // Update scale on resize

        return () => {
            window.removeEventListener("resize", updateScale); // Cleanup listener
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="resume-viewer">
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={index} pageNumber={index + 1} scale={scale} />
                ))}
            </Document>
        </div>
    );
};

export default ResumeViewer;
