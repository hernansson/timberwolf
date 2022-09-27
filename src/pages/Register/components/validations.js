export const validations = {
  name: text => text.length < 40 && text.length > 0,
  email: email =>
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email,
    ),
  phone: phone => 10 <= phone.length && phone.length <= 11,
  tos: tos => console.log(tos),
};
