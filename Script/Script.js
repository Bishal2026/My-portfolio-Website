//typing animation
let typed = new  Typed(".typing",{
    strings: ["Web Developer","Data Scientist","Web Designer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
let typed1 = new  Typed(".typeing",{
    strings: ["Web Developer","Data Scientist","Web Designer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

// side-bar
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let  i = 0 ; i<totalNavList ; i++){
       
        const a= navlist[i].querySelector("a");
        a.addEventListener("click",function(){
          removeBackSection();
            for(let j =0 ; j<totalNavList;j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                //    allSection[j].classList.add("back-section");
                }
                navlist[j].querySelector("a").classList.remove("active")

            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
        })
    }
     function removeBackSection(){
        for(let i =0 ; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

     }
     function addBackSection(num){
        allSection[num].classList.add("back-section");

     }
    function showSection(e){
        for(let i =0 ; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
       const target = e.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active");
       
    }
    function updateNav(e){
        for(let i =0; i<totalNavList;i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target = e.getAttribute("href").split("#")[1];
            if(target == navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
        }
    }
    
    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    document.querySelector(".one-more").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navToggerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navToggerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navToggerBtn.classList.toggle("open");
        for(let i =0; i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let Massages = document.getElementById("Massages").value;

    let body= "Name :" + name +"<br/> Email :" + email +"<br/> Subject :"
    + subject +"<br/> Massages :" + Massages;    
    
    Email.send({
        // SecureToken :"c7650701-0e84-4cfa-90f0-d67611eac389",  
        Host : "smtp.elasticemail.com",
        Username : "bishaljana2050@gmail.com",
        Password : "F3AD822A90C7E668AF02B688E92C487AA4AA", 
        To : "bishaljana2026@gmail.com",
        From : "bishaljana2050@gmail.com",
        Subject : "This is portfolio contact form mail",
        Body : body
    }).then(
      message =>{
        if(message == 'OK' ){
            swal("Successfull!!!", "You data secuessfully Recived", "success");
        }
        else{
            swal("Successfull", "You data not Recived!!!!", "error");
        }
      }
    );
}