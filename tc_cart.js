"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Gabriel Torres 
   Date:   2/27/19
   
   Filename: tc_cart.js	
*/
// the initial value for the total amount will start with 0
var orderTotal = 0;

//this will make a table and display the contents and description of the products
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

//creat a loop for 
for (var i = 0; i <= 3; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr> <td colSpan='4'>Subtotal</td> <td>$" + orderTotal + "<td> </tr> </table>";

document.getElementById("cart").innerHTML = cartHTML;