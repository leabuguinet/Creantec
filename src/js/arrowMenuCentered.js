const arrowMenuCentered = {
    init() {
        const documentHeight = () => {
            const doc = window.innerHeight
            const bgSideMenu = document.querySelector('.bg-side-menu');
            bgSideMenu.style.height = doc+'px'
        }
        window.addEventListener('resize', documentHeight);
        documentHeight(); 
    }
}
    
export default arrowMenuCentered;