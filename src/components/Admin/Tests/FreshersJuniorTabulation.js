// // import react, react-router-dom packages and index.css file to render FreshersJuniorTabulation component
// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./table.css";

// function FreshersJuniorTabulation() {
//   // location varaiable to get location of the testReports route and state
//   const location = useLocation();
//   // useState of data to store Freshers Junior test data responses
//   const [data, setData] = useState(location.state);
//   // navigate variable used to naviagating to different routes
//   const navigate = useNavigate();

//   // handleUpdate function to update section scores to google sheet of Freshers Junior Test google sheet using sheet db google api
//   const handleUpdate = (item) => {
//     if (item.Total_Score === undefined) {
//       fetch(
//         `https://sheetdb.io/api/v1/f3kdvdrvltn08/Email_Address1/${item.Email_Address1}`,
//         {
//           method: "PATCH",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer 1bnneqvs9h583u64f4f5i5ba1oyojsw3skwzbyfe",
//           },
//           body: JSON.stringify({
//             data: {
//               Aptitude_Score: item.aptitude_score,
//               Reasoning_Score: item.reasoning_score,
//               Total_Score: item.aptitude_score + item.reasoning_score,
//             },
//           }),
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   return (
//     <div className='test-reports-container'>
//       <h1 style={{ textAlign: "center" }}>
//         Freshers Junior Test Tabulation Data
//       </h1>
//       {/* desktop table container with table of Freshers Junior test data respones */}
//       <div className='test-table'>
//         {data.length > 0 ? (
//           <table border='2px' style={{ margin: "auto" }}>
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Completed On</th>
//                 <th>Name</th>
//                 <th>Email Address</th>
//                 <th>Phone Number</th>
//                 <th>Total Score</th>
//                 <th>Aptitude Score</th>
//                 <th>Reasoning Score</th>
//                 <th>View Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr>
//                   <td>{index}</td>
//                   <td>{item.Timestamp}</td>
//                   <td>{item.Name}</td>
//                   <td>{item.Email_Address}</td>
//                   <td>{item.Phone_Number}</td>
//                   <td>{item.Score}</td>
//                   <td>{item.aptitude_score}</td>
//                   <td>{item.reasoning_score}</td>
//                   <td>
//                     {/* clicking view button it'll navigates to studentChart route */}
//                     <button
//                       onClick={() => {
//                         navigate("/studentChart", { state: item });
//                         handleUpdate(item);
//                       }}
//                       style={{ padding: "3px", width: "60px" }}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           "No Data Found"
//         )}
//       </div>
//       {/* mobile table container with table of Freshers Junior test data responses */}
//       <div className='mobile-table-container'>
//         {data.length > 0
//           ? data.map((item, index) => (
//               <div className='table-data-container'>
//                 <div className='table-data'>
//                   <p className='th'>Id</p>
//                   <p className='td'>{index + 1}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Completed On</p>
//                   <p className='td'>{item.Timestamp}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Name</p>
//                   <p className='td'>{item.Name}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Email Address</p>
//                   <p className='td'>{item.Email_Address}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Phone Number</p>
//                   <p className='td'>{item.Phone_Number}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Email Address</p>
//                   <p className='td'>{item.Email_Address}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Total Score</p>
//                   <p className='td'>{item.Score}</p>
//                 </div>
//                 <div className='table-data'>
//                   <p>
//                     {item.aptitude_score !== undefined
//                       ? "Aptitude Score"
//                       : "Java Score"}
//                   </p>
//                   <p className='td'>
//                     {item.aptitude_score !== undefined
//                       ? item.aptitude_score
//                       : item.fullstack_java_score}
//                   </p>
//                 </div>
//                 <div className='table-data'>
//                   <p>
//                     {item.technical_score !== undefined
//                       ? "Technical Score"
//                       : item.reasoning_score !== undefined
//                       ? "Reasoning Score"
//                       : "React Score"}
//                   </p>
//                   <p className='td'>
//                     {item.technical_score !== undefined
//                       ? item.technical_score
//                       : item.reasoning_score !== undefined
//                       ? item.reasoning_score
//                       : item.fullstack_react_score}
//                   </p>
//                 </div>
//                 <div className='table-data'>
//                   <p>Test Type</p>
//                   <p className='td'>{item.testType}</p>
//                 </div>
//                 {/* clicking view button it'll navigates to studentChart route */}
//                 <div className='view-button'>
//                   <button
//                     className='btn'
//                     onClick={() => {
//                       navigate("/studentChart", { state: item });
//                       handleUpdate(item);
//                     }}
//                   >
//                     View Score
//                   </button>
//                 </div>
//               </div>
//             ))
//           : "No Data Found"}
//       </div>
//     </div>
//   );
// }

// export default FreshersJuniorTabulation;

// import react, react-router-dom packages and index.css file to render FreshersJuniorTabulation component
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";

function FreshersJuniorTabulation() {
  // location varaiable to get location of the testReports route and state
  const location = useLocation();
  // useState of data to store Freshers Junior test data responses
  const [data, setData] = useState(
    location.state.map((item, index) => ({ ...item, id: index + 1 }))
  );
  // navigate variable used to naviagating to different routes
  const navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 10,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Timestamp",
      headerName: "Completed On",
      width: 160,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Name",
      headerName: "Name",
      width: 220,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Email_Address",
      headerName: "Email Address",
      width: 220,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Phone_Number",
      headerName: "Phone Number",
      sortable: false,
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "total_score",
      headerName: "Total Score",
      width: 120,
    },
    {
      field: "aptitude_score",
      headerName: "Aptitude Score",
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "reasoning_score",
      headerName: "Reasoning Score",
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "View Score",
      headerName: "View Score",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <button
          onClick={() => {
            navigate("/studentChart", { state: params.row });
            handleUpdate(params.row);
          }}
        >
          View
        </button>
      ),
    },
  ];

  // handleUpdate function to update section scores to google sheet of Freshers Junior Test google sheet using sheet db google api
  const handleUpdate = (item) => {
    if (item.Total_Score === undefined) {
      fetch(
        `https://sheetdb.io/api/v1/f3kdvdrvltn08/Email_Address1/${item.Email_Address1}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer 1bnneqvs9h583u64f4f5i5ba1oyojsw3skwzbyfe",
          },
          body: JSON.stringify({
            data: {
              Aptitude_Score: item.aptitude_score,
              Reasoning_Score: item.reasoning_score,
              Total_Score: item.aptitude_score + item.reasoning_score,
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
 <div className='admin-header-container'>
 <div className='admin-header-logo-container'>
          <img
            src='https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png'
            alt='logo'
            style={{ height: "50px", width: "100px", borderRadius: "10px" }}
            onClick={() => navigate("/")}
          />
        </div>
        <div className='admin-desktop-header-navbar-container'>
          <p
            onClick={() => navigate("/dashboard", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Dashboard
          </p>
          <p
            onClick={() => navigate("/sendAssessments", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Assessments
          </p>
          <p
            onClick={() => navigate("/testReports", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Test Reports
          </p>
          <p
            onClick={() => navigate("/studentReports", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Student Reports
          </p>
          <p
            className='admin-desktop-header-navbar-link'
            onClick={() => navigate("/adminLogin")}
          >
            Admin
          </p>
        </div>
        <div className='admin-mobile-header-navbar-container'>
          <Popup
            contentStyle={{ width: "50%", backgroundColor: "white" }}
            trigger={
              <button className='admin-hamburger-btn'>
                <GiHamburgerMenu />
              </button>
            }
            position='bottom right'
          >
            <ul className='admin-mobile-hamburger-menu'>
              <li
                onClick={() => navigate("/dashboard", { state: data })}
                className='admin-header-navbar-link'
              >
                Dashboard
              </li>
              <li
                onClick={() => navigate("/sendAssessments", { state: data })}
                className='admin-header-navbar-link'
              >
                Assessments
              </li>
              <li
                onClick={() => navigate("/testReports", { state: data })}
                className='admin-header-navbar-link'
              >
                Test Resports
              </li>
              <li
                onClick={() => navigate("/studentReports", { state: data })}
                className='admin-header-navbar-link'
              >
                Student Resports
              </li>
              <li
                onClick={() => navigate("/adminLogin")}
                className='admin-header-navbar-link'
              >
                Admin
              </li>
            </ul>
          </Popup>
        </div>
      </div>
<div className='test-reports-container'>
      <h1 style={{textAlign:'center'}}>
        Freshers Junior Test Tabulation Data
      </h1>
      {/* desktop table container with table of Freshers Junior test data respones */}
      <div className='d-none d-lg-block text-center'>
        {data.length > 0 ? (
          <div
            style={{
              minHeight: 100,
              width: "95%",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20]}
            />
          </div>
        ) : (
          "No Data Found"
        )}
      </div>
      {/* mobile table container with table of Freshers Junior test data responses */}
      <div className='d-lg-none mobile-table-container'>
        {data.length > 0
          ? data.map((item, index) => (
              <div className='table-data-container'>
                <div className='table-data'>
                  <p className='th'>Id</p>
                  <p className='td'>{index + 1}</p>
                </div>
                <div className='table-data'>
                  <p>Completed On</p>
                  <p className='td'>{item.Timestamp}</p>
                </div>
                <div className='table-data'>
                  <p>Name</p>
                  <p className='td'>{item.Name}</p>
                </div>
                <div className='table-data'>
                  <p>Email Address</p>
                  <p className='td'>{item.Email_Address}</p>
                </div>
                <div className='table-data'>
                  <p>Phone Number</p>
                  <p className='td'>{item.Phone_Number}</p>
                </div>
                <div className='table-data'>
                  <p>Email Address</p>
                  <p className='td'>{item.Email_Address}</p>
                </div>
                <div className='table-data'>
                  <p>Total Score</p>
                  <p className='td'>{item.Score}</p>
                </div>
                <div className='table-data'>
                  <p>
                    {item.aptitude_score !== undefined
                      ? "Aptitude Score"
                      : "Java Score"}
                  </p>
                  <p className='td'>
                    {item.aptitude_score !== undefined
                      ? item.aptitude_score
                      : item.fullstack_java_score}
                  </p>
                </div>
                <div className='table-data'>
                  <p>
                    {item.technical_score !== undefined
                      ? "Technical Score"
                      : item.reasoning_score !== undefined
                      ? "Reasoning Score"
                      : "React Score"}
                  </p>
                  <p className='td'>
                    {item.technical_score !== undefined
                      ? item.technical_score
                      : item.reasoning_score !== undefined
                      ? item.reasoning_score
                      : item.fullstack_react_score}
                  </p>
                </div>
                <div className='table-data'>
                  <p>Test Type</p>
                  <p className='td'>{item.testType}</p>
                </div>
                {/* clicking view button it'll navigates to studentChart route */}
                <div className='view-button'>
                  <button
                    className='btn'
                    onClick={() => {
                      navigate("/studentChart", { state: item });
                      handleUpdate(item);
                    }}
                  >
                    View Score
                  </button>
                </div>
              </div>
            ))
          : "No Data Found"}
      </div>
    </div>
    </div>
    
  );
}

export default FreshersJuniorTabulation;