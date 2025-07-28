

//serviceCards load

document.addEventListener("DOMContentLoaded", function () {
  const services = [
    { icon: "fa-solid fa-code", title: "web designing" },
    { icon: "fa-solid fa-sliders", title: "photoshop" },
    { icon: "fa-solid fa-scissors", title: "editing" }
  ];

  const container = document.getElementById("serviceCards");

  if (!container) {
    console.error("❌ Element with id='serviceCards' not found.");
    return;
  }

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = "e";
    card.style.width = "20rem";
    card.innerHTML = `
      <div class="card-body">
        <div id="i">
          <i class="${service.icon}"></i>
          <h3 align="center">${service.title}</h3>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  console.log("✅ Services injected successfully.");
});


//skill-bar load

document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    { name: "Python", percent: 65, id: "pro5" },
    { name: "HTML", percent: 75, id: "pro1" },
    { name: "CSS", percent: 70, id: "pro2" },
    { name: "JavaScript", percent: 70, id: "pro3" },
    { name: "MySQL", percent: 40, id: "pro4" }
  ];

  const skillContainer = document.getElementById("d");

  if (!skillContainer) {
    console.error("❌ Skill container with id='d' not found.");
    return;
  }

  skills.forEach(skill => {
    const skillBar = document.createElement("div");
    skillBar.className = "skill-bar";
    skillBar.innerHTML = `
      <h3>${skill.name} <span>${skill.percent}%</span></h3>
      <div class="progress" id="${skill.id}">
        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
          style="width: 0%;" aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    `;
    skillContainer.appendChild(skillBar);
  });
});

//resumeInfo
document.addEventListener("DOMContentLoaded", function () {
  const educationData = [
    {
      title: "SRM Valliammai Engineering College",
      degree: "Bachelor Of Computer Science And Engineering",
      board: "Anna University",
      year: "2024-2027",
      extra: "(pursuing)",
      color: "rgb(255, 255, 112)"
    },
    {
      title: "Government polytechnic College, Thuvakudimalai",
      degree: "DIPLOMA in Computer Engineering",
      board: "DOTE",
      year: "2020-2023",
      extra: "76%",
      color: "rgb(255, 255, 112)"
    },
    {
      title: "Govt. Boys Hr Sec School, Alangudi",
      degree: "SSLC",
      board: "State Board",
      year: "March 2017",
      extra: "57%",
      color: "rgb(255, 255, 112)"
    }
  ];

  const experienceData = [
    {
      title: "HIGH LIFE.AI Pvt.",
      role: "Completed one-month internship",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      duration: "1st July 2022 to 30th July 2022"
    },
    {
      title: "DCKAP",
      role: "Worked as Software Trainee",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      duration: "July 2023 to Sep 2023"
    }
  ];

  const eduContainer = document.getElementById("education-content");
  const expContainer = document.getElementById("experience-content");

  // Render Education
  educationData.forEach(item => {
    eduContainer.innerHTML += `
      <p style="text-align: center; color: ${item.color};">${item.title}</p>
      <p style="text-align: center;">${item.degree}</p>
      <p style="text-align: center; color:  rgb(170, 158, 158);">${item.board}</p>
      <p style="text-align: center; color:  rgb(170, 158, 158);">${item.year}</p>
      <p style="text-align: center; color:  rgb(170, 158, 158);">${item.extra}</p>
    `;
  });

  // Render Experience
  experienceData.forEach(item => {
    expContainer.innerHTML += `
      <br>
      <p style="text-align: center; color: rgb(255, 255, 112);">${item.title}</p>
      <p style="text-align: center;">${item.role}</p>
      ${item.skills.map(skill => `<p style="text-align: center; color: rgb(170, 158, 158);">${skill}</p>`).join("")}
      <p style="text-align: center; color: rgb(170, 158, 158);">from ${item.duration}</p>
      <br>
    `;
  });
});



//Portfolio Achievement Cards Load

document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    { img: "1739120050045.jpg", text: "Certificate from my internship at Hilife.ai." },
    { img: "IMG_20241125_123353.jpg", text: "Achieved during Hack24 hackathon event." },
    { img: "IMG_20250225_223052.jpg", text: "Earned from MIT's Math Geek competition showcasing problem-solving skills." },
    { img: "Arunachalam A.png", text: "Participation certificate from the Blueprint event by Coderizz." },
    { img: "arunashalam.png", text: "Hands-on learning in Game Development at Coderizz workshop." },
    { img: "Arunachalam.A_page-0001.jpg", text: "Certificate from Vecoders' Frontend Forensics tech event." },
    { img: "IMG_20250209_225552.jpg", text: "Outstanding solution in Women Empowerment track – HACKZ24 by CSEA, CEG & Temenos (2024)." },
    { img: "1739121129585.jpg", text: "Won 1st prize for a short film on nature." }
  ];

  const container = document.getElementById("achievementCards");

  if (!container) {
    console.error("❌ Element with id='achievementCards' not found.");
    return;
  }

  cards.forEach((card, index) => {
    // Check if both img and text are defined
    if (!card.img || !card.text) {
      console.warn(`⚠️ Card at index ${index} is missing img or text.`);
      return;
    }

    const cardHTML = `
      <div class="card ef" style="width: 20rem; background-color: #090d19; border: 3px solid #17203a; border-radius: 10px; overflow: hidden; margin: 20px;">
        <div class="card-body">
          <img src="${card.img}" width="100%" alt="${card.text}" style="box-shadow: -30px 10px 50px #17203a;">
          <hr>
          <p style="text-align: center; margin: 0px;">${card.text}</p>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  console.log("✅ All cards rendered.");
});




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
    '#pro5 .progress-bar': '65%'
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
