const lego = [

    {
        name: "Brick1",
        size: "1x2",
        Color: "Blue",
        set_appeared_in: ['102' ,'104' , '105' ,'109']
    },

    {
        name: "Brick2",
        size: "2x2",
        Color: "Red",
        set_appeared_in: ['102' ,'103' , '101' ,'99']
    },

    {
        name: "Brick3",
        size: "4x2",
        Color: "Yellow",
        set_appeared_in: ['167' ,'67' , '175' ,'75']
    },

    {
        name: "Brick4",
        size: "4x4",
        Color: "Green",
        set_appeared_in: ['90 ','34' , '134' ,'275']
    },

]

lego.forEach((lego) => console.log(lego.name))



legoset_appeared_in.forEach((set) => console.log(set))




