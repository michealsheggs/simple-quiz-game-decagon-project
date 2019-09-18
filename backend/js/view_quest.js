   
                // $.getJSON('http://localhost:3000/questions').done(function(data) { 
                //     $.each(data.items, function(i, item){
                //         let tile = item.added_question;
                //         let one = item.question_one;
                //         let two = item.question_two;
                //         let three = item.question_three;
                //         $('#dipp').html('<p> Name: ' + tile + '</p>'); 
                //         $('#dipp').append('<td>Age : ' + one + '</td>'); 
                //         $('#dipp').append('<p> Role: ' + two+ '</p>'); 
                //         $('#dipp').append('<p> Company: ' + three + '</p>'); 
                //         console.log(questions.added_question);
                //     }
                    
                
                // })
 $.ajax({
        method: "GET",
        url: 'http://localhost:3000/questions',


    });

// $("#viw_quiz").click(function(event){
    // event.stopPropagation;
    $.getJSON('http://localhost:3000/questions', function(data){
        $.each(data, function(key, value){
            const populate = 
            `
            // <h4> ${value.added_question}</h4><br/> 
            <p class="question">question two</p>
            <div class="question-section">
            <h4> ${value.added_question}</h4><br/> 

    
                <div class="option">
                    <div class='form-check'>
                    <input class='form-check-input' type="radio" name="option" id="optiontype" value="A">${value.option_one}

                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="option" id="optiontype" value="B">${value.option_two}
                    
                      </div>
                     
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="option" id="optiontype" value="C">${value.option_three}
                          
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="option" id="optiontype" value="D">${value.option_four}
                          
                        </div>
                        
                </div>
              </div>
          </div>
            `
            ;
            $(".getthis").append(populate);
        });
       
    }
    )
// })
                
            // console.log(questions.added_question);;