{
    function DescribeCity(city:string,country:string = "pakistan") : void{
        console.log(`${city} is in ${country}`);
    }

    DescribeCity("Rawalpindi");
    DescribeCity("Islamabad");
    DescribeCity("Paris","France");
}