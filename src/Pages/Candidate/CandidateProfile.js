import React from "react";
import CandidateSideBar from "./CandidateSideBar";
import "../../css/CandidateProfile.css"

 


const CandidateProfile = () => {
    const formData = [
        { label: "First Name", value: "John" },
        { label: "Middle Name", value: "James" },
        { label: "Last Name", value: "Doe" },
        { label: "Date of Birth", value: "1990-01-01" },
        { label: "Profession", value: "Engineer" },
        { label: "Highest Qualification", value: "Bachelor's Degree" },
        { label: "Annual Income", value: "500000" },
        { label: "Village/Town/City", value: "Springfield" },
        { label: "State", value: "Illinois" },
        { label: "Taluka Place", value: "Taluka" },
        { label: "Pincode", value: "123456" },
        { label: "District Place", value: "District" },
        { label: "Country", value: "USA" },
        { label: "Party Name", value: "Democratic Party" },
        { label: "Street/Area", value: "Main Street" },
        { label: "Ward No.", value: "5" },
        { label: "Number Of Criminal Cases", value: "0" },
    ];

    const uploadedFiles = [
        { label: "Income Certificate", filename: "income_certificate.pdf" },
        { label: "Address Proof Certificate", filename: "address_proof.pdf" },
        { label: "Party Proof Certificate", filename: "party_proof.pdf" },
        { label: "Other File", filename: "other_file.pdf" },
        // Add other uploaded files here
    ];

    return (
        <>
        <CandidateSideBar/>
        <div className="c-profile-container">
            <form className="reg-form-container">
                {formData.map((data, index) => (
                    <div className="block" key={index}>
                        <label>{data.label}</label>
                        <input type="text" value={data.value} readOnly />
                    </div>
                ))}
            </form>

            <div className="adm-valid-container">
                <h1 id="adm-valid-h1">Uploaded Files</h1>
                <table className="adm-valid-table">
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Filename</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file, index) => (
                            <tr key={index}>
                                <td>{file.label}</td>
                                <td>{file.filename}</td>
                                <td>
                                    <a href={`/path/to/${file.filename}`} download>
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
};

export default CandidateProfile;

