$('#createbtn').on('click',function(e){
    const added_question = $('#createquestion').val();
    const option_one = $('#option_one').val();
    const option_two = $('#option_two').val();
    const option_three = $('#option_three').val();    
    const option_four = $('#option_four').val(); 

    e.preventDefault();
  
//check if the radio box
    let answer = "";
    let answerChecked = document.getElementsByName('options'); 
    for(i = 0; i < answerChecked.length; i++) { 
      if(answerChecked[i].checked){ 
      answer = answerChecked[i].value;
      // console.log(answer);  
      }
    }
    if (!added_question && !option_one && !option_two && !option_three && !option_four) {
        $('#display_alert').html('please fill all the empty fields');
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
                answer,
            },
            success: function() {
              $('#display_alert').html('created question successfully');
            },
          })
        }
  })