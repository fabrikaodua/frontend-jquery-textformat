'use strict';

console.log($);

$(document).ready(function(){
    var $messageField=$('.message-field');
    var $messageFormatted=$('.message-formatted');
    
    $messageField.keyup(function(){
    var str=$messageField.val().toLocaleLowerCase();
    $messageFormatted.empty();  
        
        
    $messageFormatted.text(str);
    });
                              
 });