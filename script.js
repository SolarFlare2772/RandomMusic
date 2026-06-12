const songs = [
  {
    "title": "晴る",
    "artist": "ヨルシカ",
    "theme": "clear_sky",
    "season": "spring",
    "url": "https://www.youtube.com/watch?v=CkvWJNt77mU"
  },
  {
    "title": "ただ君に晴れ",
    "artist": "ヨルシカ",
    "theme": "summer_sky",
    "season": "summer",
    "url": "https://www.youtube.com/watch?v=-VKIqrvVOpo"
  },
  {
    "title": "言って。",
    "artist": "ヨルシカ",
    "theme": "twilight",
    "season": "all",
    "url": "https://youtu.be/F64yFFnZfkI?si=nTf92-J0IL75WYvW"
  },
  {
    "title": "ヒッチコック",
    "artist": "ヨルシカ",
    "theme": "night",
    "season": "all",
    "url": "https://youtu.be/t7MBzMP4OzY?si=nt2npKZJWifJzU9z"
  },
  {
    "title": "藍二乗",
    "artist": "ヨルシカ",
    "theme": "deep_blue",
    "season": "summer",
    "url": "https://youtu.be/4MoRLTAJY_0?si=yzL4gdvW3Qh-Z5Vj"
  },
  {
    "title": "だから僕は音楽を辞めた",
    "artist": "ヨルシカ",
    "theme": "cloudy",
    "season": "all",
    "url": "https://youtu.be/KTZ-y85Erus?si=zjZjQUhWu1HCsFPu"
  },
  {
    "title": "雨とカプチーノ",
    "artist": "ヨルシカ",
    "theme": "rain",
    "season": "summer",
    "url": "https://youtu.be/PWbRleMGagU?si=2HhG4Px0P3ZQcDzP"
  },
  {
    "title": "ノーチラス",
    "artist": "ヨルシカ",
    "theme": "ocean",
    "season": "summer",
    "url": "https://youtu.be/j83OVgv6woA?si=KZH4dRH67PLrcUT1"
  },
  {
    "title": "夜行",
    "artist": "ヨルシカ",
    "theme": "midnight",
    "season": "winter",
    "url": "https://youtu.be/MH5noJJfqDY?si=x0XkgbIkfQ9ZlIYi"
  },
  {
    "title": "花に亡霊",
    "artist": "ヨルシカ",
    "theme": "sunset",
    "season": "summer",
    "url": "https://youtu.be/9lVPAWLWtWc?si=Y0i4pdvd_sQPQRDm"
  },
  {
    "title": "思想犯",
    "artist": "ヨルシカ",
    "theme": "fog",
    "season": "all",
    "url": "https://youtu.be/ENcnYh79dUY?si=3b_bR3_-nGYSLu_Y"
  },
  {
    "title": "風を食む",
    "artist": "ヨルシカ",
    "theme": "wind",
    "season": "autumn",
    "url": "https://youtu.be/GVrRXhS0mLs?si=h5XWN3cYXv3DxtJX"
  },
  {
    "title": "春泥棒",
    "artist": "ヨルシカ",
    "theme": "cherry",
    "season": "spring",
    "url": "https://youtu.be/Sw1Flgub9s8?si=ZsiHvIUdxrj1latZ"
  },
  {
    "title": "又三郎",
    "artist": "ヨルシカ",
    "theme": "storm",
    "season": "autumn",
    "url": "https://youtu.be/siNFnlqtd8M?si=Kn5Ecy7aWJDDLZRs"
  },
  {
    "title": "老人と海",
    "artist": "ヨルシカ",
    "theme": "sea",
    "season": "summer",
    "url": "https://youtu.be/WwnZeQiI6hQ?si=jkq0-lz-VutTfc4G"
  },
  {
    "title": "ブレーメン",
    "artist": "ヨルシカ",
    "theme": "golden_hour",
    "season": "spring",
    "url": "https://youtu.be/oy6MDr6I6rM?si=JNoiSR8zTg-ETC_V"
  },
  {
    "title": "左右盲",
    "artist": "ヨルシカ",
    "theme": "moonlight",
    "season": "winter",
    "url": "https://youtu.be/1IlTeOMCNJU?si=UD4brDkdcMAEkiIy"
  },
  {
    "title": "アルジャーノン",
    "artist": "ヨルシカ",
    "theme": "starlight",
    "season": "winter",
    "url": "https://youtu.be/_9_rUFrgLI8?si=NLqShCAvhTRqbm1j"
  },
  {
    "title": "451",
    "artist": "ヨルシカ",
    "theme": "ember",
    "season": "summer",
    "url": "https://youtu.be/RmYdZZLOYA8?si=MJmW32GxwqhDfgAu"
  },
  {
    "title": "斜陽",
    "artist": "ヨルシカ",
    "theme": "sunset_orange",
    "season": "autumn",
    "url": "https://youtu.be/IFccpKsUUL8?si=p3quC9vKoY8qzgcl"
  },
  {
    "title": "月光浴",
    "artist": "ヨルシカ",
    "theme": "moon",
    "season": "winter",
    "url": "https://youtu.be/wUzvF5xm2C0?si=uSp0oSeC9P8n7YzY"
  }
/*
ブレーメン
左右盲
アルジャーノン
451
斜陽
月光浴
忘れてください
https://youtu.be/J_DE2d1F9wU?si=_r0bBJs9hz8mMeVg
都落ち
https://youtu.be/pHdJmDFYqTU?si=kuZOSmBp0KjFi5U9


*/ 
];

const song =
songs[Math.floor(Math.random() * songs.length)];

document.getElementById("title").textContent = song.title;
document.getElementById("artist").textContent = song.artist;
document.getElementById("url").href = song.url;

document.body.className = "";

switch(song.theme){

    case "clear_sky":
        document.body.classList.add("theme-clear");
        break;

    case "summer_sky":
        document.body.classList.add("theme-summer");
        break;

    case "night":
        document.body.classList.add("theme-night");
        break;

    case "midnight":
        document.body.classList.add("theme-midnight");
        break;

    case "rain":
        document.body.classList.add("theme-rain");
        break;

    case "cherry":
        document.body.classList.add("theme-cherry");
        break;

    case "moon":
        document.body.classList.add("theme-moon");
        break;

    case "sunset":
    case "sunset_orange":
        document.body.classList.add("theme-sunset");
        break;

    case "ocean":
    case "sea":
        document.body.classList.add("theme-ocean");
        break;

    case "starlight":
        document.body.classList.add("theme-stars");
        break;

    default:
        document.body.classList.add("theme-default");
}
