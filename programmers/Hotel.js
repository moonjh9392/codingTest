/**
 * 프로그래머스
 * 호텔 대실
 * Lv 2
 */

function solution(book_time) {
  //시간을 분으로 생각
  //하루 00:00 ~ 23:59 = 0 ~ 1439(23*60+59)
  const room = [];
  book_time.map((time) => {
    const [start, end] = time;
    const newStart = start.split(':');
    const newEnd = end.split(':');

    const totalStart = Number(newStart[0]) * 60 + Number(newStart[1]);
    const totalEnd = Number(newEnd[0]) * 60 + Number(newEnd[1]);

    if (room.length === 0) {
      room.push(new Array(1439).fill(0));
    }

    if (room[0][totalStart] === 0) {
    }
  });
  return room;
}
