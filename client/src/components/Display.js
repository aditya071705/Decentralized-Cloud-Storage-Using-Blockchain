import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  // Fetch data from the contract
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;

    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }
      console.log("Fetched Data Array:", dataArray);
    } catch (e) {
      alert("You don't have access");
      console.error("Error fetching data:", e);
      return;
    }

    const isEmpty = !dataArray || dataArray.length === 0;

    if (!isEmpty) {
      const str_array = dataArray.toString().split(",");
      const files = str_array.map((item) => ({
        url: item.startsWith("ipfs://")
          ? `https://gateway.pinata.cloud/ipfs/${item.slice(7)}`
          : item,
        cid: item.replace("ipfs://", ""),
        isImage: /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(item), // Check if it's an image
      }));
      setData(files);
    } else {
      alert("No files to display");
      setData([]);
    }
  };

  const deleteFile = async (cid) => {
    try {
      console.log("Attempting to delete file with CID:", cid);
  
      // Find the index of the file in the current list of files
      const fileIndex = data.findIndex((file) => file.cid === cid);
      if (fileIndex === -1) {
        alert("File not found.");
        return;
      }
  
      // Call deleteFile function on the smart contract with correct address and index
      const tx = await contract.deleteFile(account, fileIndex);
      await tx.wait(); // Wait for the transaction to be mined
  
      alert("File deleted successfully!");
  
      // Update state to remove the deleted file
      setData((prevData) => prevData.filter((file) => file.cid !== cid));
    } catch (e) {
      console.error("Error deleting file:", e);
      alert("Failed to delete the file. Please check the console for details.");
    }
  };
  
// delete
  return (
    <>
      <div className="file-list">
        {data.length > 0 &&
          data.map((file, i) => (
            <div key={file.cid} className="file-item">
              {file.isImage ? (
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={file.url}
                    alt={`File ${i + 1}`}
                    className="image-preview"
                    onError={(e) => {
                      e.target.src = "path_to_placeholder_image"; // Fallback placeholder
                    }}
                  />
                </a>
              ) : (
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  <div className="file-preview">
                    📄 Document {i + 1}
                  </div>
                </a>
              )}
              <button
                className="delete-button"
                onClick={() => deleteFile(file.cid)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      />
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;
