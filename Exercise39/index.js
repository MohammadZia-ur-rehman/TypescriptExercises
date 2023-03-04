"use strict";
{
    function DescribeCity(city, country = "pakistan") {
        return `${city}, ${country}`;
    }
    console.log(DescribeCity("Rawalpindi"));
    console.log(DescribeCity("Islamabad"));
    console.log(DescribeCity("Paris", "France"));
}
