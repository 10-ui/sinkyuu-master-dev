import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TravelSection() {
  const ref = useRef(null);

  const setAnimation = () => {
    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play none none reverse",
          start: "top center", //開始時のトリガー条件
          end: "bottom center", //終了時のトリガー条件
          // markers: true, // マーカー表示
        },
      }
    );
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, [ref.current]);
  return (
    <section className="aka">
      <img src="./public/kumo.svg" className="kumo1" ref={ref}></img>
      <img src="./public/kumo.svg" className="kumo2"></img>
      <h3 className="saa">一歩踏み出そう</h3>
      <img src="./public/sorotori.svg" alt="Image 1" className="kyan" />
      <p className="mozi">
        おすすめの旅先を決めて
        <br />
        旅に出よう!!
        <br />
        大学生限定の
        <br />
        キャンペーン
        <br />
        を通してsorotoriで成長しよう
      </p>
      <img src="./public/kp1.PNG" alt="Image 1" className="kyan" />
      <p className="mozi">1. インスタでsorotoriのアカウントをフォローする</p>
      <img src="./public/kp2.PNG" alt="Image 2" className="kyan" />
      <p className="mozi">
        2. sorotoriの投稿で
        <br />
        #からやぶりでソロトリを
        <br />
        メッションして投稿する
      </p>
      <img src="./public/kp3.PNG" alt="Image 3" className="kyan" />
      <p className="mozi">
        3.旅先の旅館の代金が
        <br />
        二割引きになる
      </p>
    </section>
  );
}

export default TravelSection;
