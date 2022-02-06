let linkArray = [
    { displayName: 'Google', link: 'http://google.com', onlyForAdults: false },
    { displayName: 'Facebook', link: 'http://facebook.com', onlyForAdults: true }
];
const menuButton = document.querySelector('.btn-info');
let menuList = document.querySelector('.menu-list');
 
function createMenu(linkArray) {
    
    for (let i = 0; i < linkArray.length; i++) {
        let liElement = document.createElement('li');
        liElement.className = 'li-element';
        liElement.innerHTML = `<a href="${linkArray[i]['link']}">${linkArray[i]['displayName']}</a>`;
        menuList.appendChild(liElement);   
        liElement.addEventListener('click', function (e) { 
            if (linkArray[i].onlyForAdults === true && confirm('Are you 18 years old?')===false) {
              e.preventDefault();         
            };
      })
    }
    return menuList;
};

document.addEventListener('click', function (e) {
    if (e.target == menuButton) {
        createMenu(linkArray); 

    } else {
 
             menuList.innerHTML = '';
         }

    } 
);

