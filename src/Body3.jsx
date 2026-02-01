import { useState } from "react";

export default function Body3() {

  const services = [
    {
      title: "🏫 Academic & Education Services (Online Only)",
      details: ["Online admissions [ DOST, Counselling slot bookings etc ]",
               "Scholarship application & renewal ",
               "All Exam Applications [ NEET, EAMCET, JEE etc...]",
               "Hall ticket download",
               "Result download",
              //  "Revaluation & recounting applications",
              //  "Intermediate / 12th Class Marksheet",
              //  "Disability Certificate",
              //  "Income Certificate (if required)",
              //  "Father / Mother ID Proof (optional but useful.)",
              //  "Ration Card / Domicile / Residence Certificate",] 
      ]
    },            
    {
      title: "🪪 Government ID & Civil Services",
      details: [

        "We assist with government identity-related online services (Non - Biometric only)",
        
        "New PAN card application",
        "PAN correction (name, DOB, photo)",
        "PAN–Aadhaar linking",
        "Aadhaar address update (document based)",
        "Aadhaar mobile/email update (OTP based)",
        "Aadhaar download",
        "Voter ID (EPIC) download",
        // "Transfer Certificate (TC)",
        // "Caste Certificate (SC / ST / OBC / EWS)",
        // "Income Certificate (for Fee Reimbursement)",
        // "Residence / Domicile Certificate",
        // "Local Status Certificate (if applicable)",
        // "Disability / PH Certificate (if applicable)",
        // "NCC / Sports / CAP Certificate (if applicable)",
        // "Minority Certificate (if applicable)",
        // "Father / Mother ID Proof (optional)",
        // "Ration Card (optional but useful)",
        // "EAMCET Hall Ticket",
      ]

    },
    {
      title: "💼 Job, Exams & Recruitment Services",
      details: ["SSC, UPSC, Banking, RRB exam applications",
        "TSPSC & other state job applications",
        "Hall ticket download",
        "Result download",
        // "Income Certificate (Meeseva / Govt issued)",
        // "Caste Certificate (SC / ST / OBC / EWS)",
        // "Bonafide / Study Certificate (Current Academic Year)",
        // "SSC / 10th Class Marksheet or Certificate",
        // "Intermediate / Previous Year Marks Memo",
        // "College Admission Letter / Joining Report",
        // "Tuition Fee Receipt",
        // "Transfer Certificate (TC)",
        // "Ration Card / Food Security Card",
        // "Residential / Domicile Certificate",
        // "Mother / Father Death Certificate (if single parent)",
        // "Disabled / PH Certificate (if applicable)",
        // "Hostel Welfare Certificate (if staying in hostel)",
        // "Mobile Number & Email ID (student)",
        // "Student Photograph",
                            ]

    },
    {
      title: "🇮🇳 Central Government Online Services",
      details: ["EPFO services (UAN, KYC, passbook, claims)",
 "ESIC online services",
 "Income Tax Return filing (basic)",
 "PAN & Aadhaar related services",
 "Passport online form filling & appointment booking",

//   "Electricity / Water / Gas Bill (as address supporting proof)",
//  "Bank Passbook / Bank Statement (address proof if needed)",
//  "Parent / Guardian Aadhaar (for minors)",
//  "Annexure D (for minor passport — if applicable)",
//  "Annexure F (for single parent / guardian cases)",
//  "Marriage Certificate (if married)",
//  "Spouse Passport Copy (if spouse passport details given)",
//  "Name Change / Gazette Certificate (if name changed)",
//  "Police Clearance Certificate (if asked in special cases)",
//  "Caste / Community Certificate (only if required for verification)",
//  "Educational Certificate (optional but useful)",
//  "Mobile Number & Email ID"
]
    },
{
      title: "🏢 Business & Professional Services",
      details: [
        "MSME / Udyam registration",
 "GST registration",
 "GST return filing (basic)",
 "Startup India registration",
]
}


  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="os" style={{  }}>

        <h5 style={{color:"#AF47C2",fontSize:"1.5rem",fontFamily:"Montserrat"}}> Our Services</h5>


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
    display: "list-item",
    fontSize: point.includes("government identity-related")
      ? "0.8rem"
      : "1rem",
    color: point.includes("government identity-related")
      ? "#777"
      : "#444",
    fontStyle: point.includes("government identity-related")
      ? "italic"
      : "normal",
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
