function Loan(total,rateYear,durationYears)
{
	if(total==undefined||total==0)
	{
		rateYear=0;
		durationYears=0;
	}
	this.total=function(){return(total)};
	this.rateYear=function(){return(rateYear)};
	this.durationYears=function(){return(durationYears)};
}

Loan.prototype.rateMonth=function(){return(this.rateYear()/12)};

Loan.prototype.durationMonthes=function(){return(this.durationYears()*12)};

Loan.prototype.paymentMonth=function()
{
	return((this.total()*this.rateMonth()*Math.pow(1+this.rateMonth(),this.durationMonthes())/(Math.pow(1+this.rateMonth(),this.durationMonthes())-1)));
};

Loan.prototype.principalMonth=function(m)
{
	if(m>=this.durationYears()*12)return(0);
	return((this.rateMonth()*this.total()*Math.pow(1+this.rateYear()/12,m)/(Math.pow(1+this.rateMonth(),this.durationMonthes())-1)))
};

Loan.prototype.principalYear=function(y)
{
	var r=0;
	for(var i=0;i<12;i++)
	{
		r+=this.principalMonth(y*12+i);
	}
	return(r);
};

Loan.prototype.interestYear=function(y)
{
	var r=0;
	for(var i=0;i<12;i++)
	{
		r+=this.interestMonth(y*12+i);
	}
	return(r);
};

Loan.prototype.paymentYear=function()
{
	return(this.paymentMonth()*12);
};

Loan.prototype.paymentAll=function()
{
	if(this.total()==0)return(this.total());
	return(this.paymentMonth()*12*this.durationYears());
};

Loan.prototype.interestAll=function()
{
	var o=this;
	var a=[];
	for(var i=0;i<this.durationYears()*12;i++)a.push(o.interestMonth(i));
	
	return(Math.round(a.reduce(function(x,y){return(x+y)},0)));
}

Loan.prototype.interestMonth=function(m)
{
	if(m>=this.durationYears()*12)return(0);
	return(this.paymentMonth()-this.principalMonth(m));
};

Loan.prototype.toString=function()
{
	var out="";
	out+="Total="+this.total()+",";
	out+="Duration="+this.durationYears()+"years,";
	out+="rateYear="+this.rateYear()+",";
	out+="PaymantTotal="+Math.round(this.paymentAll())+",";
	out+="InterestTotal="+Math.round(this.interestAll())+"";
	return(out);
}

if(typeof module!='undefined'&&module.parent!=null){
	module.exports=Loan;
}

