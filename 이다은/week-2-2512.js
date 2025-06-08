/**
 * 2 주차 - 이진 탐색
 */
const fs = require('fs');
const input = `4
120 110 140 150
485`.trim().split('\n');
//디버깅을 위해 input값 수정, 백준에는 아래 코드 사용
//fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 지방의 수
const requests = input[1].split(' ').map(Number); // 각 지방의 예산 요청
const M = Number(input[2]); // 총 예산

const hap = requests.reduce((acc,v) => acc + v); // 요청한 예산의 합

if ( hap <= M ) {
    console.log(Math.max(...requests));
} else {
    let start = 0;
    let end = Math.max(...requests);
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let total = requests.reduce((acc, v) => acc + Math.min(v, mid), 0);
        //mid를 상한선으로 잡았을 떄 총합 계산(요청한 예산 or 초과시에는 mid로 계산)

        if (total <= M) {
        // 이진 탐색 구현: 
        result = mid; // 일단 가능한 값 저장
        start = mid + 1; //예산이 남으면 더 높은 상한선 시도
        } else {
            // 예산 초과로 상한선 낮춤
            end = mid - 1;
        }
    }
    console.log(result);
}

console.log();
