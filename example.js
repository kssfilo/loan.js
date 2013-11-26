#!/usr/bin/env node

var Loan=require('./loan.js');

var samples=[
	new Loan(1200000,0.020,5),
	new Loan(24000000,0.020,35),
	new Loan(38000000,0.025,35)
]; 

for(var i=0;i<samples.length;i++){
	console.log(samples[i].total());            //total principal
	console.log(samples[i].rateYear());         //interest rate of year
	console.log(samples[i].durationYears());    //total duration in year
	console.log(samples[i].durationMonthes());  //total duration in month
	console.log(samples[i].rateMonth());        //interest rate of month
	console.log(samples[i].paymentMonth());     //payment per month
	console.log(samples[i].paymentYear());      //payment per year
	console.log(samples[i].paymentAll());       //total payment
	console.log(samples[i].principalMonth(2));  //principal to pay at month 2
	console.log(samples[i].principalYear(3));   //principal to pay at year 3
	console.log(samples[i].interestMonth(2));   //interest to pay at month 2
	console.log(samples[i].interestYear(3));    //interest to pay at year 3
	console.log(samples[i].interestAll());      //total interest to pay

	console.log(samples[i].toString());         //summary
	console.log("\n");
}

