import React from 'react';

function TravelSection() {
  return (
    <section>
      <h3 className='saa'>一歩踏み出そう</h3>
      <img src="./public/sorotori.svg" alt="Image 1"  className='kyan' />
      <p className='mozi'>おすすめの旅先を決めて<br />旅に出よう!!<br />大学生限定の<br />キャンペーン<br />を通してsorotoriで成長しよう</p>
      <img src="./public/kp1.PNG" alt="Image 1" className='kyan' />
      <p className='mozi'>1. インスタでsorotoriのアカウントをフォローする</p>
      <img src="./public/kp2.PNG" alt="Image 2"  className='kyan'/>
      <p className='mozi'>2. sorotoriの投稿で<br />#からやぶりでソロトリを<br />メッションして投稿する</p>
      <img src="./public/kp3.PNG" alt="Image 3" className='kyan'/>
      <p className='mozi'>3.旅先の旅館の代金が<br />二割引きになる</p>
      <img src="./img/aikon.PNG" alt="Icon" />
      <a href="https://www.instagram.com/solotori_official/?hl=ja" target="_blank" rel="noopener noreferrer">
        こちらをクリック<br />インスタグラム公式サイト
      </a>
    </section>
  );
}

export default TravelSection;