$(document).ready(function() {

  $('#color__gen').click(function(e) {
    superagent.get('http://webtier2016.christianle.com/v1/color')
    .end(function(err, res) {
      if (err) {
        $('#color__gen')
          .text("Your request failed, try again.")
          .css({
            color: 'red'
          });
        console.log(err);
      } else {
        $('#color__gen')
          .css({
            background: res.body.hex
          })
        console.log(res);
      }
    });
  })

  $('#submit').click(function(e) {
    e.preventDefault();

    var person = $('#name').val();
    var mail = $('#email').val();
    var msg = $('#message').val();

    superagent.post('http://webtier2016.christianle.com/v1/contact')
      .send({
        name: person,
        email: mail,
        message: msg
      })
      .end(function(err, res) {
        if (err) {
          $('#display__message')
            .text("Your request failed, try again.")
            .css({
              color: 'red'
            })
          console.log("error");
          console.log(err);
        } else {
          $('#display__message')
            .text(res.body.message)
            .css({
              color: 'green'
            })
          console.log("success");
          console.log(res);
        }
      })
  });
});

