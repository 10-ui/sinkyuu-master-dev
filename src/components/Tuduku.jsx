import { useState } from "react";

function Tuduku() {
  const [state, setState] = useState(false);
  const toggleState = () => {
    if (state) setState(false);
    else {
      setState(true);
    }
  };

  return (
    <div className="Tuduku">
      <img onClick={toggleState} src="./public/h2_image2.PNG" alt="" />
      <img
        onClick={toggleState}
        className={`${state ? "" : "af_Tuduku"}`}
        src="./public/image.png"
        alt=""
      />
    </div>
  );
}

export default Tuduku;
