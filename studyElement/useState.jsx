//? modal 열기/닫기

import { useState } from "react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      {isOpen && (
        <div>
          모달 내용
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
}
// false = 기본 닫힘
// true = 열림

//?로딩 상태 관리 (API 호출)
function DataLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(() => setLoading(false));
  }, []);

  if (loading) return <div>로딩중...</div>;

  return <div>데이터 표시</div>;
}

// 처음 = true(로딩중);
// 완료 = false;

//? 비밀번호 보기/숨기기 토글
function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow((prev) => !prev)}>보기</button>
    </div>
  );
}

// false = 숨김
// true = 표시

//? 체크박스 상태 제어
function AgreeCheck() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      동의합니다
    </label>
  );
}

//? 로그인 상태 관리

function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? "로그인됨" : "로그인 필요"}

      <button onClick={() => setIsLogin(true)}>로그인</button>
    </div>
  );
}

//? 메뉴 펼침 / 접힘
function Menu() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>메뉴 토글</button>

      {open && (
        <ul>
          <li>홈</li>
          <li>상품</li>
        </ul>
      )}
    </div>
  );
}

//? 에러 표시 여부
function Form() {
  const [hasError, setHasError] = useState(false);

  const submit = () => {
    if (값검사실패) {
      setHasError(true);
    }
  };

  return (
    <>
      {hasError && <p>에러 발생</p>}
      <button onClick={submit}>제출</button>
    </>
  );
}

//? 실무 베스트 토글 패턴 (공식 권장)
setState((prev) => !prev);
setOpen((prev) => !prev);

// React 비동기 렌더링 환경에서도 안전
// 이전 값 기반 업데이트 보장

//? boolean 상태 설계 베스트 네이밍

isOpen;
isLoading;
isVisible;
hasError;
isChecked;
isLogin;
