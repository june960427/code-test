# 1일차

<ul>
<li>스프레드 문법 [...arr] => arr.split("")</li>
<li>str.repeat(i) => string 반복 시 사용가능 </li>
<li>Math.max(Number(`${a}${b}`), Number(`${b}${a}`)); => 백틱 활용법에 대해 넓게 생각해보기</li>
<li>let num1 = parseInt(a + "" + b); => 스트링 변환 시 해당 방법도 고려해보기</li>
</ul>

# 2일차

<ul>
<li>간단한 조건문은 삼항 연산자 사용 인지</li>
<li>num % n ? 0 : 1; 와 같이 0과 1을 사용할 때는 boolean 활용</li>
<li>논리 연산자 리마인드 [ false = 0, true = 1, || 하나라도 0이 아니면 true, !(i) 연산 결과 뒤집기,  + 플러스 연산자 = 피연산자를 숫자로 변형 => Number(bool)도 가 ]</li>
<li>Array(i).fill() [Array(i) 길이가 i인 빈 배열 발생, fill() 빈 배열을 undefined로 채움]</li>
<li>Math.pow(base,exponent) [Math.pow(b,2) b의 제곱]</li>
<li>
  <ul>
    <li>reduce()</li>
    <li>acc -> 콜백 함수의 반환 값 또는 이전 순회에서의 최종 결과값. 초기 값이 제공된 경우 첫 번째 순회에서는 초기 값으로 설정 [arr[0]의 값, 나미지는 undefined]</li>
    <li>cur -> 현재 순회 중인 배열의 요소[arr[0] 이후의 값]</li>
    <li>i -> 현재 순회 중인 배열의 요소 인덱스</li>
    <li>arr -> reduce 함수가 호출된 배열</li>
  </ul>
</li>
<li>arr['str'] 대괄호 표기볍</li>
</ul>
