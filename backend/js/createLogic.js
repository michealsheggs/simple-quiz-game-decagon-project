$('#createbtn').on('click',function(e){
    const added_question = $('#createquestion').val();
    const option_one = $('#option_one').val();
    const option_two = $('#option_two').val();
    const option_three = $('#option_three').val();    
    const option_four = $('#option_four').val(); 
    const getElement =$("#view_question");
 
    e.preventDefault();
    //option declaration
    
    const anwser_one = $('#option_A').val();
    const anwser_two = $('#option_B').val();
    const anwser_three = $('#option_C').val();
    const anwser_four = $('#option_D').val();
    e.preventDefault();

//check if all fields are filled
    if (!added_question && !option_one && !option_two && !option_three && !option_four) {
        $('#display_alert').html('please fill all the empty fields');
        return;
      }else if (!anwser_one || !anwser_two || !anwser_three ||!anwser_four){
      //check if anwser is provided
      $('#display_alert').html('please choose your anser');
        return;
      }else{
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/questions',
            data: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                added_question,
                option_one,
                option_two,
                option_three,
                option_four,
            },
            success: function() {
              $('#display_alert').html('created question successfully');
            },
          });
        //check radio box
        $.ajax("#options").click(function(){
            let radioValue = $("input:radio").val();
            alert('working')
            // if(radioValue){
            //     alert("Your are a - " + radioValue);
            // }
        });
    //get all the  data from database
    $.ajax({
        method: "GET",
        url: 'http://localhost:3000/questions',
        data: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        //     added_question,
        //     option_one,
        //     option_two,
        //     option_three,
        //     option_four,

        },
        success: function(resopnse){
            $.each(questions, function(i, questions){
                // questions.append(
                //     alert('work')
                console.log(questions);
                
                // )
            })
            // alert('worked');
        }
        // error: alert('not working');

    });

    $.getJSON("db.json", function(data){
        
        $.each(data.questions, function(key,value){

        })
    })

      }
});


1
2
3
4
5
// Check #x
// $( "#x" ).prop( "checked", true );
 
// // Uncheck #x
// $( "#x" ).prop( "checked", false );