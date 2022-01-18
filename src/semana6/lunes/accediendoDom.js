console.log(document.getElementById("h2"));

function modifiedNode(element, object){
    element.style.color=object.color;
    element.style.fontSize = object.fontSize;
    element.style.backgroundColor = object.backgroundColor;
    element.style.fontFamily = object.fontFamily;
}

const parrafos = document.querySelectorAll('p');

parrafos.forEach(element=>{
    console.log(element)
    modifiedNode(element,{
        color:'Blue',
        fontSize: '60px',
        backgroundColor: 'red',
        fontFamily: 'arial'
    })
})

// modifiedNode('h1',{
//     color:'Blue',
//     fontSize: '60px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });
// modifiedNode('h2',{
//     color:'white',
//     fontSize: '50px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });
// modifiedNode('h3',{
//     color:'white',
//     fontSize: '40px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });
// modifiedNode('h4',{
//     color:'white',
//     fontSize: '30px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });
// modifiedNode('h5',{
//     color:'white',
//     fontSize: '20px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });
// modifiedNode('h6',{
//     color:'white',
//     fontSize: '10px',
//     backgroundColor: 'red',
//     fontFamily: 'arial'
// });

