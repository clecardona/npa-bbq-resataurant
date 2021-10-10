import React from "react";

export default function UploadImage({ children, setImage, setImageURL }) {
  return (
    <div className="upload">
      <div className="add">
        <label>
          +
          <input
            type="file"
            className="btn-circle"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <p>{children}</p>
      </div>
      <div className="url">
        <p>... or copy/paste link :</p>
        <input
          type="text"
          onChange={(e) => setImageURL(e.target.value)}
          placeholder=" https://..."
        />
      </div>
    </div>
  );
}
