


  $(document).ready(function() {
    $("form#formOne").submit(function (event) {
      
      const input1 = $("#input1").val();
      const input2 = $("#input2").val();
      const input3 = $("#input3").val();
      let formArray = [];
      formArray.push(input1, input2, input3);
      
      // console.log(formArray);
      
    
      const newArray = [];
      newArray.push([formArray[2], formArray[1]]);
      console.log(newArray);
      
   
   
      event.preventDefault();
    });
  });
  

