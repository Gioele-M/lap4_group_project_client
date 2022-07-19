import React from 'react'



function BgSetter() {  
// get the rgb from the colourpicker (api)
    // const fakecolour = 'rgb(13, 113, 147)' //DARK
    // const fakecolour = 'rgb(213, 193, 187)' //LIGHT
    const fakecolour = 'rgb(110, 120, 150)' //play with it

    document.body.style.backgroundColor=fakecolour  
    

    // check the RGB,dothe maths
    let rgbChecker = fakecolour.slice(4,-1)
    rgbChecker = rgbChecker.split(",")
    let totalRgb =0
    for (let rgbIndex = 0; rgbIndex < rgbChecker.length; rgbIndex++) { //ADD THE RGB VALUES TOGETHER
        totalRgb += parseInt (rgbChecker[rgbIndex]);        
    }

    //CHECK IF TEXT COLOUR NEEDS TO CHANGE
    if (totalRgb <360) { //WAS 360
        document.body.style.color="white" //MIGHT NEED TO TARGET VARIOUS ELEMTENTS
        //^could this change a var in css?

    }
}

export default BgSetter