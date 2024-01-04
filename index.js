/* 1. 새로고침(Refresh) 버튼 연결 */
function refreshPage() {
  location.reload();
}


/* 2.  뒤로가기 버튼 */
function goBack() {
  window.history.back();
}


/* 3.  메뉴 토글버튼으로 메뉴 보이게 하기 */
const tooglebutton = document.querySelector('.top_menu_tooglebutton');
const top_menu = document.querySelector('.top_menu_1');

tooglebutton.addEventListener('click', () => {
  top_menu.classList.toggle('active');


});
