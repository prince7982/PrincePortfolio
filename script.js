var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }



        let menu = document.querySelector('#menu-icon');
        let navlist = document.querySelector('.navlist');

        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('active');
        };
        window.onscroll = () => {
            menu.classList.remove('bx-x');
            navlist.classList.remove('active');
        };



    //Mail option Contact
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxAyovYyiPWax0mb_4BFV-UVyALt2WUPMeVvGFClvPWFtwqPD62UDpR5VzaU-40BaVf/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    //see more button click item changed
    let currentGroup = 1;
    const totalGroups = 2; //update that if you add more groups

    document.getElementById('see-more-btn').addEventListener('click',function(){
        //hide current group
        let currentItems = document.querySelectorAll('.work-group-' + currentGroup);
        currentItems.forEach(item => item.style.display = 'none');

        //Increment current group and reset if it exceeds totalGroups
        currentGroup++;
        if (currentGroup > totalGroups){
            currentGroup = 1; //Reset to the first group
        }

        // Show the new current group
        let nextItems = document.querySelectorAll('.work-group-'+ currentGroup);
        nextItems.forEach(item => item.style.display = 'block');
    });