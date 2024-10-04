import "./App.css"; // You can still keep your custom styles if needed
import Navbar from "./pages/Navbar";
import Content from "./pages/Content";
import { useState } from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <div className="App">
            <header className="App-header d-flex flex-wrap">
                <Navbar openModal={openModal} />
                {isModalOpen && (
                    <div className="modal" onClick={handleModalClick}>
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}></span>
                            <iframe
                                className="pdf-viewer"
                                src="./images/UBARBARESUME(2024).pdf"
                                frameBorder={0}
                                width="100%"
                                height="500px"
                                title="Resume"
                            />
                        </div>
                    </div>
                )}
                <Content />
            </header>
        </div>
    );
}

export default App;
