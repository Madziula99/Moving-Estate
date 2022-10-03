import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropertyList from "../components/PropertyList/PropertyList";

class Index extends React.Component {
  render() {
    const property = {
      title: "Dream Apartment for Young Family",
      location: ["Pasadena", "California"],
      image: "https://i.picsum.photos/id/323/300/300.jpg?hmac=x5Uyo5A2WJUbsbAXSto7yT2T3WBX2rfCrDk_7dY8kzU",
      description: "Lorem ipsum...",
      type: "apartment",
      mode: "sale",
      price: 100500,
      area: 1320,
      bedrooms: 2,
      bathrooms: 2
    }

    return <>
      <PropertyList
          defaultView="grid"
          properties={[
            {...property, id: 'A001'}, {...property, id: 'A002'}, {...property, id: 'A003'},
            {...property, id: 'A004'}, {...property, id: 'A005'}, {...property, id: 'A006'},
            {...property, id: 'A007'}, {...property, id: 'A008'}, {...property, id: 'A009'},
            {...property, id: 'A010'}, {...property, id: 'A011'}, {...property, id: 'A012'},
            {...property, id: 'A013'}, {...property, id: 'A014'}, {...property, id: 'A015'},
            {...property, id: 'A016'}, {...property, id: 'A017'}, {...property, id: 'A018'},
            {...property, id: 'A019'}, {...property, id: 'A020'}, {...property, id: 'A021'}
        ]}
        
        //TODO: ul->and NavLink
        />
    </>
  }
}

export default withRouter(Index);
