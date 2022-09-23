import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer.jsx";
import ContactInfoItem from "../components/ContactInfoItem/ContactInfoItem.jsx";
import PropertyInfo from "../components/PropertyInfo/PropertyInfo.jsx";
import Button from "../components/Button/Button.jsx";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';
import Pagination from "../components/Pagination/Pagination.jsx";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
        <h2>&lt;Button&gt;</h2>
        <div style={{margin: "1rem"}}>
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => console.log(`Page change: Previous page`)}
          >
            &lt;
          </Button>
          <br />
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => console.log(`Page change: Next page`)}
          >
            &gt;
          </Button>
          <br />
          <Button
            type="page"
            roundedLeft
            isFocused
            onClick={() => console.log(`Page change: Page 1`)}
          >
            1
          </Button>
          <br />
          <Button
            type="page"
            onClick={() => console.log(`Page change: Page 2`)}
          >
            2
          </Button>
          <br />
          <Button
            type="page"
            roundedRight
            onClick={() => console.log(`Page change: Page 3`)}
          >
            3
          </Button>
          <br />
          <Button
            type="view_mode"
            roundedLeft
            isFocused
            onClick={() => console.log(`Toggle view: Grid Mode`)}
          >
            <GridModeIcon />
          </Button>
          <br />
          <Button
            type="view_mode"
            roundedRight
            onClick={() => console.log(`Toggle view: List Mode`)}
          >
            <ListModeIcon />
          </Button>
        </div>

        <Header>PROPERTIES</Header>

        {/* prettier-ignore */}

        <Subtitle>Subtitle Component</Subtitle>

        <Description>Description demo component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus expedita iusto molestias provident repudiandae tempore? Commodi corporis delectus dicta dolorem eius enim iure maiores molestias, rem sed voluptates!</Description>

        <h2>&lt;ContactInfoItem&gt;</h2>
        <ContactInfoItem type="phone" isFooter={false}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={false}>info@example.com</ContactInfoItem>
        <ContactInfoItem type="address" isFooter={true}>24th Street, New York, USA</ContactInfoItem>
        <ContactInfoItem type="phone" isFooter={true}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={true}>info@example.com</ContactInfoItem>

        <h2>&lt;Footer&gt;</h2>
        <Footer />

        <h2>&lt;Property Info&gt;</h2>
        <PropertyInfo
          type="townhouse"
          area={1932}
          beds={4}
          baths={3}
          isCentered={false}
          id="A003N"
          />


        <h2>&lt;Pagination&gt;</h2>
        <Pagination pages={7} page={1} onChange={page => console.log(`Page changed to ${page}`)} />
        <Pagination pages={7} page={3} onChange={page => console.log(`Page changed to ${page}`)} />
        <Pagination pages={7} page={7} onChange={page => console.log(`Page changed to ${page}`)} />
      </>
    )
  }
}

export default ComponentGallery;
