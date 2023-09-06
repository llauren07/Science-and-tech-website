const parentItems = document.querySelectorAll('li');
        parentItems.forEach(parentItem => {
            parentItem.addEventListener('click', () => {
                const subMenu = parentItem.querySelector('.sub-menu');
                if (subMenu.style.display === 'block') {
                    subMenu.style.display = 'none';
                } else {
                    subMenu.style.display = 'block';
                }
            });
        });