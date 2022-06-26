//querySelector tool will select the specific class or id
//if it is a class "." and if it is a id "#"
const closeface = document.querySelector('.close');
const openface = document.querySelector('.open');


//Add event listners

closeface.addEventListener('click', () => {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
})

openface.addEventListener('click', () => {
    if (closeface.classList.contains('close')) {
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
})

