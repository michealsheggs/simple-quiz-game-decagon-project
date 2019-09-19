$("#submitAnswerButon").on('click', function(e){
    //answers declaration
    e.stopPropagation;
let ansA = $('#optiontype').val();
let ansB = $('#optiontype').val();
let ansC = $('#optiontype').val();
let ansD = $('#optiontype').val();
let corectScores =0;
let answerChecked = document.getElementsByName('optiontype'); 
    $.getJSON(`http://localhost:3000/questions`, function(data){
        $.each(data, function(key, value){
            let answerChosen= $(`input[name=optiontype${value.id}]:checked`).val();
            let correctAnswer = value.answer;
            // console.log(cd);
            if(answerChosen == correctAnswer){
                corectScores++
                alert(corectScores);
            }
        }) ;
        });
});   