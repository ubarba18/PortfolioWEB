import "./App.css";
import "./pages/AboutMe";
import Navbar from "./pages/Navbar";
import About from "./pages/AboutMe";
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
    return (
        <div className="App">
            <header className="App-header">
                <Navbar openModal={openModal} />
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content" onClick={closeModal}>
                            <span className="close">&times;</span>
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
