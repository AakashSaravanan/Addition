<script>
    /*Selecting input box 1
      Selecting input box2*/
    var box1=document.getElementById("num1")
    var box2=document.getElementById("num2")
    //Select result
    var result=document.getElementById("result")
    
    function resultfun()
    {
        var box1value=Number(box1.value)
        var box2value=Number(box2.value)
        var total=box1value+box2value
        result.textContent=total
    }
</script>
