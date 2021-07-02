const myObject = 
    [
        {
          name: "John",
          points: 100,
        },
        {
          name: "Bob",
          points: 130,
        },
        {
          name: "Mary",
          points: 120,
        },
        {
          name: "Kate",
          points: 120,
        },
    ];

    let ordenar=(obj)=>{
        let i=1;
        let objOrdenado= obj.sort((obj1,obj2)=>(obj1.points<obj2.points)? 1: -1);
        obj.forEach(element => {
           element['position']=i;
           i++;
        });
        console.log(objOrdenado);
    };

    ordenar(myObject);
