export const Browser: any = {

	width: window.innerWidth,

	height: window.innerHeight,

	isMobile: () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
	},

	isDesktop: () => {
		return ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
	},

	sizeDevice: () => {
		if(window.innerWidth < 576) return 'xs';
		else if(window.innerWidth >= 576 && window.innerWidth < 768) return 'sm';
		else if(window.innerWidth >= 768 && window.innerWidth < 992) return 'md';
		else if(window.innerWidth >= 992 && window.innerWidth < 1200) return 'lg';
		else return 'xl';
	}

}