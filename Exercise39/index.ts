{
    function DescribeCity(city:string,country:string = "pakistan") : string{
        return `${city}, ${country}`;
    }

    console.log(DescribeCity("Rawalpindi"));
    console.log(DescribeCity("Islamabad"));
    console.log(DescribeCity("Paris","France"));
}