document.addEventListener("DOMContentLoaded", function () {
  // 1. Scroll Animation for .hidden elements
  const hiddenElements = document.querySelectorAll(".hidden");
  const hiddenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, { threshold: 0.3 });
  hiddenElements.forEach(el => hiddenObserver.observe(el));

  // 2. Animate .col-sm-4 (usually image)
  const imgCol = document.querySelector(".col-sm-4");
  if (imgCol) {
    imgCol.classList.add("animate-image");
    hiddenObserver.observe(imgCol);
  }

  // 3. Service Section Animation (cards with #e — optional ID)
  const serviceCards = document.querySelectorAll('#e');
  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, { threshold: 0.2 });
  serviceCards.forEach(card => serviceObserver.observe(card));

  // 4. Skill Progress Bars in #d
  const skillBox = document.querySelector('#d');
  const progressBars = {
    '#pro1 .progress-bar': '75%',
    '#pro2 .progress-bar': '70%',
    '#pro3 .progress-bar': '70%',
    '#pro4 .progress-bar': '40%',
    '#pro5 .progress-bar': '45%'
  };
  if (skillBox) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting;
        skillBox.classList.toggle('visible', isVisible);
        for (let selector in progressBars) {
          const bar = document.querySelector(selector);
          if (bar) bar.style.width = isVisible ? progressBars[selector] : '0%';
        }
      });
    }, { threshold: 0.3 });
    skillObserver.observe(skillBox);
  }

  // 5. Contact Left & Right Columns
  const contactCols = document.querySelectorAll('#contact ~ .row .col-sm-6');
  if (contactCols.length >= 2) {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.2 });

    contactCols[0].classList.add("animate-on-scroll", "animate-left");
    contactCols[1].classList.add("animate-on-scroll", "animate-right");
    contactObserver.observe(contactCols[0]);
    contactObserver.observe(contactCols[1]);
  }

  // 6. Contact Elements: #say, #says, .vlc
  const contactElements = document.querySelectorAll('.vlc, #say, #says');
  const subContactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, { threshold: 0.2 });
  contactElements.forEach(el => {
    el.classList.add("animate-on-scroll");
    subContactObserver.observe(el);
  });

  // 7. About Section Animation (.col-sm-8)
  const aboutSection = document.querySelector(".col-sm-8");
  if (aboutSection) {
    aboutSection.classList.add("animate-about");
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutSection);
  }

  // 8. Resume Left & Right Columns (.col-sm-6)
  const resumeCols = document.querySelectorAll('.col-sm-6');
  if (resumeCols.length >= 2) {
    const resumeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.3 });

    resumeCols[0].classList.add("resume-animate", "resume-left");
    resumeCols[1].classList.add("resume-animate", "resume-right");
    resumeObserver.observe(resumeCols[0]);
    resumeObserver.observe(resumeCols[1]);
  }

  // 9. Skill Section Left Text (.skill-left)
  const skillLeft = document.querySelector(".skill-left");
  if (skillLeft) {
    const skillTextObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.2 });
    skillLeft.classList.add("animate-on-scroll");
    skillTextObserver.observe(skillLeft);
  }

  // 10. Typing Animation
  function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  const typedElement = document.getElementById("typed-text");
  if (typedElement) {
    typedElement.innerHTML = ""; // Reset before typing
    typeEffect(typedElement, "Hi, I Am ArunachalaM", 120);
  }

  // 11. Portfolio Section Cards (.ef)
  const efCards = document.querySelectorAll('.ef');
  const efObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.2 });
  efCards.forEach(card => efObserver.observe(card));
});
