import React, { memo, useEffect, useRef } from "react";
import APlayer from "aplayer-ts";
import "aplayer-ts/dist/APlayer.min.css";

const misArr = [
  {
    name: "远山",
    artist: "末小皮",
    url: "http://music.163.com/song/media/outer/url?id=448365260.mp3",
    cover:
      "http://p3.music.126.net/Z5gJSRbLn-HnQjZ7xY9UWw==/109951162827030429.jpg",
    lrc: "lrc1.lrc",
  },
  {
    name: "Once Upon a Time - Max Oazo,Moonessa",
    artist: "Max Oazo,Moonessa",
    url: "http://music.163.com/song/media/outer/url?id=1299570939.mp3",
    cover:
      "http://p3.music.126.net/Ih0GQRKYyd_yRaWa-jwmVA==/109951167480965715.jpg",
    lrc: "",
  },
  {
    name: "月亮与六便士",
    artist: "Britneylee小暖",
    url: "http://music.163.com/song/media/outer/url?id=460190996.mp3",
    cover:
      "http://p3.music.126.net/wRePfgBYjYZIvnFuaiYFAA==/109951162861117005.jpg",
    lrc: "",
  },
  {
    name: "光·白",
    artist: "柳爽",
    url: "http://music.163.com/song/media/outer/url?id=1352884452.mp3",
    cover:
      "http://p3.music.126.net/anfeoZ1C_usSz8Y-OBZi5A==/109951164175360059.jpg",
    lrc: "",
  },
  {
    name: "阿刁",
    artist: "赵雷",
    url: "http://music.163.com/song/media/outer/url?id=447925059.mp3",
    cover:
      "http://p3.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg",
    lrc: "",
  },
  {
    name: "僕が死のうと思ったのは",
    artist: "中島美嘉",
    url: "http://music.163.com/song/media/outer/url?id=26830207.mp3",
    cover:
      "http://p4.music.126.net/Gh_WDiXQHei6qPZlu1k8Ig==/109951165049477808.jpg",
    lrc: "",
  },
  {
    name: "心做し",
    artist: "双笙（陈元汐）",
    url: "http://music.163.com/song/media/outer/url?id=478303470.mp3",
    cover:
      "http://p3.music.126.net/4m79yXLdqFt_0mbx9DjsoA==/109951166279817646.jpg",
    lrc: "",
  },
  {
    name: "ヤキモチ（ 米雅 翻自 高桥优）",
    artist: "米雅",
    url: "http://music.163.com/song/media/outer/url?id=556926564.mp3",
    cover:
      "http://p3.music.126.net/hiLh1f6Zg0UxuJCgmSEA8Q==/109951163277041283.jpg",
    lrc: "",
  },
  {
    name: "約束",
    artist: "微笑子",
    url: "http://music.163.com/song/media/outer/url?id=1346961369.mp3",
    cover:
      "http://p4.music.126.net/HGrpfAlzlR4q9Nf-DuytBg==/109951164529412260.jpg",
    lrc: "",
  },
  {
    name: "李香兰",
    artist: "张学友",
    url: "http://music.163.com/song/media/outer/url?id=32688998.mp3",
    cover:
      "http://p3.music.126.net/uikcJp5JZTwU7w1F7wrXaQ==/109951166581176927.jpg",
    lrc: "",
  },
];

const LfAplayer = memo(() => {
  const aRef = useRef();
  useEffect(() => {
    new APlayer({
      container: aRef.current,
      fixed: true,
      autoplay: false,
      audio: misArr,
    });
  }, []);
  return (
    <div>
      <div ref={aRef}></div>
    </div>
  );
});

export default LfAplayer;
