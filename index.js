const fs = require("fs");
const mp3Duration = require("mp3-duration");
const MP3Cutter = require("mp3-cutter");

const origin = "./origin/";
// 몇 초 단위로 mp3를 끊을지 설정
const SPLIT_TIME = 10;

fs.readdirSync(origin).forEach((file) => {
  const filePath = `${origin}${file}`;
  const fileName = file.substring(0, file.indexOf("."));

  mp3Duration(filePath, (err, duration) => {
    if (err) {
      console.log(err.message);
      return;
    }

    // 추출 디렉토리 생성
    const target_dir = `./export/${fileName}`;
    if (!fs.existsSync(target_dir)) {
      fs.mkdirSync(target_dir);
    }

    // 최대 번호 자릿수 (작은 자릿수 앞에 0을 추가하기 위함)
    const maxDigit = Math.floor(duration / SPLIT_TIME).toString().length;

    // 최소 SPLIT_TIME 만큼의 음원이 짤리도록
    for (var i = 0; i <= duration - SPLIT_TIME; i += SPLIT_TIME) {
      var number = (i / SPLIT_TIME + 1).toString();
      while (number.length < maxDigit) {
        number = "0" + number;
      }
      MP3Cutter.cut({
        src: filePath,
        target: `${target_dir}/${fileName}-${number}.mp3`,
        start: i,
        end: i + SPLIT_TIME,
      });
    }
  });
});
