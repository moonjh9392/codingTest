/**
 * 프로그래머스
 * 혼자 놀기의 달인
 * Lv 2
 */

function solution(cards) {
  const check = new Array(cards.length).fill(false);

  function open(number) {
    if (cards[number]) {
      console.log(number);
      check[number] = true;
      open(cards[number] - 1);
    }
  }

  open(0);

  const group1 = check.filter((e) => e === true).length;
  const group2 = check.length - group1;

  console.log(group1, group2);

  return group1 * group2;
}
