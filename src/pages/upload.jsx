import React, {useState} from "react";

export const key = "8f8bc280-ebb4-4ed8-9cbb-b262441c2156";

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [error, setError] = useState(false);

  const url = "https://api.thecatapi.com/v1/images/upload";
  
  function changeHandler(event) {
    setSelectedFile(event.target.files[0])
  }

  async function upload() {
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "x-api-key": key
        }
      });

      if (response.status !== 201) {
        throw new Error('Eroare la upload!');
      }
    } catch (e) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  } 

  // If the upload fails by any reasons an error message is displayed for 3 seconds after which it disappears


  return (
    <div className="container">
      
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon02" onClick={upload} >Upload</button>
        <input type="file" className="form-control" id="inputGroupFile02" onChange={changeHandler} />
        <label className="input-group-text" htmlFor="inputGroupFile02" />
      </div>

      <div className="row">
        { error && (<div class="alert alert-danger" role="alert">
          There was a problem with the upload!
      </div>)}
      </div>
    </div>
  );
  
}

export default Upload;
