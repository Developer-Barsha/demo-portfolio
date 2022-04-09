const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove', e=>{
    cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")
})

const expand=document.querySelector('.expand');
document.addEventListener('click', e=>{
    cursor.classList.add('expand');
    setTimeout(()=>{
        cursor.classList.remove('expand');
    }, 500)
})