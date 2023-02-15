import "./styles.css";

export default function NavBar ({setSelectedTab}) {
    return(
      <div className="tabnav">
        <div onClick={() => setSelectedTab('Vietnamese Sandwiches')}>Vietnamese Sandwiches</div>
        <div onClick={() => setSelectedTab('Appertizers')}>Appertizers</div>
        <div onClick={() => setSelectedTab('Rice Vermicelli')}>Rice Vermicelli</div>
        <div onClick={() => setSelectedTab('Noodle Soups')}>Noodle Soups</div>
        <div onClick={() => setSelectedTab('Rice Dishes')}>Rice Dishes</div>
        <div onClick={() => setSelectedTab('Stir-fried Noodle Dishes')}>Stir-fried Noodle Dishes</div>
        <div onClick={() => setSelectedTab('House Specialties')}>House Specialties</div>
        <div onClick={() => setSelectedTab('Smoothies')}>Smoothies</div>
        <div onClick={() => setSelectedTab('Beverages')}>Beverages</div>
      </div>
    )
  }

 