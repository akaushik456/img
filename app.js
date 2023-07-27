const selectors = {
		secondMenu: '.second-menu',
		firstMenu: '.first-menu',
		dropdownMenu: '.dropdown-menu',
		mainMenu: '.main-menu',
        menuVisible: '.menu-visible',
        activeMenu:'.active-menu',
        closeIcon:'.close-icon',
        styledMenu:'.styled-menu',
		logoRevert:'.logo-revert'
	},
	addClass = {
		menuVisible: 'menu-visible',
        activeMenu:'active-menu'
	};

let horizontalMenu = document.querySelector(selectors.firstMenu);
let mainMenu = horizontalMenu.querySelector(selectors.mainMenu);
mainMenu.querySelectorAll('li').forEach((ele) => {
	if (ele.querySelector('a').dataset?.menu?.length > 0) {
		ele.querySelector('a').addEventListener(
			'mouseover',
			function(event) {
                mainMenu.querySelector(selectors.activeMenu)?.classList.remove(addClass.activeMenu)
				let targetMenu = ele.querySelector('a').dataset.menu;
				let secondMenu = document.querySelector(selectors.secondMenu);
				secondMenu.querySelector(selectors.menuVisible)?.classList.remove(addClass.menuVisible);
				let viewdMenu = secondMenu.querySelector('#' + targetMenu);
				viewdMenu.classList.add(addClass.menuVisible);
                ele.querySelector('a').classList.add(addClass.activeMenu)
			},
			false
		);
	}
});
document.querySelector(selectors.closeIcon).addEventListener('click', function(){
    document.querySelector(selectors.styledMenu).classList.remove('visible-menu');
})
document.querySelector('.humbrg-menu').addEventListener('click', function(){
    document.querySelector(selectors.styledMenu).classList.add('visible-menu');
})

