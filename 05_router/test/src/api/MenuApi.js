import menus from "../data/menu-detail.json";

export const getMenuList = () => {
    return (
        menus
    )
}
export function getMenuDetail(menuCode){
    return menus.filter(menu=>menu.id === parseInt(menuCode))[0];
}