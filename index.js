var firstName = prompt('Ismingizni kiriting');

var Grand = 'Siz Grand asosida oqishga qabul qilindizngiz';
var Shartnoma = 'Siz Shartnoma asosida oqishga qabul qilindingiz';
var Yiqilgan = 'Siz kirolmadingiz, oqish kerak edi uka.';
var error = 'Xato malumot kiritdingiz';

var OTM = prompt( firstName + ' OTM lardan birini tanlang: 1.TDIU 2.TDMI 3.MU' );

var point = prompt(firstName + ' toplagan balingizni kiriting:');

if (OTM==1){
  if (point >= 150) {
    alert(Grand);
  }
  else if (point >= 120) {
    alert(Shartnoma);
  }
  else if (0 < point < 120) {
    alert(Yiqilgan);
  }
  else {
    alert(error)};
}
else if (OTM==2){
  if (point > 160) {
    alert(Grand);
  }
  else if (point >= 100) {
    alert(Shartnoma);
  }
  else if (0 < point < 100) {
    alert(Yiqilgan);
  }
  else {
    alert(error)};
}
else if (OTM==3){
  if (point >= 180) {
    alert(Grand);
  }
  else if (point >= 168) {
    alert(Shartnoma);
  }
  else if (0 < point < 168) {
    alert(Yiqilgan);
  }
  else {
   alert(error)};
}
else {
  alert(error);
}