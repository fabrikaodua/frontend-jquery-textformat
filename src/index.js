'use strict';

console.log($);

$(document).ready(function(){
    var $messageField=$('.message-field');
    var $messageFormatted=$('.message-formatted');
    
        $messageField.keyup(function(){
           var str=$messageField.val().toLocaleLowerCase(); 
           var newStr=str.replace(/\s{2,}/g, " ").replace (/[\n\r]/g, ' ');  
            
           $messageFormatted.text(newStr);
         });
                              
 });

