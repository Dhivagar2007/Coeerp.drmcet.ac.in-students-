import React, { useState } from 'react';

const Dashboard = ({ user, onLogout }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="dashboard-container noselect">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
                    <button className="burger-menu" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <img src="/images/entity/entitylogo.jpg" alt="Logo" className="header-logo" />
                    <div className="header-title-group">
                        <div className="header-title-main">Dr. Mahalingam College of Engineering and Technology</div>
                        <div className="header-title-sub">(An Autonomous Institution, Affiliated to Anna University, Chennai.)</div>
                    </div>
                </div>

                <div className="header-user">
                    <div>
                        <div>User : {user?.name || 'NAVEEN P'}</div>
                        <div style={{ fontSize: '0.8em', opacity: 0.8 }}>{user?.roll || '727624BSC046'}</div>
                        <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="logout-link">LOGOUT</a>
                    </div>
                    <img
                        src={user?.photo || "../photos/727624BSC046.jpg"}
                        alt="Profile"
                        className="user-avatar"
                        onError={(e) => { e.target.onerror = null; e.target.src = "/images/entity/entitylogo.jpg"; }}
                    />
                </div>
            </header>

            {/* Body */}
            <div className="dashboard-body">
                {/* Sidebar Overlay for Mobile */}
                <div
                    className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
                    onClick={() => setIsSidebarOpen(false)}
                ></div>

                {/* Sidebar */}
                <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    {['Student\'s Profile', 'Int. Assessments', 'End Sem Results', 'Exam Registration', 'Open Elective Reg.'].map((item, index) => (
                        <button key={index} className="sidebar-btn" onClick={() => setIsSidebarOpen(false)}>
                            {item}
                        </button>
                    ))}
                </aside>

                {/* Content */}
                <main className="dashboard-content">

                    <div className="disclaimer-box">
                        <b>Disclaimer :</b> The college is not responsible for any inadvertent error that may have crept in the results being published on Net. The results published on Net are for immediate information to the students. These cannot be treated as original mark sheets.
                    </div>

                    <div className="table-responsive">
                        <table className="result-table">
                            <thead>
                                <tr>
                                    <th colSpan="8" className="main-header">
                                        RESULTS OF THIRD SEMESTER : [2025 - ODD SEMESTER - END SEMESTER]
                                    </th>
                                </tr>
                                <tr className="col-header">
                                    <th className="text-center">Sem</th>
                                    <th className="text-center">Part</th>
                                    <th className="text-left">Course Code</th>
                                    <th className="text-left">Name of the Course</th>
                                    <th className="text-right">Credit</th>
                                    <th className="text-center">Result</th>
                                    <th className="text-center">GR.</th>
                                    <th className="text-right">G.P.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23MAT305</td>
                                    <td className="text-left">DISCRETE MATHEMATICS</td>
                                    <td className="text-right">4.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">B</td>
                                    <td className="text-right">6.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23SCT301</td>
                                    <td className="text-left">COMPUTER ORGANIZATION AND ARCHITECTURE</td>
                                    <td className="text-right">3.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">A</td>
                                    <td className="text-right">8.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23SCT302</td>
                                    <td className="text-left">PRINCIPLES OF COMMUNICATION AND CYBER ATTACKS</td>
                                    <td className="text-right">3.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">B+</td>
                                    <td className="text-right">7.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23SCI302</td>
                                    <td className="text-left">DATABASE DESIGN</td>
                                    <td className="text-right">4.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">A</td>
                                    <td className="text-right">8.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23SCI301</td>
                                    <td className="text-left">OBJECT ORIENTED PROGRAMMING</td>
                                    <td className="text-right">4.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">B+</td>
                                    <td className="text-right">7.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23SCL301</td>
                                    <td className="text-left">PROGRAMMING USING PYTHON LABORATORY</td>
                                    <td className="text-right">2.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">O</td>
                                    <td className="text-right">10.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23VAT301</td>
                                    <td className="text-left">UNIVERSAL HUMAN VALUES 2: UNDERSTANDING HARMONY</td>
                                    <td className="text-right">3.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">A+</td>
                                    <td className="text-right">9.00</td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="text-center">3</td>
                                    <td className="text-left">23ESL301</td>
                                    <td className="text-left">PROFESSIONAL SKILLS 2: PROBLEM SOLVING SKILLS & LOGICAL THINKING 2</td>
                                    <td className="text-right">1.00</td>
                                    <td className="text-center">PASS</td>
                                    <td className="text-center">B+</td>
                                    <td className="text-right">7.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
