

export const filters  = [
    {
        id : 'Color',
        name : 'Color',
        options : [
            {value  : 'white' , label : 'White'},
            {value  : 'beige' , label : 'beige'},
            {value  : 'blue' , label : 'blue'},
            {value  : 'brown' , label : 'brown'},
            {value  : 'green' , label : 'green'},
            {value  : 'purple' , label : 'purple'},
            {value  : 'yellow' , label : 'yellow'},
        ],
    },

    {
        id : 'size',
        name : 'size',
        options : [
            {value  : 'S' , label : 'S'},
            {value  : 'M' , label : 'M'},
            {value  : 'L' , label : 'L'},
        ],
    },
]


export const singleFilter =[
    {
        id : 'price',
        name : 'price',
        options : [
            {value  : '159-399' , label : '₹159-₹399'},
            {value  : '399-999' , label : '₹159-₹399'},
            {value  : '999-1999' , label : '₹159-₹399'},
            {value  : '1999-2999' , label : '₹159-₹399'},
            {value  : '3999-4999' , label : '₹159-₹399'},
        ],
    },

    {
        id : 'discount',
        name : 'discount range',
        options : [
            {
                value : '10',
                label : '10% And Above',
            },
            {value  : '20' , label : '20% And Above'},
            {value  : '30' , label : '30% And Above'},
            {value  : '40' , label : '40% And Above'},
            {value  : '50' , label : '50% And Above'},
            {value  : '60' , label : '60% And Above'},
            {value  : '70' , label : '70% And Above'},
            {value  : '80' , label : '80% And Above'},
        ],
    },

    {
        id : 'stock',
        name  : 'Availability',
        options : [
            {value : 'in_stock' , label : 'In Stock'},
            {value : 'out_of_stock' , label : 'Out Of Stock'}
        ],
    },
]