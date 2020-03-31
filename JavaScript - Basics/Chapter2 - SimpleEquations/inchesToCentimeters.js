function inchesToCentimeters([args1])
{
    let inches = parseFloat(args1);
    let centimeters = inches * 2.54;

    console.log('Centimeters = ' + centimeters);
}

inchesToCentimeters([3]);