import React from 'react'

import {useSelector} from 'react-redux'






function BgSetter() {  
    // rgb(250, 217, 161)
    // rgb(243, 120, 120)
    let bgColour= 'rgb(250, 217, 161)'
    // let bgColour= 'rgb(243, 120, 120)'
    // let bgColour= 'rgb(123, 223, 223)'
    // let bgColour= 'rgb'+ useSelector((state) => state.media.data[0].playlistTheme)
    // let bgColour1 = bgColour.split(',')
    // let bgColour2 = bgColour1.replace("(","")


    console.log("''''''''''''''''''''''''''''''''''''''''''''''''")
    // const bgColour= useSelector((state) => state.media.data[0].playlistTheme)
    // const bgColour = 'rgb(125, 231, 5)'

    
    // console.log(bgColour)


// get the rgb from the colourpicker (api)
    const fakecolour = 'rgb(123, 113, 147)' //DARK
    // const fakecolour = 'rgb(213, 193, 187)' //LIGHT
    // const fakecolour = 'rgb(250, 250, 250)' //White
    // const fakecolour = 'rgb(0, 0, 0)' //Black
    // const fakecolour = 'rgb(150, 50, 150)' //play with it

    // document.body.style.backgroundColor=fakecolour  
    document.body.style.backgroundColor=bgColour
    

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
