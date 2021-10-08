import React from "react";

export default function UploadImage({ children, hookImage, hookImageURL }) {
  const [image, setImage] = hookImage;
  const [imageURL, setImageURL] = hookImageURL;
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
        <input type="text" onChange={(e) => setImageURL(e.target.value)} />
      </div>
    </div>
  );
}
