const theme=localStorage
.getItem("abh-theme");
if(theme==="dark")document.body.classList
.add("dark");
document.addEventListener("click",e=>{const t=e.target.closest("[data-theme]");
    if(t){document.body.classList.toggle("dark");
        localStorage.setItem("abh-theme",document.body.classList.contains("dark")?"dark":"light")
    }
}
);