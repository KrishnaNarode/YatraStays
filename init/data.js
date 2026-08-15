const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },

  // ------- Indian Listings -------
  {
    title: "Backwater Houseboat Stay",
    description:
      "Drift along the serene backwaters of Kerala aboard a traditional houseboat with home-cooked meals included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Heritage Haveli in the Pink City",
    description:
      "Stay in a restored royal haveli with intricate frescoes, courtyards, and rooftop views of Jaipur's forts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Himalayan Cottage with Valley Views",
    description:
      "Wake up to snow-capped peaks and pine forests in this cozy wooden cottage in the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626621331169-5f312a91d5c9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Manali",
    country: "India",
  },
  {
    title: "Goan Beachside Villa",
    description:
      "A whitewashed villa steps from the sand, with a private pool and easy access to Goa's famous beach shacks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Calangute",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow",
    description:
      "Relax on a colonial-era bungalow porch surrounded by rolling tea gardens and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Lakeside Cottage in Udaipur",
    description:
      "Enjoy sweeping views of Lake Pichola and the City Palace from this charming lakeside cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Riverside Cabin in Rishikesh",
    description:
      "Fall asleep to the sound of the Ganges flowing by this peaceful riverside cabin, perfect for yoga retreats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591017683996-9fb5b4d63e9c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "A charming hill-station bungalow with a fireplace, garden, and views over the Nilgiri mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Desert Camp Under the Stars",
    description:
      "Sleep in a luxury tent amid the golden dunes of the Thar Desert with camel safaris and folk music by the fire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Modern Apartment in South Mumbai",
    description:
      "Sleek city apartment close to Marine Drive, perfect for exploring Mumbai's cafes, markets, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Boutique Stay in Old Pune",
    description:
      "A cozy boutique home in Pune's leafy lanes, close to cafes, colleges, and the city's cultural landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Pune",
    country: "India",
  },
  {
    title: "Garden Cottage in Coorg",
    description:
      "Nestled among coffee plantations, this cottage offers misty mornings and the scent of fresh coffee blossoms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600004770325-9c1a1e0a4e5b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Beach Shack in Gokarna",
    description:
      "A laid-back, rustic beach shack near Om Beach — simple, peaceful, and perfect for sunset watching.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "Palace View Room in Mysore",
    description:
      "Stay minutes from the illuminated Mysore Palace in this elegant heritage-style guesthouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600100397608-f199c9c33a29?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Mysore",
    country: "India",
  },
  {
    title: "Houseboat in Srinagar",
    description:
      "Float on Dal Lake in a traditional Kashmiri houseboat, complete with carved wood interiors and shikara rides.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Riverside Retreat in Rishikesh Hills",
    description:
      "A quiet hillside retreat above the Ganges, ideal for meditation, rafting trips, and mountain walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591017683996-9fb5b4d63e9c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Heritage Home in Kochi Fort Area",
    description:
      "A restored Dutch-era home in Fort Kochi, walking distance from Chinese fishing nets and art galleries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Kochi",
    country: "India",
  },
  {
    title: "Mountain Homestay in Darjeeling",
    description:
      "Sip fresh Darjeeling tea while watching the sunrise over Kanchenjunga from this family-run homestay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Luxury Resort near Ranthambore",
    description:
      "Spot tigers on a jungle safari, then unwind at this luxury resort bordering Ranthambore National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Cliffside Cottage in Lonavala",
    description:
      "A weekend escape from Mumbai and Pune with misty valley views, waterfalls nearby, and cool hill air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Lonavala",
    country: "India",
  },
  {
    title: "Beach Villa in Pondicherry",
    description:
      "French colonial charm meets the Bay of Bengal in this pastel-hued villa in Pondicherry's White Town.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Riverside Farmstay in Wayanad",
    description:
      "Wake up to birdsong and spice plantation views at this working farmstay in the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600004770325-9c1a1e0a4e5b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Old City Haveli in Varanasi",
    description:
      "Stay steps from the ghats in a centuries-old haveli overlooking the Ganges in India's spiritual capital.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561361058-c24cecda9c19?auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Snow Cabin in Auli",
    description:
      "A snug wooden cabin surrounded by snowy slopes, perfect for a skiing weekend in the Garhwal Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626621331169-5f312a91d5c9?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Auli",
    country: "India",
  },
  {
    title: "City Apartment in Bengaluru",
    description:
      "A bright, modern apartment in Indiranagar, close to craft breweries, cafes, and tech-hub energy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Hilltop Bungalow in Shimla",
    description:
      "Colonial-style bungalow with pine-forest views and easy walks to Shimla's historic Mall Road.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Backwater Villa in Kumarakom",
    description:
      "A tranquil villa on Vembanad Lake, with private jetty access and views of paddy fields at sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    },
    price: 5800,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Heritage Fort Stay in Jodhpur",
    description:
      "Sleep within centuries-old sandstone walls with sweeping views of the Blue City below Mehrangarh Fort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Beachfront Cottage in Varkala",
    description:
      "Perched on the cliffs above Varkala Beach, with sunset views over the Arabian Sea from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Valley View Homestay in Spiti",
    description:
      "A remote, high-altitude homestay in the stark and beautiful Spiti Valley, run by a local family.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626621331169-5f312a91d5c9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Spiti Valley",
    country: "India",
  },
];

module.exports = { data: sampleListings };