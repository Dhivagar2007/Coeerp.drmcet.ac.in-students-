import React, { useState, useEffect } from 'react';

const Dashboard = ({ user, onLogout }) => {
    const [currentView, setCurrentView] = useState('profile');
    const [browserDims, setBrowserDims] = useState({ width: window.innerWidth, height: window.innerHeight });

    // Mock student data
    const studentName = user?.name || 'NAVEEN P';
    const rollNo = user?.roll || '727624BSC046';

    useEffect(() => {
        const handleResize = () => {
            setBrowserDims({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Inline style overrides for sidebar buttons based on provided HTML
    const btnStyle = {
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif"',
        fontSize: '14px',
        width: '130px',
        height: '30px',
        marginLeft: '10px',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid #fff',
        borderRight: '1px solid #fff',
        paddingBottom: '5px',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '0px 0px 10px 0px',
        marginTop: '10px'
    };

    // --- VIEWS ---

    // 1. Student Profile View (basicdetails.php)
    const ProfileView = () => (
        <div style={{ padding: '20px', fontFamily: 'Verdana, Geneva, sans-serif' }}>
            <h2 style={{ color: '#009999' }}>Student Profile</h2>
            <p><strong>Name:</strong> {studentName}</p>
            <p><strong>Roll No:</strong> {rollNo}</p>
            <p><strong>Course:</strong> B.Sc. Computer Systems and Design</p>
            {/* Add more profile fields as needed, keeping it simple as specific content wasn't fully provided */}
        </div>
    );

    // 2. End Sem Results View (examresults.php) - Exact implementation from Block 2
    const ResultsView = () => (
        <div className="divqplistpan" style={{ width: '99%', height: '98%', marginTop: '5px', margin: '0.5%', display: 'block', border: '1px solid #ccc', borderRadius: '10px', overflow: 'auto' }}>
            <div style={{ width: '80%', fontFamily: 'Tahoma, Geneva, sans-serif', display: 'block', border: '1px solid #ccc', marginTop: '10px', borderRadius: '10px', fontSize: '12px', fontWeight: 'normal', backgroundColor: '#ccc', textAlign: 'left', padding: '5px' }}>
                <b>Disclaimer :</b> The college is not responsible for any inadvertent error that may have crept in the results being published on Net. The results published on Net are for immediate information to the students. These cannot be treated as original mark sheets.
            </div>

            <div id="divpane1" style={{ borderRadius: '5px', display: 'block', verticalAlign: 'center', lineHeight: '30px', marginTop: '10px', width: '80%', textAlign: 'center', fontSize: '16px', color: '#00F' }}>
                <table className="tblBRDefault">
                    <tbody>
                        {/* Common Headers for both */}
                        <tr style={{ height: '40px' }}>
                            <th colSpan="8" style={{ backgroundColor: 'rgb(115,60,145)', color: 'white' }}>RESULTS OF THIRD SEMESTER : [2025 - ODD SEMESTER - END SEMESTER]</th>
                        </tr>
                        <tr style={{ height: '30px' }}>
                            <th>Sem</th><th>Part</th><th>Course Code</th><th>Name of the Course</th><th>Credit</th><th>Result</th><th>GR.</th><th>G.P.</th>
                        </tr>

                        {user?.roll === '727624BSC011' ? (
                            /* Data Rows for DHANUSH S (727624BSC011) */
                            <>
                                <tr style={{ height: '25px', color: 'black' }}><td>1</td><td>3</td><td>23MAI103</td><td align="left" style={{ width: '700px' }}>LINEAR ALGEBRA AND INFINITE SERIES</td><td>4.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>1</td><td>3</td><td>23CST101</td><td align="left" style={{ width: '700px' }}>PROBLEM SOLVING USING C</td><td>3.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>1</td><td>3</td><td>23EEI102</td><td align="left" style={{ width: '700px' }}>INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING</td><td>4.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>2</td><td>3</td><td>23MAI203</td><td align="left" style={{ width: '700px' }}>CALCULUS AND TRANSFORMS</td><td>4.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>2</td><td>3</td><td>23ITT201</td><td align="left" style={{ width: '700px' }}>DATA STRUCTURES</td><td>3.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>2</td><td>3</td><td>23EEI201</td><td align="left" style={{ width: '700px' }}>DIGITAL SYSTEM DESIGN</td><td>3.00</td><td>RE-APPEAR</td><td>RA</td><td></td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23MAT305</td><td align="left" style={{ width: '700px' }}>DISCRETE MATHEMATICS</td><td>4.00</td><td>PASS</td><td>B</td><td>6.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCT301</td><td align="left" style={{ width: '700px' }}>COMPUTER ORGANIZATION AND ARCHITECTURE</td><td>3.00</td><td>PASS</td><td>A</td><td>8.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCT302</td><td align="left" style={{ width: '700px' }}>PRINCIPLES OF COMMUNICATION AND CYBER ATTACKS</td><td>3.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCI302</td><td align="left" style={{ width: '700px' }}>DATABASE DESIGN</td><td>4.00</td><td>PASS</td><td>A</td><td>8.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCI301</td><td align="left" style={{ width: '700px' }}>OBJECT ORIENTED PROGRAMMING</td><td>4.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCL301</td><td align="left" style={{ width: '700px' }}>PROGRAMMING USING PYTHON LABORATORY</td><td>2.00</td><td>PASS</td><td>O</td><td>10.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23VAT301</td><td align="left" style={{ width: '700px' }}>UNIVERSAL HUMAN VALUES 2: UNDERSTANDING HARMONY</td><td>3.00</td><td>PASS</td><td>A+</td><td>9.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23ESL301</td><td align="left" style={{ width: '700px' }}>PROFESSIONAL SKILLS-2: PROBLEM SOLVING SKILLS &amp; LOGICAL THINKING 2</td><td>1.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                            </>
                        ) : (
                            /* Data Rows for NAVEEN P (727624BSC046) - Default */
                            <>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23MAT305</td><td align="left" style={{ width: '700px' }}>DISCRETE MATHEMATICS</td><td>4.00</td><td>PASS</td><td>B</td><td>6.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCT301</td><td align="left" style={{ width: '700px' }}>COMPUTER ORGANIZATION AND ARCHITECTURE</td><td>3.00</td><td>PASS</td><td>A</td><td>8.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCT302</td><td align="left" style={{ width: '700px' }}>PRINCIPLES OF COMMUNICATION AND CYBER ATTACKS</td><td>3.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCI302</td><td align="left" style={{ width: '700px' }}>DATABASE DESIGN</td><td>4.00</td><td>PASS</td><td>A</td><td>8.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCI301</td><td align="left" style={{ width: '700px' }}>OBJECT ORIENTED PROGRAMMING</td><td>4.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23SCL301</td><td align="left" style={{ width: '700px' }}>PROGRAMMING USING PYTHON LABORATORY</td><td>2.00</td><td>PASS</td><td>O</td><td>10.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23VAT301</td><td align="left" style={{ width: '700px' }}>UNIVERSAL HUMAN VALUES 2: UNDERSTANDING HARMONY</td><td>3.00</td><td>PASS</td><td>A+</td><td>9.00</td></tr>
                                <tr style={{ height: '25px', color: 'black' }}><td>3</td><td>3</td><td>23ESL301</td><td align="left" style={{ width: '700px' }}>PROFESSIONAL SKILLS-2: PROBLEM SOLVING SKILLS &amp; LOGICAL THINKING 2</td><td>1.00</td><td>PASS</td><td>B+</td><td>7.00</td></tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // 3. Exam Registration (Fee Logic)
    const ExamRegistrationView = () => {
        // ... Reuse logic from previous step, but wrap in the layout ...
        const [fees, setFees] = useState({
            application: 100, semMarkSheet: 150, conMarkSheet: 0, improvement: 0,
            collegeCert: 0, univCert: 0, otherFee: 0, lateFee: 0, previousDue: 0,
            modeOfReceipt: '', receiptNo: 'AUTO', receiptDate: new Date().toLocaleDateString('en-GB')
        });
        const [subjects, setSubjects] = useState([
            { code: '23MAT305', name: 'DISCRETE MATHEMATICS', type: 0, credit: 4, fee: 350, selected: true },
            { code: '23SCT301', name: 'COMPUTER ORGANIZATION AND ARCHITECTURE', type: 0, credit: 3, fee: 350, selected: true },
            { code: '23SCT302', name: 'PRINCIPLES OF COMMUNICATION', type: 0, credit: 3, fee: 350, selected: true },
            { code: '23SCI302', name: 'DATABASE DESIGN', type: 0, credit: 4, fee: 350, selected: true },
            { code: '23SCI301', name: 'OBJECT ORIENTED PROGRAMMING', type: 0, credit: 4, fee: 350, selected: true },
            { code: '23SCL301', name: 'PROGRAMMING USING PYTHON LAB', type: 1, credit: 2, fee: 500, selected: true },
        ]);
        const [totals, setTotals] = useState({ theoryCount: 0, theoryAmount: 0, practicalCount: 0, practicalAmount: 0, grandTotal: 0 });

        useEffect(() => {
            let tCount = 0, tAmount = 0, pCount = 0, pAmount = 0;
            subjects.forEach(sub => {
                if (sub.selected) {
                    if (sub.type === 0) { tCount++; tAmount += sub.fee; }
                    else { pCount++; pAmount += sub.fee; }
                }
            });
            setTotals({
                theoryCount: tCount, theoryAmount: tAmount,
                practicalCount: pCount, practicalAmount: pAmount,
                grandTotal: tAmount + pAmount + fees.application + fees.semMarkSheet
            });
        }, [subjects]);

        return (
            <div style={{ padding: '10px' }}>
                <div style={{ color: '#00F', fontWeight: 'bold' }}>EXAM FEES / APPLICATION FORM</div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <div style={{ flex: 2, height: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
                        <table className="tblDefault" style={{ color: 'black' }}> {/* Override text color for visibility on white */}
                            <thead><tr style={{ background: '#CCC' }}><th>Code</th><th>Subject</th><th>Fee</th><th>Select</th></tr></thead>
                            <tbody>
                                {subjects.map((sub, i) => (
                                    <tr key={sub.code}>
                                        <td>{sub.code}</td><td>{sub.name}</td><td>{sub.fee}</td>
                                        <td><input type="checkbox" checked={sub.selected} onChange={() => {
                                            const newSubs = [...subjects]; newSubs[i].selected = !newSubs[i].selected; setSubjects(newSubs);
                                        }} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', background: '#f9f9f9' }}>
                        <div>Total: <b>{totals.grandTotal}</b></div>
                        <button className="btnDefault" style={{ marginTop: '10px' }}>Pay Now</button>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#fff' }}>
            {/* Header */}
            <div style={{ backgroundColor: 'rgb(0,153,153)', height: '60px', width: '100%', display: 'block', margin: '0px', padding: '0px', position: 'absolute', top: 0, left: 0 }}>
                <div style={{ float: 'left', border: '1px solid white', borderRadius: '10px', marginTop: '5px', backgroundColor: 'white', marginLeft: '5px' }}>
                    <img src="images/entity/entitylogo.jpg" style={{ width: '120px', height: '60px', padding: '5px' }} alt="Logo" />
                </div>
                <div style={{ float: 'left', fontFamily: '"Lucida Grande", "Lucida Sans Unicode", sans-serif', fontSize: '1.5em', color: 'white', paddingLeft: '40px' }}>
                    Dr. Mahalingam College of Engineering and Technology (Autonomous) <br />
                    <div style={{ float: 'left', fontFamily: 'inherit', fontSize: '0.6em', color: 'white' }}>
                        (An Autonomous Institution, Affiliated to Anna University, Chennai.)<br />Approved by AICTE, Accredited by NAAC with `A++` Grade
                    </div>
                </div>
                <div style={{ float: 'right', fontFamily: 'inherit', fontSize: '1.2em', color: 'white', padding: '5px', paddingRight: '5px', marginTop: '-5px', textAlign: 'right' }}>
                    <table style={{ borderCollapse: 'collapse', lineHeight: '18px' }}>
                        <tbody>
                            <tr>
                                <td rowSpan="2" style={{ padding: '0px', border: '0px' }}>
                                    <img align="center"
                                        src={
                                            user?.roll === '727624BSC046' ? 'https://cms.nia.ac.in/CMSAPP/api/User/Account/Photo/110805?v=0.9530980101260992' :
                                                user?.roll === '727624BSC011' ? 'https://cms.nia.ac.in/CMSAPP/api/User/Account/Photo/110769?v=0.9480332412541949' :
                                                    "images/entity/entitylogo.jpg"
                                        }
                                        width="50px" height="50px" style={{ borderRadius: '25px', paddingTop: '5px', marginRight: '20px' }} alt="User"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "images/entity/entitylogo.jpg"; }}
                                    />
                                </td>
                                <td>User : {studentName}<br />Roll No. : {rollNo}</td>
                            </tr>
                            <tr><td><a href="#" onClick={onLogout} style={{ color: 'white', fontSize: '0.8em', float: 'right', textDecoration: 'none' }}>LOGOUT</a></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sidebar (Left Menu) */}
            <div id="divLeftMenu" style={{ float: 'left', width: '150px', height: `${browserDims.height - 60}px`, borderRadius: '0px 0px 10px', paddingTop: '120px', display: 'block', backgroundColor: 'rgb(0, 153, 153)', marginTop: '60px' }}>
                <input type="button" value="Student's Profile" style={btnStyle} onClick={() => setCurrentView('profile')} />
                <input type="button" value="Int. Assessments" style={btnStyle} disabled />
                <input type="button" value="End Sem Results" style={btnStyle} onClick={() => setCurrentView('results')} />
                <input type="button" value="Exam Registration" style={btnStyle} onClick={() => setCurrentView('examreg')} />
                <input type="button" value="Open Elective Reg." style={btnStyle} disabled />
            </div>

            {/* Main Content Pane (Right) */}
            <div id="divRightPane" style={{ float: 'left', width: `${browserDims.width - 152}px`, height: `${browserDims.height - 65}px`, paddingTop: '60px', display: 'block', backgroundColor: 'white', border: '0px solid blue', overflow: 'auto' }}>
                {currentView === 'profile' && <ProfileView />}
                {currentView === 'results' && <ResultsView />}
                {currentView === 'examreg' && <ExamRegistrationView />}
            </div>
        </div>
    );
};

export default Dashboard;
