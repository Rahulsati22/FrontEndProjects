let body_header = document.getElementById("body_header");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let work_experience = document.getElementById("work_experience");
let education = document.getElementById("education");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");

about.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 84) {
      clearInterval(inter);
      return;
    } else window.scrollBy(0, 50);
    val += 50;
  }, 30);
});

skills.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 740) {
      clearInterval(inter);
      return;
    } else {
      window.scrollBy(0, 50);
      val += 50;
    }
  }, 30);
});

work_experience.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 990) {
      clearInterval(inter);
      return;
    } else {
      window.scrollBy(0, 50);
      val += 50;
    }
  }, 30);
});

education.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 1700) {
      clearInterval(inter);
      return;
    } else {
      window.scrollBy(0, 50);
      val += 50;
    }
  }, 30);
});

portfolio.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 2500) {
      clearInterval(inter);
      return;
    } else {
      window.scrollBy(0, 50);
      val += 50;
    }
  }, 30);
});

contact.addEventListener("click", function () {
  let val = 0;
  let inter = setInterval(function () {
    if (val >= 3188) {
      clearInterval(inter);
      return;
    } else {
      window.scrollBy(0, 50);
      val += 50;
    }
  }, 30);
});

let progress_bars = document.querySelectorAll(".skills_progress > div");
let skills_container = document.getElementById("skills");
let animation_done = false;
function initialize_bars() {
  for (let bar of progress_bars) {
    bar.style.width = 0 + '%';
  }
}
function fill_bars() {
  for (let bar of progress_bars)
  {
     let val = bar.getAttribute('data-bar-width');
     let counter = 0;
     let helper = setInterval(function()
     {
        if (counter >= val)
        {
          clearInterval(helper);
          return;
          
        }  
        else
        {
          bar.style.width = counter + '%';
        }
        counter += 5;
     },50);
  }
}
// let animation_done = true;
window.addEventListener("scroll", function () {
  
  let cordinates = skills_container.getBoundingClientRect(); //-->mtlb abhi kitna upar hai
  if (window.innerHeight >= cordinates.top && animation_done == false) {
    fill_bars();
    animation_done = true;
  }
  else if (window.innerHeight < cordinates.top)
  {
    // initialize_bars();
    animation_done = false;
    initialize_bars();
  }
});
