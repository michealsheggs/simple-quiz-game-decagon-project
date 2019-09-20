    $.getJSON('http://localhost:3000/questions', function(data){
        $.each(data, function(key, value){
            const populate = 
            `
            <p class="question text-primary">question ${value.id}</p>
            <h4> ${value.added_question}</h4><br/> 

    
                <div class="option">
                    <div class='form-check'>
                    <input class='form-check-input' type="radio" name="optiontype${value.id}" id="optiontype" value="A">${value.option_one}

                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="optiontype${value.id}" id="optiontype" value="B">${value.option_two}
                    
                      </div>
                     
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="optiontype${value.id}" id="optiontype" value="C">${value.option_three}
                          
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="optiontype${value.id}" id="optiontype" value="D">${value.option_four}
                          
                        </div>
                        
                </div>
              </div>
          </div>
            `
            ;
            $("#Thequestionsection").append(populate);
        });
       
    }
    );
    


    
    $.getJSON('http://localhost:3000/questions', function(quizQuestions){
      $.each(quizQuestions, function(key, value){
          const populateData = 
          `
          <table class="table table-condensed table stripe table-bordered">
          <thead>
          
          <th>no</th><th>question</th>
          
          </thead>
          <tbody>
          <tr> 
             <td class="text-primary">${value.id}</td> 

              <td class="">${value.added_question}</td><td class="btn btn-primary">edit</td><td class="btn btn-danger">delete</td>         
      

          </tr>                       
          </tbody>
      </table>
          `
          ;
          $(".questionContent").append(populateData);
      });
  
  });