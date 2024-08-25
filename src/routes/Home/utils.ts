const verifyCode = (code: string) => {
  return code === process.env.REACT_APP_CODE;
};

export const returnVerify = (code: string) => {
  return verifyCode(code);
};
