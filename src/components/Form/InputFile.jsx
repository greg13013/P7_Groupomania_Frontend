import React from "react";

export const InputFile = ({ file, setFile, erreurFile }) => {
  return (
    <div className="row">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="previewupload"
          className="responsive-img circle col s10 l3 center-align"
        />
      )}
      <div className="file-field input-field col s12">
        <div className="btn">
          <span>File</span>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="validate"
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
        <div className="error" ref={erreurFile}></div>
      </div>
    </div>
  );
};
