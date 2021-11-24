export function dateValidationCheck(str) {
  return new Promise((resolve, reject) => {
    const re = new RegExp(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/g
    );
    const isAuthorized = re.test(str);
    if (isAuthorized) {
      resolve(isAuthorized);
    } else {
      const errMsg = "請輸入 YYYY-MM-DD 日期格式";
      reject(errMsg);
    }
  });
}
