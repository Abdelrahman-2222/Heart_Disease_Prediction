import React, { useContext } from 'react';
import Sidebar from "./Sidebar";
import { ThemeContext } from '../ThemeContext';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaAdjust } from 'react-icons/fa';




function Dashboard() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const backgroundColor = theme === 'light' ? 'white' : 'black';
    return (
        <div className={`my-component theme-${theme} dashboard`} style={{ backgroundColor }}>
            <div className="header" style={{ position: 'absolute', top: 0, right: 0 }}>
                <ButtonGroup>
                    <ToggleButton variant="outline-secondary" onClick={toggleTheme}>
                        <FaAdjust />
                    </ToggleButton>
                </ButtonGroup>
            </div>
            <Sidebar />
            <div className="main-content-container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                </nav>
                <div className="container w-75">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="mb-2">Ischemic Heart Disease</h1>
                            <p className="lead">
                                Ischemic heart disease (IHD), also known as coronary artery disease, is a condition in which the blood
                                supply to the heart is reduced, resulting in decreased oxygen and nutrient delivery to the heart muscle.
                                This can lead to chest pain (angina), shortness of breath, heart attack, and other complications.
                            </p>
                            <img
                                src="https://www.phsd.ca/wp-content/uploads/2015/11/ischaemicHD_Age.png"
                                alt="Heart"
                                className="img-fluid mb-4"
                                style={{ maxWidth: '800px', height: 'auto' }}
                            />
                            <p>
                                Risk factors for IHD include smoking, high blood pressure, high
                                cholesterol, obesity, diabetes, and a family history of heart
                                disease. Lifestyle changes such as regular exercise, a healthy
                                diet, and quitting smoking can help reduce the risk of IHD.
                            </p>
                            <img
                                src="https://heart.bmj.com/content/heartjnl/101/15/1182/F5.large.jpg?width=800&height=600&carousel=1"
                                alt="Healthy food"
                                className="img-fluid mb-4"
                                style={{ maxWidth: '800px', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;