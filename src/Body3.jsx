import { useState } from "react";

export default function Body3() {

  const services = [
    {
      title: "NEET Application Service",
      details: ["Aadhaar Card",
               "Candidate Photograph",
               "Candidate Signature",
               "SSC / 10th Class Marksheet or Certificate",
               "Left / Right Thumb Impression",
               "Caste Certificate (SC / ST / OBC / EWS)",
               "Intermediate / 12th Class Marksheet",
               "Disability Certificate",
               "Income Certificate (if required)",
               "Father / Mother ID Proof (optional but useful.)",
               "Ration Card / Domicile / Residence Certificate",]
    },
    {
      title: "EAMCET / EMCET Application",
      details: ["Aadhaar Card",
        "EAMCET Rank Card / Score Card",
        "Candidate Photograph",
        "Candidate Signature",
        "SSC / 10th Class Marksheet or Certificate",
        "Intermediate / 12th Class Marksheet or Memo",
        "Study Certificates (Class 6 to Intermediate)",
        "Transfer Certificate (TC)",
        "Caste Certificate (SC / ST / OBC / EWS)",
        "Income Certificate (for Fee Reimbursement)",
        "Residence / Domicile Certificate",
        "Local Status Certificate (if applicable)",
        "Disability / PH Certificate (if applicable)",
        "NCC / Sports / CAP Certificate (if applicable)",
        "Minority Certificate (if applicable)",
        "Father / Mother ID Proof (optional)",
        "Ration Card (optional but useful)",
        "EAMCET Hall Ticket",]

    },
    {
      title: "Scholarship & E-Pass",
      details: ["Aadhaar Card (Student)",
        "Aadhaar Card (Father / Mother / Guardian)",
        "Student Signature",
        "Bank Passbook (Student Name & Account Number visible)",
        "Income Certificate (Meeseva / Govt issued)",
        "Caste Certificate (SC / ST / OBC / EWS)",
        "Bonafide / Study Certificate (Current Academic Year)",
        "SSC / 10th Class Marksheet or Certificate",
        "Intermediate / Previous Year Marks Memo",
        "College Admission Letter / Joining Report",
        "Tuition Fee Receipt",
        "Transfer Certificate (TC)",
        "Ration Card / Food Security Card",
        "Residential / Domicile Certificate",
        "Mother / Father Death Certificate (if single parent)",
        "Disabled / PH Certificate (if applicable)",
        "Hostel Welfare Certificate (if staying in hostel)",
        "Mobile Number & Email ID (student)",
        "Student Photograph",
                            ]

    },
    {
      title: "Passport / PCC Application",
      details: ["Aadhaar Card",
 "Date of Birth Certificate (Municipal / SSC / Matric)",
 "10th Class Certificate (if DOB proof)",
 "Passport Size Photograph (if applying at PSK — some centers capture live photo)",
 "Address Proof — Aadhaar / Voter ID / Ration Card / Rental Agreement",
 "Electricity / Water / Gas Bill (as address supporting proof)",
 "Bank Passbook / Bank Statement (address proof if needed)",
 "Parent / Guardian Aadhaar (for minors)",
 "Annexure D (for minor passport — if applicable)",
 "Annexure F (for single parent / guardian cases)",
 "Marriage Certificate (if married)",
 "Spouse Passport Copy (if spouse passport details given)",
 "Name Change / Gazette Certificate (if name changed)",
 "Police Clearance Certificate (if asked in special cases)",
 "Caste / Community Certificate (only if required for verification)",
 "Educational Certificate (optional but useful)",
 "Mobile Number & Email ID"]

    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="os" style={{  }}>

        <h5 style={{color:"#AF47C2",fontSize:"1.5rem",marginTop:"6rem",fontFamily:"Montserrat"}}> Our Services</h5>


      {services.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "12px 10px",
            cursor: "pointer"
          }}
          onClick={() => toggle(index)}
        >
          <h3 className="title" style={{ display: "flex", justifyContent: "space-between" }}>
            {item.title}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </h3>

          {openIndex === index && (
  <ul className="list"

    style={{
      
      textAlign:"start",
      marginTop: "8px",
      color: "#444",
      paddingLeft: "22px",
      listStyle: "none",
    }}
  >
    {item.details.map((point, i) => (
      <li
        key={i}
        style={{ 
          marginBottom: "6px",
          display: "list-item"
        }}
      >
        {point}
      </li>
    ))}
  </ul>
)}

        </div>
      ))}
    </div>
  );
}
