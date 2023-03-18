$(function () {
  let button = $(".form-body .create");
  let studentList = $(".student-list-body");

  let students = [];

  let delStudents = [];

  let count = 0;

  let html = '';


  if (JSON.parse(localStorage.getItem("students")) != null) {
    students = JSON.parse(localStorage.getItem("students"));

    delStudents = JSON.parse(localStorage.getItem("delStudents"));

    count = JSON.parse(localStorage.getItem("count"));
  }


  for (const stu of students) {
    html +=
      `<div class="student-list">
        <p class="student-data id" data-id = "${stu.id}">${stu.id}</p>
        <p class="student-data">${stu.name}</p>
        <p class="student-data">${stu.surname}</p>
        <i class="fa-regular fa-pen-to-square update"></i>
        <i class="fa-solid fa-xmark remove"></i>
      </div>`;
  }
  studentList.html(html);


  button.on("click", function () {

    let name = $(this).parent().children(".name");

    let surname = $(this).parent().children(".surname");

    if (name.val() == "" || surname.val() == "") {
      alert("Please fill the input");
    } else {

      count += 1;


      let stu = {
        id: count,
        name: name.val(),
        surname: surname.val()
      }

      html +=
        `<div class="student-list">
          <p class="student-data id" data-id = "${stu.id}">${stu.id}</p>
          <p class="student-data">${stu.name}</p>
          <p class="student-data">${stu.surname}</p>
          <i class="fa-regular fa-pen-to-square update"></i>
          <i class="fa-solid fa-xmark remove"></i>
        </div>`;

      studentList.html(html);

      students.push(stu);




      localStorage.setItem("students", JSON.stringify(students));

      localStorage.setItem("count", JSON.stringify(count));

      name.val("");
      surname.val("");


      let remove = $(".remove");


      for (var a = 0; a < remove.length; a++) {
        remove.on("click", function () {

          $(this).parent().remove();

          for (const stu of students) {

            if ($(this).parent().children(1).attr("data-id") == stu.id) {

              $(this).parent().remove();

              let slice = [];

              slice = students.slice(0, students.indexOf(stu));
              students = students.slice(students.indexOf(stu), students.lastIndexOf() + students.length + 1);

              // delStudents.push(students[0]);

              students.shift();

              students = slice.concat(students);

              localStorage.setItem("delStudents", JSON.stringify(delStudents));

              localStorage.setItem("students", JSON.stringify(students));
            }
          }


        });
      }


      let update = $(".update");

      for (let i = 0; i < update.length; i++) {
        update.on("click", function () {
          let formBody = $(".student-update")
          formBody.css("display", "block");
          $(".body").css("filter", "blur(10px)");

          let updt = $(this);

          for (const stu of students) {
            if ($(this).parent().children(1).attr("data-id") == stu.id) {

              let updateBtn = $(".update-create");

              updateBtn.on("click", function () {
                let upname = $(".up-name");
                let upsurname = $(".up-surname");

                if (upname.val() == "" || upsurname.val() == "") {
                  alert("Please fill the input");
                } else {
                  stu.name = upname.val();

                  stu.surname = upsurname.val();

                  localStorage.setItem("students", JSON.stringify(students));

                  updt.prev().prev().text(upname.val());

                  updt.prev().text(upsurname.val());

                  formBody.css("display", "none");
                  $(".body").css("filter", "blur(0px)");
                }
              })

            }
          }
          $(".exit").on("click", function () {
            formBody.css("display", "none");
            $(".body").css("filter", "blur(0px)");
          })
        })
      }



    }
  })


  let remove = $(".remove");


  for (var a = 0; a < remove.length; a++) {
    remove.on("click", function () {

      $(this).parent().remove();

      // console.log($(remove).parent().children(1).attr("data-id"));
      for (const stu of students) {
        if ($(this).parent().children(1).attr("data-id") == stu.id) {

          let slice = [];

          slice = students.slice(0, students.indexOf(stu));
          students = students.slice(students.indexOf(stu), students.lastIndexOf() + students.length + 1);

          // delStudents.push(students[0]);
          students.shift();

          students = slice.concat(students);

          localStorage.setItem("delStudents", JSON.stringify(delStudents));

          localStorage.setItem("students", JSON.stringify(students));
          // console.log("salam");
        }
      }
    });
  }


  let update = $(".update");

  for (let i = 0; i < update.length; i++) {
    update.on("click", function () {
      let formBody = $(".student-update")
      formBody.css("display", "block");
      $(".body").css("filter", "blur(10px)");

      let updt = $(this);


      for (const stu of students) {
        if ($(this).parent().children(1).attr("data-id") == stu.id) {

          let updateBtn = $(".update-create");

          updateBtn.on("click", function () {
            let upname = $(".up-name");
            let upsurname = $(".up-surname");

            if (upname.val() == "" || upsurname.val() == "") {
              alert("Please fill the input");
            } else {
              stu.name = upname.val();

              stu.surname = upsurname.val();

              localStorage.setItem("students", JSON.stringify(students));

              updt.prev().prev().text(upname.val());

              updt.prev().text(upsurname.val());

              formBody.css("display", "none");
              $(".body").css("filter", "blur(0px)");
            }
          })

        }
      }
      $(".exit").on("click", function () {
        formBody.css("display", "none");
        $(".body").css("filter", "blur(0px)");
      })
    })
  }

})













