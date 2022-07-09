(function () {
  emailjs.init("5Gb8B1NztNmHdfxVo");
})();

function sendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_07ws2z5", "template_55tph27", params)
    .then(function () {
      document.querySelector("#fullName").value = "";
      document.querySelector("#email_id").value = "";
      document.querySelector("#message").value = "";
    })
    .then(function () {
      alert("Success, Message sent!");
    })
    .catch(function (err) {
      alert(err);
    });
}

document.querySelector("#btnEmail").addEventListener("click", function (event) {
  event.preventDefault();
  sendMail();
});
