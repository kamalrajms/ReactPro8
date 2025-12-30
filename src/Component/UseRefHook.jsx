import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const foucsinput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const interalRef = useRef();

  useEffect(() => {
    interalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interalRef.current);
  }, []);
  // eg3

  const [newImage, setNewImage] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const imgRef = useRef(0);

  const handlechange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgUrl(preview);
      setNewImage(false);
    }
  };
  // console.log(imgUrl);

  return (
    <div>
      {/* eg1 */}
      <div>
        <input type="text" placeholder="Enter data" ref={inputRef} />
        <button onClick={foucsinput}>Focus input</button>
      </div>
      {/* eg2 */}
      <div>
        <p>timer: {sec}</p>
        <button onClick={() => clearInterval(interalRef.current)}>Stop</button>
      </div>
      {/* eg3 */}
      <input type="file" ref={imgRef} hidden onChange={handlechange} />
      {newImage ? (
        <div className="image-container" onClick={() => imgRef.current.click()}>
          upLoading image...
        </div>
      ) : (
        <img
          className="imageURL"
          onClick={() => imgRef.current.click()}
          src={imgUrl}
          alt=""
        />
      )}
    </div>
  );
}
