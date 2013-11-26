##Description 

A level payment loan calculator module to calc payment of month/year/total from principal/interest rate/duration.

##Installation

This module supports both browser/node.js.
Please referer the example below.

##Usage

```html
	<script src='loan.js'></script>
	<script>
		var loan=new Loan(1200000,0.020,5),   //principal,rate,duration of year
		console.log(loan.total());            //total principal
		console.log(loan.rateYear());         //interest rate of year
		console.log(loan.durationYears());    //total duration in year
		console.log(loan.durationMonthes());  //total duration in month
		console.log(loan.rateMonth());        //interest rate of month
		console.log(loan.paymentMonth());     //payment per month
		console.log(loan.paymentYear());      //payment per year
		console.log(loan.paymentAll());       //total payment
		console.log(loan.principalMonth(2));  //principal to pay at month 2
		console.log(loan.principalYear(3));   //principal to pay at year 3
		console.log(loan.interestMonth(2));   //interest to pay at month 2
		console.log(loan.interestYear(3));    //interest to pay at year 3
		console.log(loan.interestAll());      //total interest to pay
	</script>
```

```node.js
	var Loan=require('./loan.js');
	var loan=new Loan({
		console.log(loan.paymentAll());       //total payment
		console.log(loan.interestAll());      //total interest to pay
	.
	.
```

##Example page

[loan calculator(Japanese)](http://kanasys.com/tech/100)

