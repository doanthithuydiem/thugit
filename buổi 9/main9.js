var person = [
  {
    full_name: "Nguyễn Đào",
    Email: "daonq@vti.com.vn",
    password: "12345",
    confirmation_password: "12345",
    brithday: "12/09/2022",
  },
];

localStorage.setItem("demo", JSON.stringify(person));
localStorage.setItem("full_name", "Nguyễn Đào");
localStorage.setItem("Email", "daonq@vti.com.vn");
localStorage.setItem("password", "12345");
localStorage.setItem("confirmation_password", "12345");
localStorage.setItem("brithday", "12/09/2022");

