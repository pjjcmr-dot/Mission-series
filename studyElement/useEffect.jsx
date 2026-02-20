//!useEffect

// 실행할 작업
useEffect(() => {}, [의존성]);

//최초 한번만
useEffect(() => {}, []);

//count 바뀔 때마다
useEffect(() => {}, [count]);

// 매 렌더링마다(거의 안씀)
useEffect(() => {});

// 1. 컴포넌트가 처음 나타날 때 API 호출
useEffect(() => {
  fetch("/api/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []); // [] = 최초 1번만 실행

// 2. 특정 값이 바뀔 때마다 실행
useEffect(() => {
  console.log("count가 변경됨:", count);
}, [count]); // count가 바뀔 때마다 실행

// 3. 타이머 설정 & 정리
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timer); // 컴포넌트 사라질 때 정리
}, []);
