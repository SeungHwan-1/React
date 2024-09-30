
// 데이터를 처리하는 로직을 별도의 파일로 분리하여
// api 처럼 사용하기 위함..
import menus from "../data/Menu-detail.json";

// 1. 메뉴 전체 반환

export function getMenuList (){
    return menus;
}

export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName)); //또 햇갈린다 매치 존재하는지
}

// 디테일 페이지 함수

export function getMenuDetail(menuCode){
    return menus.filter(menu=>menu.menuCode === parseInt(menuCode))[0];
}