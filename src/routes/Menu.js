import { useState } from "react";
import MenuIcon from "../assets/restaurant.png";
import TabNav from "../components/TabNav";
import MenuItem from "../components/MenuItem";
import MenuDB from "../assets/menu.json";

import "./styles.css";

const tabs = {
  "Vietnamese Sandwiches": <MenuItem data={MenuDB.menu[0]}/>,
  "Appertizers": <MenuItem data={MenuDB.menu[1]}/>,
  "Rice Vermicelli": <MenuItem data={MenuDB.menu[2]}/>,
  "Noodle Soups": <MenuItem data={MenuDB.menu[3]}/>,
  "Rice Dishes": <MenuItem data={MenuDB.menu[4]}/>,
  "Stir-fried Noodle Dishes": <MenuItem data={MenuDB.menu[5]}/>,
  "House Specialties": <MenuItem data={MenuDB.menu[6]}/>,
  "Smoothies": <MenuItem data={MenuDB.menu[7]}/>,
  "Beverages": <MenuItem data={MenuDB.menu[8]}/>
};

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState("Vietnamese Sandwiches");
  return (
    <div className="menu" id="menu">
      <div className="menu-heading">
        <img src={MenuIcon} alt="Flaticon from Freepik" className="menu-icon" />
        <h2>Our Menu</h2>
      </div>
      <TabNav setSelectedTab={setSelectedTab} />
      {tabs[selectedTab]}
    </div>
  );
}
