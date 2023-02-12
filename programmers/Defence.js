/**
 * 프로그래머스
 * 디펜스 게임
 * Lv 2
 */

function solution(n, k, enemy) {
  var answer = 0;

  enemy.map((round) => {
    if (n < round) {
      if (k > 0) {
        k -= 1;
        answer++;
      }
    } else {
      if (k > 0) {
        n -= round;
        answer++;
      }
    }
  });

  return answer;
}
