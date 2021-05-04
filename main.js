$(document).ready(function(){
    
           
    let result = [];
    let result1 = parseFloat(0);
    let result2 = parseFloat(0);
    let total = parseFloat(0);
    let fourFlag = "";
    let flagLR = 1;
    
    // 数字を押した時の左辺と右辺の挙動
    
    $(".btn").click(function() {
        // 数字1回目
        if (flagLR == 1) {
        result += $(this).val();
        result1 = parseFloat(result);
        $("#result").val(result1);
        console.log(result1);
        
        } else {
            
        // 数字2回目
        console.log("equalflag2 started");
        result += $(this).val();
        $("#result").val(result);
        result2 = parseFloat(result);
        console.log(result2);
        // $(".operator").prop("disabled", false);
        }
    });    
    
    $(".zero-btn").click(function() {
        if (result != 0) {
            result += $(this).val();
            $("#result").val(result);
        } 
    
    });    
    
    $(".decimal-point").click(function() {
        
        if (result == 0) {
            result = 0;
            
        }
        
        result += $(this).val();
        $("#result").val(result);
        
        // if (flagLR == 1) {
        // result += $(this).val();
        // result1 = parseFloat(result);
        // $("#result").val(result);
        // console.log(result1);
        
        // } else {
            
        // // 数字2回目
        // console.log("equalflag2 started");
        // result += $(this).val();
        // $("#result").val(result);
        // result2 = parseFloat(result);
        // console.log(result2);
        // $(".operator").prop("disabled", false);
        
    });    
    
    
    
    
    // 四則演算のボタンを押した時の挙動
    
    $(".operator").click(function() {
        
        
        result = $(this).val();
        $("#result").val(result);
        switch ($(this).val()) {
            case "+":
                fourFlag = "plus";
                
                break;
                
            case "-":
                fourFlag = "minus";
                break;
                
            case "×":
                fourFlag = "times";
                break;
                
            case "÷":
                fourFlag = "divided by";
                break;
            
            default:
                console.log("四則ボタンのスイッチができてない")
        }
        
        console.log("式の処理")
        if (flagLR == 1) { //初めての四則演算
        console.log(result);
        console.log("result1 is " + result1);
        flagLR = 2;  //演算が2回目以降になることをカウント
        console.log("flagLR is " + flagLR);
        result = "";
        console.log("last result is " + result);
        $(".operator").prop("disabled", true);
        
        } else {
            
            console.log("四則演算2回目")
            // result = $(this).val();
            result = "";
            result1 = total;
            result2 = "";
            total ="";
            $(".operator").prop("disabled", true);
            console.log("result1 is " + result1);
            console.log("result2 is " + result2);
            console.log("total is " + total);
            console.log("flagLR is " + flagLR);
            
        }
    });  
    
    
    
    $("#reset").click(function() {
        result = 0;
        $("#result").val(result);
        console.log(result);
        result ="";
        result1 = parseFloat(0);
        result2 = parseFloat(0);
        total = parseFloat(0);
        flagLR = 1;
        $(".operator").prop("disabled", false);
    });    
    
    
    $("#equal").click(function() {
        
        switch (fourFlag) {
            case 'plus':
                total = result1 + result2;
                // $("#result").val(total);
                console.log(total);
                break;
                
            case 'minus':
                total = result1 - result2;
                // $("#result").val(total);
                console.log(total);
                break;
                
            case 'times':
                total = result1 * result2;
                // $("#result").val(total);
                console.log(total);
                break;
                
            case 'divided by':
                total = result1 / result2;
                // $("#result").val(total);
                console.log(total);
                break;
            
            default:
                console.log("演算スイッチがないよ")
                break;
        }
        
        if (String(total).length > 10) {
            total = Math.round(total * 10);
            total = total / 10;
            console.log("totalが長いよ")
        } 
        
        $("#result").val(total);
        
        
        result = "";
        $(".operator").prop("disabled", false);
        
    });    
    
    
    
   
    
    
    
});