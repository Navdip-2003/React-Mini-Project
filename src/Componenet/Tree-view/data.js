export const sidemenus = [
    {
        label : "Home",
        to : "/",
        children : [
            {
                label : "Products",
                to : "/products",
            },
            {
                label : "Details",
                to : "/details",
                children : [
                    {
                        label : "P1",
                        to : "/p1",
                    },
                    {
                        label : "P2",
                        to : "/p2",
                    }
                ]
            } 
        ]
    },
    {
        label : "Location",
        to : "/location",
    },
    {
        label : "Testimonial",
        to : "/testimonial",
        children : [
            {
                label : "Person",
                to : "/person",
            },
            {
                label : "PersonDetails",
                to : "/per-details",
            }
        ]
    }

]