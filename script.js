setInterval(() => {
  let a = new Date();

  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let pm, greet;

  if (h < 12) {
    greet = "Good Morning";
    pm = "AM";
  } else if (h < 16) {
    greet = "Good Afternoon";
    pm = "PM";
  } else {
    greet = "Good Evening";
    pm = "PM";
  }

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h -= 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let d = a.getDate();
  let M = a.getMonth();
  let Y = a.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  M = monthNames[M];

  let p1 = document.getElementById("date");
  if (!p1) {
    let p1 = document.createElement("p");
    p1.id = "date";
    document.body.append(p1);
  }
  p1.innerHTML = `<p>Today is <span id="spDate">${d} ${M} ${Y}</span></p>`;

  let p2 = document.getElementById("time");
  if (!p2) {
    let p2 = document.createElement("p");
    p2.id = "time";
    document.body.append(p2);
  }
  p2.innerHTML = `<p>And current time is <span id="spTime">${h}:${m}:${s} ${pm}</span></p>`;

  let p3 = document.getElementById("greeting");
  if (!p3) {
    let p3 = document.createElement("p");
    p3.id = "greeting";
    document.body.append(p3);
  }
  p3.innerText = `So, ${greet}!`;
}, 10);
