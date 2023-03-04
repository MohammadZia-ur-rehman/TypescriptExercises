"use strict";
{
    function DescribeCity(city, country = "pakistan") {
        console.log(`${city} is in ${country}`);
    }
    DescribeCity("Rawalpindi");
    DescribeCity("Islamabad");
    DescribeCity("Paris", "France");
}
