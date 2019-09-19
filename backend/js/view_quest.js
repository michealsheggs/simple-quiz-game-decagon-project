    $.getJSON('http://localhost:3000/questions', function(data){
        $.each(data, function(key, value){
            const populate = 
            `
            <p class="question">question ${value.id}</p>
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
            $("#Thequestionsection").append(populate);
        });
       
    }
    );
