/**
 * 프로그래머스
 * 호텔 대실
 * Lv 2
 */

function solution(book_time) {
  //시간을 분으로 생각
  //하루 00:00 ~ 23:59 = 0 ~ 1439(23*60+59)
  const room = [];

  if (book_time.length === 0) return 0;

  //분단위로 변경
  book_time.map((time) => {
    const [start, end] = time;
    const newStart = start.split(':');
    const newEnd = end.split(':');

    const totalStart = Number(newStart[0]) * 60 + Number(newStart[1]);
    const totalEnd = Number(newEnd[0]) * 60 + Number(newEnd[1]);

    checkRoom(room, 0, totalStart, totalEnd);
  });

  return room.length;
}

function checkRoom(room, index, start, end) {
  //index 배열이 없으면 새로만듬
  if (!room[index]) {
    room.push(new Array(1439).fill(0));
  }
  //입실~퇴실까지 배열을 0 => 1로 변경
  if (room[index][start] === 0) {
    for (let i = start; i <= end; i++) {
      room[index][i] = 1;
    }
  } else {
    //이미 차있는 방일 경우 새로운 방생성
    if (!room[index + 1]) {
      room.push(new Array(1439).fill(0));
    }
    checkRoom(room, index + 1, start, end);
  }
}
