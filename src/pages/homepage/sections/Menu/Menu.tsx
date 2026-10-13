import { useState } from "react";
import Button from "./components/Button";
import MenuCategory from "./components/MenuCategory";

// jidelni listek
const tomsPizza = {
  "id": "toms-pizza",
  "title": "Tom's Pizza",
  "items": [
    { "id": "pizza-roma", "name": "Roma", "price": 159, "ingredients": "tomat, sýr, šunka, salám, kukuřice, cibule", "weight": 540, "diameter": 31 },
    { "id": "pizza-americana", "name": "Americana", "price": 159, "ingredients": "tomat, sýr, šunka, kukuřice", "weight": 550, "diameter": 31 },
    { "id": "pizza-salami", "name": "Salami", "price": 159, "ingredients": "tomat, sýr, salám", "weight": 480, "diameter": 31 },
    { "id": "pizza-francesko", "name": "Francesko", "price": 159, "ingredients": "tomat, sýr, šunka, klobása, uzený sýr, žampiony", "weight": 530, "diameter": 31 },
    { "id": "pizza-prosciutto", "name": "Prosciutto", "price": 159, "ingredients": "tomat, mozzarela, prosciutto", "weight": 430, "diameter": 31 },
    { "id": "pizza-marco", "name": "Marco", "price": 159, "ingredients": "tomat, sýr, slanina, salám, uzený sýr", "weight": 520, "diameter": 31 },
    { "id": "pizza-picante", "name": "Picante", "price": 159, "ingredients": "tomat, sýr, slanina, klobása, cibule, beraní rohy, drcené chilli papričky", "weight": 500, "diameter": 31 },
    { "id": "pizza-quattro-formaggi", "name": "Quattro Formaggi", "price": 159, "ingredients": "tomat, eidam, hermelín, niva, parmazán", "weight": 480, "diameter": 31 },
    { "id": "pizza-hawaii", "name": "Hawaii", "price": 159, "ingredients": "tomat, sýr, šunka, ananas", "weight": 480, "diameter": 31 },
    { "id": "pizza-caorle", "name": "Caorle", "price": 159, "ingredients": "tomat, sýr, slanina, salám, šunka", "weight": 490, "diameter": 31 },
    { "id": "pizza-bianca", "name": "Bianca", "price": 159, "ingredients": "smetanový základ, mozzarella, parmezán, červená cibule", "weight": 460, "diameter": 31 }
  ]
}

const tomsTriangles = {
  "id": "toms-triangles",
  "title": "Tom's Triangles",
  "items": [
    // {
    //   "id": "triangle-barbecue",
    //   "name": "Barbecue",
    //   "price": null,
    //   "ingredients": "BBQ omáčka, klobása, sýr cheddar",
    //   "weight": 185
    // },
    // {
    //   "id": "triangle-pulled-pork",
    //   "name": "Pulled Pork",
    //   "price": 98,
    //   "ingredients": "Trhané vepřové, sýr cheddar, jalapeño, dresing",
    //   "weight": 185
    // },
    // {
    //   "id": "triangle-cheese",
    //   "name": "Cheese",
    //   "price": 96,
    //   "ingredients": "Sýr cheddar, tavený sýr, šunka",
    //   "weight": 185
    // },
    {
      "id": "triangle-bacon",
      "name": "Bacon",
      "price": null,
      "ingredients": "Slanina, mozzarella, žampiony",
      "weight": 185
    },
    {
      "id": "triangle-chicken",
      "name": "Chicken",
      "price": 96,
      "ingredients": "Kuřecí prsa, BBQ omáčka, sýr cheddar",
      "weight": 185
    },
    {
      "id": "triangle-spinach",
      "name": "Spinach",
      "price": null,
      "ingredients": "Špenát, sušená rajčata, mozzarella, balkánský sýr",
      "weight": 185
    }
  ]
}

const zUdirny = {
  "id": "z-udirny",
  "title": "Z udírny",
  "items": [
    { "id": "udirna-klobasa", "name": "Klobása", "price": 80 },
    { "id": "udirna-nakladany-hermelin", "name": "Klobása pálivá", "price": 90 },
    { "id": "udirna-hermelin", "name": "Hermelín", "price": 129 },
  ]
}

const zmrzlina = {
  "id": "zmrzlina",
  "title": "Zmrzlina",
  "items": [
    { "id": "zmrzlina-detska", "name": "Dětská", "price": 25 },
    { "id": "zmrzlina-mala", "name": "Malá", "price": 35 },
    { "id": "zmrzlina-velka", "name": "Velká", "price": 60 },
    { "id": "zmrzlina-pohar-bez-slehacky", "name": "Zmrzlinový pohár bez šlehačky", "price": 65 },
    { "id": "zmrzlina-pohar-se-slehackou", "name": "Zmrzlinový pohár se šlehačkou", "price": 69 }
  ]
}

const necoNaChut = {
  "id": "neco-na-chut",
  "title": "Něco na chuť",
  "items": [
    { "id": "snack-chipsy", "name": "Chipsy", "price": 35, "weight": 150 },
    { "id": "snack-tycinky-havlik", "name": "Tyčinky Havlík", "price": 30, "weight": 90 },
    { "id": "snack-tycinky-hradecka-bohemia", "name": "Tyčinky Hradecká Bohemia", "price": 30, "weight": 100 },
    { "id": "snack-krupky-arasidove", "name": "Křupky arašídové", "price": 30, "weight": 100 },
    { "id": "snack-arasidy-prazene", "name": "Arašídy pražené", "price": 30, "weight": 80 }
  ]
}

const vikendovaNabidka = {
  "id": "vikendova-nabidka",
  "title": "Víkendová nabídka",
  "description": "Poctivé grilované maso pro každý víkend",
  "items": [
    { "id": "vikend-tomahawk", "name": "Vepřový Tomahawk Steak", "price": 199 },
    { "id": "vikend-krkovice", "name": "Vepřový Steak z krkovice", "price": 199 },
    { "id": "vikend-kureci", "name": "Kuřecí Steak s kůží", "price": 199 }
  ]
}

// napojovy listek

const pivoCepovane = {
  id: "pivo-cepovane",
  title: "Pivo čepované",
  items: [
    {
      id: "chodovar-11",
      name: "Chodovar 11°",
      price: 40,
      volume: 0.5,
      secondaryPrice: 25,
      secondaryVolume: 0.3
    },
    {
      id: "prazdroj-12",
      name: "Prazdroj 12°",
      price: 49,
      volume: 0.5,
      secondaryPrice: 30,
      secondaryVolume: 0.3
    }
  ]
};

const pivoPlech = {
  id: "pivo-plech",
  title: "Pivo plech",
  items: [
    {
      id: "pilsner-urquell-12",
      name: "Pilsner Urquell 12°",
      price: 45,
      volume: 0.5
    },
    {
      id: "gambrinus-10",
      name: "Gambrinus 10°",
      price: 35,
      volume: 0.5
    }
  ]
};



const pivoNealkoholicke = {
  id: "pivo-nealkoholicke",
  title: "Pivo nealkoholické",
  items: [
    {
      id: "birell-svetly",
      name: "Birell světlý",
      price: 39,
      volume: 0.5
    },
    {
      id: "birell-polotmavy",
      name: "Birell polotmavý",
      price: 39,
      volume: 0.5
    },
    {
      id: "birell-polotmavy-citron",
      name: "Birell polotmavý citron",
      price: 39,
      volume: 0.5
    },
    {
      id: "birell-pomelo-grep",
      name: "Birell pomelo, grep",
      price: 39,
      volume: 0.5
    }
  ]
};

const tepleNapoje = {
  id: "teple-napoje",
  title: "Teplé nápoje",
  items: [
    {
      id: "kava-turecka",
      name: "Turecká",
      price: 35,
    },
    {
      id: "espresso",
      name: "Espresso",
      price: 35,
    },
    {
      id: "espresso-lungo",
      name: "Espresso Lungo",
      price: 45,
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      price: 49,
    },
    {
      id: "latte-macchiato",
      name: "Latté Macchiato",
      price: 49,
    },
    {
      id: "caj-cerny",
      name: "Čaj černý",
      price: 29,
      volume: 0.2,
    },
    {
      id: "caj-ovocny",
      name: "Čaj ovocný",
      price: 29,
      volume: 0.2,
    }
  ]
};

const vinoBile = {
  id: "vino-bile",
  title: "Víno bílé",
  items: [
    {
      id: "sauvignon",
      name: "Sauvignon",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryVolume: "láhev"
    },
    {
      id: "chardonnay",
      name: "Chardonnay",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryVolume: "láhev"
    },
    {
      id: "miller-thurgau",
      name: "Miller Thurgau",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryVolume: "láhev"
    },
    {
      id: "palava",
      name: "Pálava",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryVolume: "láhev"
    },
    {
      id: "tramin-cerveny",
      name: "Tramín červený",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryVolume: "láhev"
    }
  ]
};

const vinoCervene = {
  id: "vino-cervene",
  title: "Víno červené",
  items: [
    {
      id: "rulandske-modre",
      name: "Rulandské modré",
      price: 50,
      volume: 0.2,
      secondaryPrice: 170,
      secondaryLabel: "láhev"
    }
  ]
};

const vinoSumive = {
  id: "vino-sumive",
  title: "Víno šumivé",
  items: [
    {
      id: "prosecco",
      name: "Prosecco",
      price: 60,
      volume: 0.2,
      secondaryPrice: 180,
      secondaryLabel: "láhev"
    }
  ]
};


const cider = {
  id: "cider",
  title: "Cider",
  items: [
    {
      id: "frisco",
      name: "Frisco - alkoholický cider",
      price: 40,
      volume: 0.33
    }
  ]
};
const michaneNapoje = {
  id: "michane-napoje",
  title: "Míchané nápoje",
  items: [
    {
      id: "aperol-spritz",
      name: "Aperol spritz",
      price: 95,
      volume: 0.2
    }
  ]
};

const nealko = {
  id: "nealko",
  title: "Nealko",
  items: [
    {
      id: "voda-perliva",
      name: "Voda perlivá",
      price: 20,
      volume: 0.5
    },
    {
      id: "voda-neperliva",
      name: "Voda neperlivá",
      price: 20,
      volume: 0.5
    },
    {
      id: "coca-cola",
      name: "Coca Cola",
      price: 40,
      volume: 0.5,
      secondaryPrice: 30,
      secondaryVolume: 0.3
    },
    {
      id: "fanta",
      name: "Fanta",
      price: 40,
      volume: 0.5,
      secondaryPrice: 30,
      secondaryVolume: 0.3
    },
    {
      id: "sprite",
      name: "Sprite",
      price: 40,
      volume: 0.5,
      secondaryPrice: 30,
      secondaryVolume: 0.3
    },
    {
      id: "kofola",
      name: "Kofola točená",
      price: 40,
      volume: 0.5,
      secondaryPrice: 30,
      secondaryVolume: 0.3
    },
    {
      id: "tonic-plech",
      name: "Tonic plech",
      price: 25,
      volume: 0.33
    },
    {
      id: "dzus-pomeranc",
      name: "Džus pomeranč",
      price: 35,
      volume: 0.3
    },
    {
      id: "dzus-jablko",
      name: "Džus jablko",
      price: 35,
      volume: 0.3
    },
    {
      id: "capri-sonne",
      name: "Capri - Sonne",
      price: 25,
      volume: 0.2
    }
  ]
};

const destilaty = {
  id: "destilaty",
  title: "Destiláty",
  items: [
    {
      id: "jagermeister",
      name: "Jägermeister",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "tullamore-dew",
      name: "Tullamore Dew",
      price: 60,
      volume: 0.04,
      secondaryPrice: 30,
      secondaryVolume: 0.02
    },
    {
      id: "hruska-rudolf-jelinek",
      name: "Hruška Rudolf Jelínek",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "mandlovice",
      name: "Mandlovice",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "finlandia-vodka",
      name: "Finlandia vodka",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "rum-tuzemsky",
      name: "Rum tuzemský",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "rum-captain-morgan",
      name: "Rum Captain Morgan",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "becherovka",
      name: "Becherovka",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "dabelsky-krvesaj",
      name: "Ďábelský krvesaj",
      price: 50,
      volume: 0.04,
      secondaryPrice: 25,
      secondaryVolume: 0.02
    },
    {
      id: "svestka",
      name: "Švestka",
      price: 40,
      volume: 0.04,
      secondaryPrice: 20,
      secondaryVolume: 0.02
    },
    {
      id: "jablko",
      name: "Jablko",
      price: 40,
      volume: 0.04,
      secondaryPrice: 20,
      secondaryVolume: 0.02
    },
    {
      id: "zelena",
      name: "Zelená",
      price: 40,
      volume: 0.04,
      secondaryPrice: 20,
      secondaryVolume: 0.02
    }
  ]
};
const foodData = [tomsPizza, tomsTriangles, zUdirny, necoNaChut, vikendovaNabidka, zmrzlina]

const drinksData = [
  pivoCepovane,
  pivoPlech,
  pivoNealkoholicke,
  cider,
  nealko,
  tepleNapoje,
  vinoBile,
  vinoCervene,
  vinoSumive,
  michaneNapoje,
  destilaty,
];


function Menu() {

  const [menu, setMenu] = useState('Jídelní Lístek');

  function handleMenuButton(menu: string) {
    setMenu(menu)
  }

  const menuType = ['Jídelní Lístek', 'Nápojový Lístek']

  const menuData =
    menu === 'Jídelní Lístek' ? foodData :
      menu === 'Nápojový Lístek' ? drinksData : []


  return (
    <section id="menu" className="bg-[#F5F0E6] text-[#2B241F] pt-10 pb-20 lg:pb-30 ">

      <header className="flex flex-col items-center font-[Bree_serif] gap-8 pt-8">
        <h2 className="text-4xl">NAŠE MENU</h2>
        <div className="flex flex-col gap-2 xxs:flex-row">
          {menuType.map((type) => {
            return <Button key={type} handleMenuButton={handleMenuButton} value={type} menu={menu}>{type}</Button>
          })}
        </div>
      </header>


      <div className="text-[#2B241F] px-5 xs:px-10 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 ">

          {menuData.map((category) => {
            return (
              <div key={category.id} className={`${category.items.length >= 6 ? 'md:col-span-2' : ''}`}>
                <MenuCategory data={category} />
              </div>
            )
          })}
        </div>

      </div>



    </section>
  )
}

export default Menu;