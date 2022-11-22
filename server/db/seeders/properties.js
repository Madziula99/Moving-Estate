'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

  await queryInterface.bulkInsert('Properties', [
    {
      id: "A001",
      title: "Dream Apartment for Young Family",
      location: "Pasadena, California",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est tellus, vitae facilisis est bibendum ut. Nunc condimentum ante eu convallis posuere. Ut non gravida mauris. Vestibulum tincidunt lobortis nulla sed rutrum. Integer eget eros aliquam, suscipit sem id, venenatis mi. Maecenas vel malesuada tellus. Pellentesque et nulla a magna consequat elementum. Suspendisse sodales, est et efficitur cursus, dolor ipsum faucibus mauris, sit amet convallis velit elit ut elit. Vestibulum ullamcorper sed eros in dapibus. Pellentesque ipsum libero, tempus nec elit ac, congue auctor velit. Maecenas sem sapien, tempor sodales ultricies non, euismod non libero. Pellentesque euismod felis risus, tincidunt euismod tortor sagittis ut. Etiam ut nibh eu nunc varius venenatis. Nullam iaculis varius ante, a rutrum libero convallis sit amet.",
      type: "apartment",
      mode: "sale",
      price: 100500,
      area: 1320,
      bedrooms: 2,
      bathrooms: 2,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "A002",
      title: "Dream Apartment",
      location: "Los Angeles, California",
      description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tortor ex, sodales rutrum pellentesque lacinia, consectetur id mauris. Duis maximus sem vitae lacus tincidunt condimentum. Duis elementum eleifend congue. Nam vitae pellentesque sem, pellentesque mattis ante. Integer ac est et.",
      type: "apartment",
      mode: "sale",
      price: 320000,
      area: 2010,
      bedrooms: 3,
      bathrooms: 3,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T001",
      title: "Dream House",
      location: "Springfield, Illinois",
      description: "Praesent ut massa lacinia neque porta dignissim ut in nisi. Nunc efficitur urna pharetra blandit ultrices. Nam bibendum, diam quis vehicula interdum, odio elit lobortis lacus, nec congue tellus est elementum tellus. Fusce et dapibus eros. Vestibulum nisl tortor, vulputate a luctus vitae, tincidunt eu leo. Duis aliquam justo dui, tempor convallis lectus maximus in. Vivamus vel nisl sit amet est eleifend sodales sed eu erat. Mauris aliquam felis vitae elit ultrices, in bibendum risus sollicitudin. Aenean non libero vitae tellus aliquet sodales. Integer nec nibh sed justo porttitor vestibulum. Vestibulum posuere faucibus dignissim. Curabitur nec justo in felis auctor lobortis eget pharetra magna. Maecenas augue velit, laoreet eu dignissim ac, aliquet varius arcu. Proin libero lectus, laoreet ut erat in, malesuada vulputate tellus. Phasellus et massa fermentum, viverra risus nec, pulvinar tellus.",
      type: "townhouse",
      mode: "sale",
      price: 200000,
      area: 2400,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "A003",
      title: "Apartment With Great View",
      location: "New York, New York",
      description: "Nunc in magna auctor, fermentum urna et, placerat risus. Nullam non urna quis tortor laoreet laoreet vitae eget mauris. Fusce ex nisi, suscipit vitae fermentum at, convallis ut magna. In sit amet velit sit amet quam malesuada laoreet congue ut enim. Maecenas ac odio eu velit facilisis pharetra ac id mauris. Fusce rhoncus mattis enim. Curabitur nulla odio, vehicula ut felis rutrum, pretium sollicitudin felis. Nam auctor ac dui at efficitur. Pellentesque mattis massa vel pretium gravida. Mauris varius ornare interdum. Donec vitae dapibus eros. Suspendisse eget turpis eget nisi tincidunt imperdiet et a velit. Nullam purus est, facilisis vitae mattis vel, vestibulum id neque.",
      type: "apartment",
      mode: "rent",
      price: 4200,
      area: 820,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 3,
      createdAt,
      updatedAt
    },
    {
      id: "A004",
      title: "Apartment in the City Center",
      location: "Sacramento, California",
      description: "Pellentesque dapibus elit vitae turpis rutrum gravida. Nam laoreet neque ac nisl tempus, in mollis quam tincidunt. Vestibulum placerat, leo quis condimentum finibus, justo nisi rhoncus quam, ut gravida libero turpis vitae nisi. Duis ullamcorper pharetra metus at posuere. In sit amet elit eget elit viverra tempor. Aenean lobortis eget magna id pharetra. Vestibulum viverra, dolor non ultrices mollis, lacus purus ultrices mi, vel volutpat dui nulla scelerisque urna. Maecenas eget lectus sit amet lorem sollicitudin tempus sit amet non tellus. Pellentesque vel mi maximus, imperdiet elit eget, viverra mi. Ut sit amet lorem gravida, interdum diam at, rutrum risus. Nunc a sodales dui, eu fermentum tellus.",
      type: "apartment",
      mode: "rent",
      price: 1500,
      area: 650,
      bedrooms: 1,
      bathrooms: 1,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "A005",
      title: "Apartment in Quiet Neighbourhood",
      location: "Springfield, Illinois",
      description: "Mauris a mollis nisi. Etiam at risus sit amet magna semper laoreet ac et felis. Nunc laoreet enim a tortor dictum consectetur vel vel risus. Nam lectus magna, scelerisque sit amet pulvinar a, hendrerit eu diam. Sed semper lectus ante, in sagittis risus commodo eget. Donec dui sapien, tempor et sapien at, efficitur ornare lacus. In id mi nibh. Sed fermentum risus metus, et feugiat elit fermentum vel. Nunc erat nisi, rutrum in metus sit amet, sagittis volutpat felis. Nam dapibus tempus est eu pellentesque.",
      type: "apartment",
      mode: "sale",
      price: 240000,
      area: 1240,
      bedrooms: 3,
      bathrooms: 1,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "T002",
      title: "House for a Big Family",
      location: "Oakland, California",
      description: "Mauris a mollis nisi. Etiam at risus sit amet magna semper laoreet ac et felis. Nunc laoreet enim a tortor dictum consectetur vel vel risus. Nam lectus magna, scelerisque sit amet pulvinar a, hendrerit eu diam. Sed semper lectus ante, in sagittis risus commodo eget. Donec dui sapien, tempor et sapien at, efficitur ornare lacus. In id mi nibh. Sed fermentum risus metus, et feugiat elit fermentum vel. Nunc erat nisi, rutrum in metus sit amet, sagittis volutpat felis. Nam dapibus tempus est eu pellentesque.",
      type: "townhouse",
      mode: "rent",
      price: 4200,
      area: 2400,
      bedrooms: 4,
      bathrooms: 2,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T003",
      title: "Spacious Townhouse in Great Neighbourhood",
      location: "Oak Park, Illinois",
      description: "Duis placerat vestibulum interdum. Duis dictum blandit elit vitae fringilla. Aenean condimentum ac diam sed tristique. Sed ullamcorper ornare cursus. Nam condimentum orci et metus rutrum mollis. Etiam ut ante ipsum. Donec tincidunt, dui eu bibendum malesuada, neque magna tristique leo, eu interdum ante lacus ac nibh. Nulla ultrices sodales laoreet.",
      type: "townhouse",
      mode: "rent",
      price: 1500,
      area: 1800,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "A006",
      title: "Studio Apartment",
      location: "Chicago, Illinois",
      description: "Integer erat eros, dignissim nec est eu, cursus ultricies quam. Nunc pretium orci a tortor mollis, consequat congue erat elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque dolor turpis, eleifend convallis lacinia ac, vehicula quis ante. Ut semper eleifend iaculis. Sed ultrices urna ac nisl iaculis, nec viverra elit rutrum. Ut in nibh sed erat ornare faucibus. Aenean lectus eros, tincidunt id ligula vitae, aliquet tincidunt felis. Quisque lorem orci, auctor ac lacus vel, cursus porta felis. Donec vestibulum malesuada consectetur. Phasellus a viverra enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas et faucibus magna. Vestibulum sodales tortor sem, a condimentum ipsum vestibulum eget.",
      type: "apartment",
      mode: "rent",
      price: 700,
      area: 500,
      bedrooms: 1,
      bathrooms: 1,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "T004",
      title: "House in the Suburbs",
      location: "Florida City, Florida",
      description: "Sed rutrum quam non dui lobortis, sed pellentesque tellus porta. Aenean posuere tellus et metus sagittis, et pharetra justo mattis. Suspendisse lacinia neque vitae vestibulum gravida. Morbi porttitor libero sed ex efficitur viverra. Etiam at rhoncus lacus. Integer convallis tempor nulla sed auctor. Curabitur eleifend condimentum velit sit amet vulputate. Cras scelerisque diam nec turpis dapibus, sed imperdiet tortor ultricies. Phasellus hendrerit massa gravida elementum vestibulum. Suspendisse semper fringilla tempus. Etiam in varius purus, a facilisis est.",
      type: "townhouse",
      mode: "sale",
      price: 275000,
      area: 1250,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 4,
      createdAt,
      updatedAt
    },
    {
      id: "T005",
      title: "House Near a Lake",
      location: "Chattanooga, Tennessee",
      description: "Fusce at tristique mauris. Vivamus vitae pellentesque nunc. Cras blandit justo mauris, sit amet accumsan elit condimentum at. Ut in ultricies orci. Cras iaculis nunc in nisl porta gravida. Pellentesque mauris justo, gravida ut posuere ut, posuere eu neque. Sed mauris est, cursus eget magna et, egestas maximus urna.",
      type: "townhouse",
      mode: "sale",
      price: 275000,
      area: 1050,
      bedrooms: 2,
      bathrooms: 2,
      agentId: 5,
      createdAt,
      updatedAt
    },
    {
      id: "A007",
      title: "Small Apartment in the City Center",
      location: "Nashville, Tennessee",
      description: "Mauris a mollis nisi. Etiam at risus sit amet magna semper laoreet ac et felis. Nunc laoreet enim a tortor dictum consectetur vel vel risus. Nam lectus magna, scelerisque sit amet pulvinar a, hendrerit eu diam. Sed semper lectus ante, in sagittis risus commodo eget. Donec dui sapien, tempor et sapien at, efficitur ornare lacus. In id mi nibh. Sed fermentum risus metus, et feugiat elit fermentum vel. Nunc erat nisi, rutrum in metus sit amet, sagittis volutpat felis. Nam dapibus tempus est eu pellentesque.",
      type: "apartment",
      mode: "sale",
      price: 200000,
      area: 800,
      bedrooms: 1,
      bathrooms: 1,
      agentId: 5,
      createdAt,
      updatedAt
    },
    {
      id: "A008",
      title: "Apartment for Young Couple",
      location: "Nashville, Tennessee",
      description: "Vestibulum et diam venenatis, egestas tellus in, posuere velit. Fusce varius neque ante, nec tincidunt erat gravida ut. Suspendisse pharetra quam neque, in pharetra ante pulvinar nec. Integer sodales, turpis eu porta sagittis, ante ligula pulvinar nisl, quis imperdiet mauris sem ut nisi. Donec turpis mauris, pulvinar eu justo a, semper varius augue. Suspendisse sit amet elementum massa, vel commodo sapien. Phasellus fringilla nunc tortor, a tempus sapien pretium id. Etiam tincidunt ex eget augue dapibus, nec tincidunt urna euismod. Quisque quis laoreet augue, et eleifend purus.",
      type: "apartment",
      mode: "rent",
      price: 1800,
      area: 950,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 5,
      createdAt,
      updatedAt
    },
    {
      id: "A009",
      title: "Apartment for a Family",
      location: "Pasadena, California",
      description: "Vivamus gravida luctus urna, et efficitur ex finibus id. Suspendisse sagittis maximus augue, ac vestibulum sapien tempor et. Sed vel accumsan sapien. Aliquam tincidunt, felis ac convallis aliquet, sapien odio scelerisque purus, et finibus tellus enim sed leo. Quisque gravida aliquet nunc, id pellentesque eros auctor sit amet. Quisque vehicula pretium elementum. Nunc in justo eget mauris vehicula hendrerit a eu est. Aenean sit amet tristique felis. Sed consectetur, diam vel venenatis pellentesque, odio tortor cursus arcu, sed tristique ex purus nec quam. Morbi eu gravida est, vitae sollicitudin dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mauris ligula, luctus in molestie in, mollis eget eros.",
      type: "apartment",
      mode: "sale",
      price: 300000,
      area: 1350,
      bedrooms: 3,
      bathrooms: 3,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T006",
      title: "Beach House",
      location: "Palm Springs, California",
      description: "Curabitur in dolor gravida, elementum diam non, tincidunt lectus. Vivamus ut nulla turpis. Donec non placerat ligula. Cras gravida sagittis auctor. Maecenas a commodo augue. Duis at tortor tempor, hendrerit urna ac, cursus arcu. Nullam sit amet lectus cursus velit gravida ultricies. Sed ut odio diam. Fusce leo felis, maximus sit amet ante a, euismod interdum augue. Sed iaculis rhoncus nisl ut consequat. Etiam vestibulum malesuada nulla, at blandit leo interdum convallis. Nam viverra lorem ut ullamcorper consectetur. Suspendisse aliquam orci sit amet imperdiet convallis.",
      type: "townhouse",
      mode: "sale",
      price: 500000,
      area: 1450,
      bedrooms: 4,
      bathrooms: 2,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T007",
      title: "Townhouse with a Garden",
      location: "Montpelier, Vermont",
      description: "Aliquam erat volutpat. Donec gravida nibh a porttitor pharetra. Integer vitae elementum nibh. Etiam vitae turpis magna. Etiam iaculis, tellus eget volutpat malesuada, ante tortor pulvinar arcu, id eleifend massa magna nec felis. Maecenas convallis, orci at maximus viverra, risus eros tempus eros, sit amet accumsan enim lectus id urna. Integer et tempor odio, et rutrum dui. Ut efficitur venenatis mi, id sagittis augue. Aliquam venenatis suscipit facilisis. Suspendisse potenti. Donec commodo sagittis tempor.",
      type: "townhouse",
      mode: "rent",
      price: 2000,
      area: 1050,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 6,
      createdAt,
      updatedAt
    },
    {
      id: "A010",
      title: "Pet Friendly Apartment",
      location: "New York, New York",
      description: "Proin a sem metus. Donec bibendum felis ac felis feugiat, eu aliquam ex vestibulum. Suspendisse eu erat nunc. Morbi varius metus in justo consectetur vestibulum. Donec placerat dolor non aliquam semper. Sed fringilla tempus sagittis. Vivamus vitae neque erat. Mauris hendrerit lorem mauris, vehicula auctor sapien pellentesque id. Pellentesque congue, augue in ornare pellentesque, magna nibh rutrum ipsum, sit amet ornare ante ipsum vitae mi. Quisque euismod convallis arcu ut cursus. Nunc aliquet tempor est vel condimentum.",
      type: "apartment",
      mode: "rent",
      price: 1500,
      area: 750,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 3,
      createdAt,
      updatedAt
    },
    {
      id: "A011",
      title: "Apartment on Ground Floor",
      location: "Chicago, Illinois",
      description: "Maecenas felis nulla, tempus sit amet pharetra pellentesque, maximus eget dui. Sed at laoreet magna, eu lacinia ipsum. Quisque ut faucibus turpis, eu venenatis mauris. Etiam at dictum erat. Ut sit amet neque sed quam ornare suscipit non eu sapien. Aliquam vulputate ultricies lacus eu hendrerit. Curabitur posuere eros in risus lacinia vulputate. In hac habitasse platea dictumst. Nam purus dolor, aliquet quis tristique id, mattis sit amet nulla.",
      type: "apartment",
      mode: "sale",
      price: 225000,
      area: 600,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "T008",
      title: "House on a Hill",
      location: "Nashville, Tennessee",
      description: "Mauris eget finibus enim. Aenean sollicitudin in risus ut ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vitae elit purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec rhoncus tortor velit, eget pharetra erat dignissim vitae. Quisque purus magna, ultrices sodales vehicula a, aliquet non nulla. Pellentesque libero nisl, feugiat ut lectus at, pretium malesuada libero. Sed leo quam, feugiat id fringilla eu, sodales sodales risus. Praesent auctor in velit id pulvinar.",
      type: "townhouse",
      mode: "sale",
      price: 275000,
      area: 1350,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 5,
      createdAt,
      updatedAt
    },
    {
      id: "A012",
      title: "Apartment in New Building in Town",
      location: "Pasadena, California",
      description: "Maecenas felis nulla, tempus sit amet pharetra pellentesque, maximus eget dui. Sed at laoreet magna, eu lacinia ipsum. Quisque ut faucibus turpis, eu venenatis mauris. Etiam at dictum erat. Ut sit amet neque sed quam ornare suscipit non eu sapien. Aliquam vulputate ultricies lacus eu hendrerit. Curabitur posuere eros in risus lacinia vulputate. In hac habitasse platea dictumst. Nam purus dolor, aliquet quis tristique id, mattis sit amet nulla.",
      type: "apartment",
      mode: "rent",
      price: 2200,
      area: 1200,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "A013",
      title: "Apartment on Main Street",
      location: "Pasadena, California",
      description: "Aliquam erat volutpat. Donec gravida nibh a porttitor pharetra. Integer vitae elementum nibh. Etiam vitae turpis magna. Etiam iaculis, tellus eget volutpat malesuada, ante tortor pulvinar arcu, id eleifend massa magna nec felis. Maecenas convallis, orci at maximus viverra, risus eros tempus eros, sit amet accumsan enim lectus id urna. Integer et tempor odio, et rutrum dui. Ut efficitur venenatis mi, id sagittis augue. Aliquam venenatis suscipit facilisis. Suspendisse potenti. Donec commodo sagittis tempor.",
      type: "apartment",
      mode: "rent",
      price: 2000,
      area: 600,
      bedrooms: 1,
      bathrooms: 1,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T009",
      title: "Townhouse by the Park",
      location: "Chattanooga, Tennessee",
      description: "Praesent varius scelerisque dui. Nullam tincidunt congue velit quis euismod. Aliquam posuere, erat non gravida feugiat, ante nisl dignissim ligula, non rhoncus eros enim eget mi. Fusce in gravida magna, vel dignissim nisi. Aliquam tempor erat vitae sem varius, ut aliquet nulla laoreet. Curabitur ac sapien porttitor, vulputate odio id, euismod sem. Mauris est justo, auctor ut neque vitae, condimentum cursus erat. Fusce et dui ante. Duis molestie urna ut purus euismod ultrices non sit amet ligula. Aenean porttitor nunc urna. Praesent non orci nec elit placerat porttitor at sit amet dolor.",
      type: "townhouse",
      mode: "rent",
      price: 1800,
      area: 800,
      bedrooms: 2,
      bathrooms: 2,
      agentId: 5,
      createdAt,
      updatedAt
    },
    {
      id: "T010",
      title: "Dream House for Young Family",
      location: "Springfield, Illinois",
      description: "Etiam ultricies sapien purus, vitae fermentum velit lobortis a. Etiam vel elit nisl. Maecenas quis magna malesuada, aliquet turpis eget, fermentum quam. Proin convallis, dolor a volutpat tincidunt, nisi eros finibus magna, eget ullamcorper felis lectus at nibh. Duis pretium, dui eu pretium vestibulum, urna nisi dictum purus, non hendrerit felis dui facilisis magna. In volutpat augue eget ante dignissim feugiat. Morbi finibus, quam vel accumsan vestibulum, erat nibh commodo quam, et dapibus velit turpis a est. Maecenas luctus ultrices nisi, non eleifend felis finibus in. Pellentesque mauris tortor, egestas vel auctor vel, consequat semper eros. Praesent in ligula finibus, ultricies ex ac, fringilla mauris. In id nisl sed dui venenatis volutpat nec eget lorem. Vestibulum sit amet neque pretium, facilisis sem id, viverra nisi. Nunc eu eros quis neque viverra viverra vel et elit. Aliquam cursus dolor arcu, vitae ultrices lorem eleifend et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      type: "townhouse",
      mode: "sale",
      price: 225000,
      area: 1000,
      bedrooms: 2,
      bathrooms: 2,
      agentId: 2,
      createdAt,
      updatedAt
    },
    {
      id: "T011",
      title: "House with Pool",
      location: "Pasadena, California",
      description: "Vivamus gravida luctus urna, et efficitur ex finibus id. Suspendisse sagittis maximus augue, ac vestibulum sapien tempor et. Sed vel accumsan sapien. Aliquam tincidunt, felis ac convallis aliquet, sapien odio scelerisque purus, et finibus tellus enim sed leo. Quisque gravida aliquet nunc, id pellentesque eros auctor sit amet. Quisque vehicula pretium elementum. Nunc in justo eget mauris vehicula hendrerit a eu est. Aenean sit amet tristique felis. Sed consectetur, diam vel venenatis pellentesque, odio tortor cursus arcu, sed tristique ex purus nec quam. Morbi eu gravida est, vitae sollicitudin dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mauris ligula, luctus in molestie in, mollis eget eros.",
      type: "townhouse",
      mode: "sale",
      price: 450000,
      area: 2000,
      bedrooms: 3,
      bathrooms: 3,
      agentId: 1,
      createdAt,
      updatedAt
    },
    {
      id: "T012",
      title: "House with no Stairs",
      location: "Buffalo, New York",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mattis velit. Fusce dignissim, arcu vitae pretium feugiat, risus sem accumsan massa, consequat pulvinar mauris ligula ac dolor. Vivamus eleifend nisl at lacus sodales tempor. Aliquam condimentum ac mi eu hendrerit. Nulla facilisis, erat at venenatis sagittis, nunc ligula sagittis lectus, a sodales sapien eros eu nisl. Ut at lacus nec urna convallis viverra at at lectus. Vivamus aliquet commodo accumsan. Fusce vitae justo a mi volutpat feugiat aliquet non ante. Aliquam viverra purus cursus, interdum nulla blandit, suscipit risus. Nullam vel luctus lorem. Vestibulum at ex velit. Praesent eros erat, maximus nec pulvinar nec, interdum ac eros. Duis commodo velit tortor, sed feugiat mi commodo non. Morbi id facilisis arcu. Curabitur eget leo a eros maximus blandit.",
      type: "townhouse",
      mode: "rent",
      price: 1800,
      area: 700,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 3,
      createdAt,
      updatedAt
    },
    {
      id: "T013",
      title: "House with Private Beach",
      location: "Miami, Florida",
      description: "Morbi et porta arcu. Sed in lacinia purus, vel sollicitudin ex. Quisque sit amet ligula eros. Duis eu felis tellus. Nullam eros dui, tristique ut ornare at, porttitor quis nisl. Vivamus id ipsum ac turpis posuere mollis sed sit amet tellus. Etiam finibus augue ut mauris dapibus, id eleifend nibh facilisis. Curabitur gravida rutrum massa, sed convallis purus ullamcorper ac. Morbi odio enim, consectetur non eros quis, rhoncus pretium orci. Duis dignissim eu neque vel varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum condimentum dui sapien, id finibus sem aliquet vel. Aenean sed posuere purus.",
      type: "townhouse",
      mode: "sale",
      price: 300000,
      area: 800,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 4,
      createdAt,
      updatedAt
    },
    {
      id: "T014",
      title: "Two Storey Modern House",
      location: "Phoenix, Arizona",
      description: "Sed vel rhoncus turpis, vel venenatis ex. Suspendisse semper enim feugiat est laoreet tempus. Cras condimentum vel ligula eget congue. Nulla ac dictum nisi. Sed sollicitudin massa ante, a eleifend leo tincidunt tristique. Vestibulum quis maximus metus, id mattis tortor. Vestibulum vestibulum gravida pharetra. Proin laoreet feugiat dui, id fringilla nulla mollis iaculis. Nulla euismod justo sit amet massa scelerisque vulputate. Duis pretium, velit auctor tempor elementum, sapien neque volutpat eros, quis semper enim nisi id mauris. Quisque metus neque, imperdiet eu consectetur scelerisque, venenatis vel nisl. Duis pulvinar ante id hendrerit hendrerit. Fusce scelerisque tristique massa, sit amet mattis elit facilisis sit amet. Pellentesque eget eros ut elit pharetra vehicula. Sed viverra nulla nec lacus commodo, id ornare sem porttitor. In viverra dictum accumsan.",
      type: "townhouse",
      mode: "sale",
      price: 1000000,
      area: 2500,
      bedrooms: 5,
      bathrooms: 3,
      agentId: 7,
      createdAt,
      updatedAt
    },
    {
      id: "A014",
      title: "A Loft Apartment",
      location: "Phoenix, Arizona",
      description: "Nullam nec ligula sollicitudin, condimentum arcu non, interdum ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer fringilla, nisi non aliquet iaculis, mauris turpis aliquet arcu, vel rutrum tortor nisl ut felis. Aenean lobortis elit nisi, in eleifend nisl commodo eget. Donec non metus nec ante posuere ultricies et in sem. Suspendisse in mattis nisi, ac molestie lorem. Integer facilisis leo at mattis tempus. Morbi eu lacinia nunc, eget sollicitudin ipsum. Integer mattis velit at sollicitudin viverra. Integer consequat ex consectetur neque porta facilisis. Aenean porttitor tincidunt dolor. Vivamus dapibus orci nisi. Aliquam eu tincidunt nibh. Aenean mollis orci ac augue vulputate, vitae tincidunt orci fermentum. Nam vel tortor odio.",
      type: "apartment",
      mode: "rent",
      price: 1000,
      area: 500,
      bedrooms: 1,
      bathrooms: 1,
      agentId: 7,
      createdAt,
      updatedAt
    },
    {
      id: "T015",
      title: "Victorian House",
      location: "New York, New York",
      description: "Aliquam erat volutpat. Donec gravida nibh a porttitor pharetra. Integer vitae elementum nibh. Etiam vitae turpis magna. Etiam iaculis, tellus eget volutpat malesuada, ante tortor pulvinar arcu, id eleifend massa magna nec felis. Maecenas convallis, orci at maximus viverra, risus eros tempus eros, sit amet accumsan enim lectus id urna. Integer et tempor odio, et rutrum dui. Ut efficitur venenatis mi, id sagittis augue. Aliquam venenatis suscipit facilisis. Suspendisse potenti. Donec commodo sagittis tempor.",
      type: "townhouse",
      mode: "rent",
      price: 3800,
      area: 1800,
      bedrooms: 3,
      bathrooms: 3,
      agentId: 3,
      createdAt,
      updatedAt
    },
    {
      id: "A015",
      title: "Apartment with Access to Backyard",
      location: "Albany, New York",
      description: "Vestibulum et diam venenatis, egestas tellus in, posuere velit. Fusce varius neque ante, nec tincidunt erat gravida ut. Suspendisse pharetra quam neque, in pharetra ante pulvinar nec. Integer sodales, turpis eu porta sagittis, ante ligula pulvinar nisl, quis imperdiet mauris sem ut nisi. Donec turpis mauris, pulvinar eu justo a, semper varius augue. Suspendisse sit amet elementum massa, vel commodo sapien. Phasellus fringilla nunc tortor, a tempus sapien pretium id. Etiam tincidunt ex eget augue dapibus, nec tincidunt urna euismod. Quisque quis laoreet augue, et eleifend purus.",
      type: "apartment",
      mode: "rent",
      price: 1800,
      area: 900,
      bedrooms: 2,
      bathrooms: 1,
      agentId: 3,
      createdAt,
      updatedAt
    },
    {
      id: "A016",
      title: "Apartment in the Suburbs",
      location: "New York, New York",
      description: "Vivamus gravida luctus urna, et efficitur ex finibus id. Suspendisse sagittis maximus augue, ac vestibulum sapien tempor et. Sed vel accumsan sapien. Aliquam tincidunt, felis ac convallis aliquet, sapien odio scelerisque purus, et finibus tellus enim sed leo. Quisque gravida aliquet nunc, id pellentesque eros auctor sit amet. Quisque vehicula pretium elementum. Nunc in justo eget mauris vehicula hendrerit a eu est. Aenean sit amet tristique felis. Sed consectetur, diam vel venenatis pellentesque, odio tortor cursus arcu, sed tristique ex purus nec quam. Morbi eu gravida est, vitae sollicitudin dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mauris ligula, luctus in molestie in, mollis eget eros.",
      type: "apartment",
      mode: "sale",
      price: 200000,
      area: 1200,
      bedrooms: 3,
      bathrooms: 2,
      agentId: 3,
      createdAt,
      updatedAt
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null);
  }
};
