export const validations = {
  name: text => text.length < 40 && text.length > 0,
  user: email =>
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email,
    ),
  password: phone => phone.length > 6,
  passwordVerify: (verify, password) => console.log(verify, password),
  tos: tos => console.log(tos),
};
