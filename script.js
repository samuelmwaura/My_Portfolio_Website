const profileSection = document.querySelector('#profile #webprogrammingStatement');
const ruby = document.getElementById('ruby');
const webProgramming= document.getElementById('webProgrammingImg');
const webDesignImg = document.querySelector('#profile #webDesign');
const webDevelopment = document.getElementById('webDevelopment');
const links = document.getElementsByClassName('links');

profileSection.addEventListener('mouseover',()=>{
    ruby.style.display ='block';
    webProgramming.style.display = 'none';
});

profileSection.addEventListener('mouseout',()=>{
    ruby.style.display ='none';
    webProgramming.style.display = 'block';
});

webDesignImg.addEventListener('mouseover',()=>{
webDevelopment.style.display = 'block';
webDesignImg.style.display = 'none';
});

webDesignImg.addEventListener('mouseout',()=>{
webDesignImg.style.display = 'block';
webDevelopment.style.display = 'none';
});


for(let i=0;i<links.length;i++){
    links[i].addEventListener('mouseover',()=>{
    links[i].style.color= '#020d1f';
})
    links[i].addEventListener('mouseout',()=>{
    links[i].style.color ='white';
    })
}
