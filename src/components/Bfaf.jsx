import React from "react";
import Saitou from "./Saitou";
import Tuduku from "./Tuduku";

function Bfaf() {
  return (
    <>
      <section>
        <p className="kimigasuki">
          <span>今の自分に自信がなかったり</span>
          <br />
          <span>目標がなんとなくになっていませんか？</span>
          <br />
          そんな<span>大学生</span>向けの
          <br />
          <span>スペシャルサイト</span>
          <br />
          ソロトリをすることによって
          <br />
          自分の殻を割って成長しよう
        </p>
        <Saitou />
        <Tuduku />
        <img src="./public/h2_image3.PNG" alt="Image 3" />
      </section>
    </>
  );
}

export default Bfaf;
