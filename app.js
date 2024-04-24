// About Bio Section
document.addEventListener("DOMContentLoaded", function () {
  const tablinks = document.querySelectorAll(".tab-links");
  const tabcontents = document.querySelectorAll(".tab-contents");

  function opentab(tabname, event) {
      for (const tablink of tablinks) {
          tablink.classList.remove("active-link");
      }
      for (const tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
      }

      event.currentTarget.classList.add("active-link");

      const selectedTabContent = document.getElementById(tabname);
      selectedTabContent.classList.add("active-tab");
  }

  // Attach click event listeners to tab links
  tablinks.forEach(function (tablink) {
      tablink.addEventListener("click", function (event) {
          const tabname = this.getAttribute("data-tab");
          opentab(tabname, event);
      });
  });
});



function submitContactForm() {
const form = document.forms['contact-form'];
const msg = document.getElementById('msg');

fetch(form.action, { method: 'POST', body: new FormData(form) })
    .then((response) => {
        if (response.ok) {
            msg.innerHTML = 'Message sent Successfully';
            // hide message after it's displayed
            setTimeout(function () {
                msg.innerHTML = '';
            }, 5000);
            // set to 5000 milliseconds - so after 5 seconds the message will be removed
            // then the form will reset
            setTimeout(function () {
                form.reset();
            }, 5000);
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch((error) => {
        console.error('Error!', error.message);
        msg.innerHTML = 'Error sending message. Please try again.';
    });
}

