import { useState } from "react";
import * as XLSX from "xlsx";

function Excel() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  return (
    <div className="wrapper  bg[#FAFAFB] w-[100%]">
      <div className=" flex justify-between items-center h-[100px] ">
        <h3 className="font-bold text-[20px] px-[30px] ">Upload CSV</h3>
        <div className="flex gap-[50px] pr-[30px]">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
            fill="#605BFF"
          >
            <circle cx="15" cy="15" r="14" fill="#87CEEB" />
            <circle cx="15" cy="8" r="4" fill="#4682B4" />
            <path
              d="M20.5 20.5c-0.308 0-0.592-0.181-0.717-0.463-0.267-0.651-0.649-1.191-1.091-1.594-0.918-0.872-2.075-1.479-3.335-1.65-0.42-0.063-0.764-0.388-0.891-0.805-0.127-0.418-0.013-0.868 0.293-1.181 0.535-0.535 1.445-0.535 1.979 0 0.102 0.103 0.189 0.215 0.263 0.335 0.127 0.225 0.254 0.452 0.389 0.674 0.601 1.006 1.512 1.69 2.606 1.843 0.437 0.069 0.841-0.173 1.138-0.52 0.348-0.395 0.496-0.925 0.422-1.456C21.943 20.623 20.993 20.5 20.5 20.5z"
              fill="#4169E1"
            />
          </svg>
        </div>
      </div>

     <div className="flex justify-center items-center mt-[100px]">
         {/* form */}
      <div className="w-[596px] h-[367px] bg-white flex justify-center">
        <form className="form-group custom-form  " onSubmit={handleFileSubmit}>
          <div className="w-[564px] h-[258px] m-auto relative top-[16px] border border-dotted border-[1px] border-ebony-clay rounded-lg">
            <div className="w-[267px] h-[76px] relative  top-[114px] left-[165px] ">
              <svg
                className="mx-auto"
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_22_2724)">
                  <path
                    d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z"
                    fill="#185C37"
                  />
                  <path
                    d="M22.7802 4H12.2306C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7802 18L29.0402 20.1L33.9091 18V11L22.7802 4Z"
                    fill="#21A366"
                  />
                  <path d="M10.9556 11H22.7802V18H10.9556V11Z" fill="#107C41" />
                  <path
                    opacity="0.1"
                    d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z"
                    fill="black"
                  />
                  <path
                    d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z"
                    fill="url(#paint0_linear_22_2724)"
                  />
                  <path
                    d="M7.94867 22.1706L10.6307 17.9881L8.17334 13.8287H10.1501L11.4912 16.4887C11.615 16.7414 11.6998 16.929 11.7457 17.0529H11.7631C11.8512 16.8513 11.944 16.6555 12.0413 16.4656L13.4749 13.8301H15.2896L12.7696 17.965L15.3536 22.1706H13.4227L11.8737 19.2509C11.8008 19.1267 11.7388 18.9962 11.6887 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4863 19.239L9.89138 22.1706H7.94867Z"
                    fill="white"
                  />
                  <path
                    d="M32.6342 4H22.7802V11H33.9091V5.2831C33.9091 4.57446 33.3383 4 32.6342 4Z"
                    fill="#33C481"
                  />
                  <path d="M22.7802 18H33.9091V25H22.7802V18Z" fill="#107C41" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_22_2724"
                    x1="6.65832"
                    y1="9.29766"
                    x2="16.7396"
                    y2="26.6473"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18884F" />
                    <stop offset="0.5" stop-color="#117E43" />
                    <stop offset="1" stop-color="#0B6631" />
                  </linearGradient>
                  <clipPath id="clip0_22_2724">
                    <rect
                      width="29.9091"
                      height="28"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <label className=" text-[#999CA0] text-sm mt-[16px]">
                Drop your Excel sheet here, or{" "}
                <span className="text-[#605BFF]">browse</span>
                <input
                  type="file"
                  className="hidden"
                  required
                  onChange={handleFile}
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success btn-md bg-[#605BFF] w-[564px] h-[66px] rounded-lg relative top-[32px] left-[16px]"
          >
            Upload
          </button>
          {/* <button type="submit" className="btn btn-success btn-md mt-16">UPLOAD</button> */}

          {typeError && (
            <div className="alert alert-danger" role="alert">
              {typeError}
            </div>
          )}
        </form>
      </div>
     </div>

      {/* view data */}
      <div className="viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Excel;
