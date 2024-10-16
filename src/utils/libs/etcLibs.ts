export function getErrorMsg(error: any) {
  try {
    // 에러가 json 형태가 아닐 때 err를 일으켜 try-catch로 잡음
    const parsedError = JSON.parse(error.message);
    const msg = parsedError.value
      ? parsedError.value.message
      : parsedError.error
      ? parsedError.error.message
      : parsedError.message || "네트워크 에러";
    return msg;
  } catch (err) {
    return "네트워크 에러";
  }
}
