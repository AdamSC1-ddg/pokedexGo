$(function(){
  var pokemon = [
	{ value:'Bulbasaur', data: '1', hp: '90', atk: '126', def: '126', candy: '25 Bulbasaur candy', egg: '2km', type: 'Grass'}, 
	{ value:'Ivysaur', data: '2', hp: '120', atk: '156', def: '158', candy: '100 Bulbasaur candy', egg: 'Not in Eggs', type: 'Grass'}, 
	{ value:'Venusaur', data: '3', hp: '160', atk: '198', def: '200', candy: 'None', egg: 'Not in Eggs', type: 'Grass'}, 
	{ value:'Charmander', data: '4', hp: '78', atk: '128', def: '108', candy: '25 Charmander candy', egg: '2km', type: 'Fire'}, 
	{ value:'Charmeleon', data: '5', hp: '116', atk: '160', def: '140', candy: '100 Charmander candy', egg: 'Not in Eggs', type: 'Fire'}, 
	{ value:'Charizard', data: '6', hp: '156', atk: '212', def: '182', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{ value:'Squirtle', data: '7', hp: '88', atk: '112', def: '142', candy: '25 Squirtle candy', egg: '2km', type: 'Water'}, 
	{ value:'Wartortle', data: '8', hp: '118', atk: '144', def: '176', candy: '100 Squirtle candy', egg: 'Not in Eggs', type: 'Water'}, 
	{ value:'Blastoise', data: '9', hp: '158', atk: '186', def: '222', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{ value:'Caterpie', data: '10', hp: '90', atk: '62', def: '66', candy: '12 Caterpie candy', egg: '2km', type: 'Bug'}, 
	{ value:'Metapod', data: '11', hp: '100', atk: '56', def: '86', candy: '50 Caterpie candy', egg: 'Not in Eggs', type: 'Bug'}, 
	{ value:'Butterfree', data: '12', hp: '120', atk: '144', def: '144', candy: 'None', egg: 'Not in Eggs', type: 'Bug'}, 
	{ value:'Weedle', data: '13', hp: '80', atk: '68', def: '64', candy: '12 Weedle candy', egg: '2km', type: 'Bug'}, 
	{ value:'Kakuna', data: '14', hp: '90', atk: '62', def: '82', candy: '50 Weedle candy', egg: 'Not in Eggs', type: 'Bug'}, 
	{ value:'Beedrill', data: '15', hp: '130', atk: '144', def: '130', candy: 'None', egg: 'Not in Eggs', type: 'Bug'}, 
	{ value:'Pidgey', data: '16', hp: '80', atk: '94', def: '90', candy: '12 Pidgey candy', egg: '2km', type: 'Normal'}, 
	{ value:'Pidgeotto', data: '17', hp: '126', atk: '126', def: '122', candy: '50 Pidgey candy', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Pidgeot', data: '18', hp: '166', atk: '170', def: '166', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Rattata', data: '19', hp: '60', atk: '92', def: '86', candy: '25 Rattata candy', egg: '2km', type: 'Normal'}, 
	{value:'Raticate', data: '20', hp: '110', atk: '146', def: '150', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Spearow', data: '21', hp: '80', atk: '102', def: '78', candy: '50 Spearow candy', egg: '2km', type: 'Normal'}, 
	{value:'Fearow', data: '22', hp: '130', atk: '168', def: '146', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Ekans', data: '23', hp: '70', atk: '112', def: '112', candy: '50 Ekans candy', egg: '5km', type: 'Poison'}, 
	{value:'Arbok', data: '24', hp: '120', atk: '166', def: '166', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Pikachu', data: '25', hp: '70', atk: '124', def: '108', candy: '50 Pikachu candy', egg: '2km', type: 'Electric'}, 
	{value:'Raichu', data: '26', hp: '120', atk: '200', def: '154', candy: 'None', egg: 'Not in Eggs', type: 'Electric'}, 
	{value:'Sandshrew', data: '27', hp: '100', atk: '90', def: '114', candy: '50 Sandshrew candy', egg: '5km', type: 'Ground'}, 
	{value:'Sandslash', data: '28', hp: '150', atk: '150', def: '172', candy: 'None', egg: 'Not in Eggs', type: 'Ground'}, 
	{value:'Nidoran♀', data: '29', hp: '110', atk: '100', def: '104', candy: '25 Nidoran♀ candy', egg: '5km', type: 'Poison'}, 
	{value:'Nidorina', data: '30', hp: '140', atk: '132', def: '136', candy: '100 Nidoran♀ candy', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Nidoqueen', data: '31', hp: '180', atk: '184', def: '190', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Nidoran♂', data: '32', hp: '92', atk: '110', def: '94', candy: '25 Nidoran♂ candy', egg: '5km', type: 'Poison'}, 
	{value:'Nidorino', data: '33', hp: '122', atk: '142', def: '128', candy: '100 Nidoran♂ candy', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Nidoking', data: '34', hp: '162', atk: '204', def: '170', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Clefairy', data: '35', hp: '140', atk: '116', def: '124', candy: '50 Clefairy candy', egg: '2km', type: 'Fairy'}, 
	{value:'Clefable', data: '36', hp: '190', atk: '178', def: '178', candy: 'None', egg: 'Not in Eggs', type: 'Fairy'}, 
	{value:'Vulpix', data: '37', hp: '76', atk: '106', def: '118', candy: '50 Vulpix candy', egg: '5km', type: 'Fire'}, 
	{value:'Ninetales', data: '38', hp: '146', atk: '176', def: '194', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{value:'Jigglypuff', data: '39', hp: '230', atk: '98', def: '54', candy: '50 Jigglypuff candy', egg: '2km', type: 'Normal'}, 
	{value:'Wigglytuff', data: '40', hp: '280', atk: '168', def: '108', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Zubat', data: '41', hp: '80', atk: '88', def: '90', candy: '50 Zubat candy', egg: '2km', type: 'Poison'}, 
	{value:'Golbat', data: '42', hp: '150', atk: '164', def: '164', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Oddish', data: '43', hp: '90', atk: '134', def: '130', candy: '25 Oddish candy', egg: '5km', type: 'Grass'}, 
	{value:'Gloom', data: '44', hp: '120', atk: '162', def: '158', candy: '100 Oddish candy', egg: 'Not in Eggs', type: 'Grass'}, 
	{value:'Vileplume', data: '45', hp: '150', atk: '202', def: '190', candy: 'None', egg: 'Not in Eggs', type: 'Grass'}, 
	{value:'Paras', data: '46', hp: '70', atk: '122', def: '120', candy: '50 Paras candy', egg: '5km', type: 'Bug'}, 
	{value:'Parasect', data: '47', hp: '120', atk: '162', def: '170', candy: 'None', egg: 'Not in Eggs', type: 'Bug'}, 
	{value:'Venonat', data: '48', hp: '120', atk: '108', def: '118', candy: '50 Venonat candy', egg: '5km', type: 'Bug'}, 
	{value:'Venomoth', data: '49', hp: '140', atk: '172', def: '154', candy: 'None', egg: 'Not in Eggs', type: 'Bug'}, 
	{value:'Diglett', data: '50', hp: '20', atk: '108', def: '86', candy: '50 Diglett candy', egg: '5km', type: 'Ground'}, 
	{value:'Dugtrio', data: '51', hp: '70', atk: '148', def: '140', candy: 'None', egg: 'Not in Eggs', type: 'Ground'}, 
	{value:'Meowth', data: '52', hp: '80', atk: '104', def: '94', candy: '50 Meowth candy', egg: '5km', type: 'Normal'}, 
	{value:'Persian', data: '53', hp: '130', atk: '156', def: '146', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Psyduck', data: '54', hp: '100', atk: '132', def: '112', candy: '50 Psyduck candy', egg: '5km', type: 'Water'}, 
	{value:'Golduck', data: '55', hp: '160', atk: '194', def: '176', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Mankey', data: '56', hp: '80', atk: '112', def: '96', candy: '50 Mankey candy', egg: '5km', type: 'Fighting'}, 
	{value:'Primeape', data: '57', hp: '130', atk: '178', def: '150', candy: 'None', egg: 'Not in Eggs', type: 'Fighting'}, 
	{value:'Growlithe', data: '58', hp: '110', atk: '156', def: '110', candy: '50 Growlithe candy', egg: '5km', type: 'Fire'}, 
	{value:'Arcanine', data: '59', hp: '180', atk: '230', def: '180', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{value:'Poliwag', data: '60', hp: '80', atk: '108', def: '98', candy: '25 Poliwag candy', egg: '5km', type: 'Water'}, 
	{value:'Poliwhirl', data: '61', hp: '130', atk: '132', def: '132', candy: '100 Poliwag candy', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Poliwrath', data: '62', hp: '180', atk: '180', def: '202', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Abra', data: '63', hp: '50', atk: '110', def: '76', candy: '25 Abra candy', egg: '5km', type: 'Psychic'}, 
	{value:'Kadabra', data: '64', hp: '80', atk: '150', def: '112', candy: '100 Abra candy', egg: 'Not in Eggs', type: 'Psychic'}, 
	{value:'Alakazam', data: '65', hp: '110', atk: '186', def: '152', candy: 'None', egg: 'Not in Eggs', type: 'Psychic'}, 
	{value:'Machop', data: '66', hp: '140', atk: '118', def: '96', candy: '25 Machop candy', egg: '5km', type: 'Fighting'}, 
	{value:'Machoke', data: '67', hp: '160', atk: '154', def: '144', candy: '100 Machop candy', egg: 'Not in Eggs', type: 'Fighting'}, 
	{value:'Machamp', data: '68', hp: '180', atk: '198', def: '180', candy: 'None', egg: 'Not in Eggs', type: 'Fighting'}, 
	{value:'Bellsprout', data: '69', hp: '100', atk: '158', def: '78', candy: '25 Bellsprout candy', egg: '5km', type: 'Grass'}, 
	{value:'Weepinbell', data: '70', hp: '130', atk: '190', def: '110', candy: '100 Bellsprout candy', egg: 'Not in Eggs', type: 'Grass'}, 
	{value:'Victreebel', data: '71', hp: '160', atk: '222', def: '152', candy: 'None', egg: 'Not in Eggs', type: 'Grass'}, 
	{value:'Tentacool', data: '72', hp: '80', atk: '106', def: '136', candy: '50 Tentacool candy', egg: '5km', type: 'Water'}, 
	{value:'Tentacruel', data: '73', hp: '160', atk: '170', def: '196', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Geodude', data: '74', hp: '80', atk: '106', def: '118', candy: '25 Geodude candy', egg: '2km', type: 'Rock'}, 
	{value:'Graveler', data: '75', hp: '110', atk: '142', def: '156', candy: '100 Geodude candy', egg: 'Not in Eggs', type: 'Rock'}, 
	{value:'Golem', data: '76', hp: '160', atk: '176', def: '198', candy: 'None', egg: 'Not in Eggs', type: 'Rock'}, 
	{value:'Ponyta', data: '77', hp: '100', atk: '168', def: '138', candy: '50 Ponyta candy', egg: '5km', type: 'Fire'}, 
	{value:'Rapidash', data: '78', hp: '130', atk: '200', def: '170', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{value:'Slowpoke', data: '79', hp: '180', atk: '110', def: '110', candy: '50 Slowpoke candy', egg: '5km', type: 'Water'}, 
	{value:'Slowbro', data: '80', hp: '190', atk: '184', def: '198', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Magnemite', data: '81', hp: '50', atk: '128', def: '138', candy: '50 Magnemite candy', egg: '5km', type: 'Electric'}, 
	{value:'Magneton', data: '82', hp: '100', atk: '186', def: '180', candy: 'None', egg: 'Not in Eggs', type: 'Electric'}, 
	{value:'Farfetch\'d', data: '83', hp: '104', atk: '138', def: '132', candy: 'None', egg: '5km', type: 'Normal'}, 
	{value:'Doduo', data: '84', hp: '70', atk: '126', def: '96', candy: '50 Doduo candy', egg: '5km', type: 'Normal'}, 
	{value:'Dodrio', data: '85', hp: '120', atk: '182', def: '150', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Seel', data: '86', hp: '130', atk: '104', def: '138', candy: '50 Seel candy', egg: '5km', type: 'Water'}, 
	{value:'Dewgong', data: '87', hp: '180', atk: '156', def: '192', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Grimer', data: '88', hp: '160', atk: '124', def: '110', candy: '50 Grimer candy', egg: '5km', type: 'Poison'}, 
	{value:'Muk', data: '89', hp: '210', atk: '180', def: '188', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Shellder', data: '90', hp: '60', atk: '120', def: '112', candy: '50 Shellder candy', egg: '5km', type: 'Water'}, 
	{value:'Cloyster', data: '91', hp: '100', atk: '196', def: '196', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Gastly', data: '92', hp: '60', atk: '136', def: '82', candy: '25 Gastly candy', egg: '5km', type: 'Ghost'}, 
	{value:'Haunter', data: '93', hp: '90', atk: '172', def: '118', candy: '100 Gastly candy', egg: 'Not in Eggs', type: 'Ghost'}, 
	{value:'Gengar', data: '94', hp: '120', atk: '204', def: '156', candy: 'None', egg: 'Not in Eggs', type: 'Ghost'}, 
	{value:'Onix', data: '95', hp: '70', atk: '90', def: '186', candy: 'None', egg: '10km', type: 'Rock'}, 
	{value:'Drowzee', data: '96', hp: '120', atk: '104', def: '140', candy: '50 Drowzee candy', egg: '5km', type: 'Psychic'}, 
	{value:'Hypno', data: '97', hp: '170', atk: '162', def: '196', candy: 'None', egg: 'Not in Eggs', type: 'Psychic'}, 
	{value:'Krabby', data: '98', hp: '60', atk: '116', def: '110', candy: '50 Krabby candy', egg: '5km', type: 'Water'}, 
	{value:'Kingler', data: '99', hp: '110', atk: '178', def: '168', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Voltorb', data: '100', hp: '80', atk: '102', def: '124', candy: '50 Voltorb candy', egg: '5km', type: 'Electric'}, 
	{value:'Electrode', data: '101', hp: '120', atk: '150', def: '174', candy: 'None', egg: 'Not in Eggs', type: 'Electric'}, 
	{value:'Exeggcute', data: '102', hp: '120', atk: '110', def: '132', candy: '50 Exeggcute candy', egg: '5km', type: 'Grass'}, 
	{value:'Exeggutor', data: '103', hp: '190', atk: '232', def: '164', candy: 'None', egg: 'Not in Eggs', type: 'Grass'}, 
	{value:'Cubone', data: '104', hp: '100', atk: '102', def: '150', candy: '50 Cubone candy', egg: '5km', type: 'Ground'}, 
	{value:'Marowak', data: '105', hp: '120', atk: '140', def: '202', candy: 'None', egg: 'Not in Eggs', type: 'Ground'}, 
	{value:'Hitmonlee', data: '106', hp: '100', atk: '148', def: '172', candy: 'None', egg: '10km', type: 'Fighting'}, 
	{value:'Hitmonchan', data: '107', hp: '100', atk: '138', def: '204', candy: 'None', egg: '10km', type: 'Fighting'}, 
	{value:'Lickitung', data: '108', hp: '180', atk: '126', def: '160', candy: 'None', egg: '5km', type: 'Normal'}, 
	{value:'Koffing', data: '109', hp: '80', atk: '136', def: '142', candy: '50 Koffing candy', egg: '5km', type: 'Poison'}, 
	{value:'Weezing', data: '110', hp: '130', atk: '190', def: '198', candy: 'None', egg: 'Not in Eggs', type: 'Poison'}, 
	{value:'Rhyhorn', data: '111', hp: '160', atk: '110', def: '116', candy: '50 Rhyhorn candy', egg: '5km', type: 'Ground'}, 
	{value:'Rhydon', data: '112', hp: '210', atk: '116', def: '160', candy: 'None', egg: 'Not in Eggs', type: 'Ground'}, 
	{value:'Chansey', data: '113', hp: '500', atk: '40', def: '60', candy: 'None', egg: '10km', type: 'Normal'}, 
	{value:'Tangela', data: '114', hp: '130', atk: '164', def: '152', candy: 'None', egg: '5km', type: 'Grass'}, 
	{value:'Kangaskhan', data: '115', hp: '210', atk: '142', def: '178', candy: 'None', egg: '5km', type: 'Normal'}, 
	{value:'Horsea', data: '116', hp: '60', atk: '122', def: '100', candy: '50 Horsea candy', egg: '5km', type: 'Water'}, 
	{value:'Seadra', data: '117', hp: '110', atk: '176', def: '150', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Goldeen', data: '118', hp: '90', atk: '112', def: '126', candy: '50 Goldeen candy', egg: '5km', type: 'Water'}, 
	{value:'Seaking', data: '119', hp: '160', atk: '172', def: '160', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Staryu', data: '120', hp: '60', atk: '130', def: '128', candy: '50 Staryu candy', egg: '5km', type: 'Water'}, 
	{value:'Starmie', data: '121', hp: '120', atk: '194', def: '192', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Mr. Mime', data: '122', hp: '80', atk: '154', def: '196', candy: 'None', egg: '10km', type: 'Psychic'}, 
	{value:'Scyther', data: '123', hp: '140', atk: '176', def: '180', candy: 'None', egg: '10km', type: 'Bug'}, 
	{value:'Jynx', data: '124', hp: '130', atk: '172', def: '134', candy: 'None', egg: '10km', type: 'Ice'}, 
	{value:'Electabuzz', data: '125', hp: '130', atk: '198', def: '160', candy: 'None', egg: '10km', type: 'Electric'}, 
	{value:'Magmar', data: '126', hp: '130', atk: '214', def: '158', candy: 'None', egg: '10km', type: 'Fire'}, 
	{value:'Pinsir', data: '127', hp: '130', atk: '184', def: '186', candy: 'None', egg: '10km', type: 'Bug'}, 
	{value:'Tauros', data: '128', hp: '150', atk: '148', def: '184', candy: 'None', egg: '5km', type: 'Normal'}, 
	{value:'Magikarp', data: '129', hp: '40', atk: '42', def: '84', candy: '400 Magikarp candy', egg: '2km', type: 'Water'}, 
	{value:'Gyarados', data: '130', hp: '190', atk: '192', def: '196', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Lapras', data: '131', hp: '260', atk: '186', def: '190', candy: 'None', egg: '10km', type: 'Water'}, 
	{value:'Ditto', data: '132', hp: '96', atk: '110', def: '110', candy: 'None', egg: 'Not in Eggs', type: 'Normal'}, 
	{value:'Eevee', data: '133', hp: '110', atk: '114', def: '128', candy: '25 Eevee candy', egg: '10km', type: 'Normal'}, 
	{value:'Vaporeon', data: '134', hp: '260', atk: '186', def: '168', candy: 'None', egg: 'Not in Eggs', type: 'Water'}, 
	{value:'Jolteon', data: '135', hp: '130', atk: '192', def: '174', candy: 'None', egg: 'Not in Eggs', type: 'Electric'}, 
	{value:'Flareon', data: '136', hp: '130', atk: '238', def: '178', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{value:'Porygon', data: '137', hp: '130', atk: '156', def: '158', candy: 'None', egg: '5km', type: 'Normal'}, 
	{value:'Omanyte', data: '138', hp: '70', atk: '132', def: '160', candy: '50 Omanyte candy', egg: '10km', type: 'Rock'}, 
	{value:'Omastar', data: '139', hp: '140', atk: '180', def: '202', candy: 'None', egg: 'Not in Eggs', type: 'Rock'}, 
	{value:'Kabuto', data: '140', hp: '60', atk: '148', def: '142', candy: '50 Kabuto candy', egg: '10km', type: 'Rock'}, 
	{value:'Kabutops', data: '141', hp: '120', atk: '190', def: '190', candy: 'None', egg: 'Not in Eggs', type: 'Rock'}, 
	{value:'Aerodactyl', data: '142', hp: '160', atk: '182', def: '162', candy: 'None', egg: '10km', type: 'Rock'}, 
	{value:'Snorlax', data: '143', hp: '320', atk: '180', def: '180', candy: 'None', egg: '10km', type: 'Normal'}, 
	{value:'Articuno', data: '144', hp: '180', atk: '198', def: '242', candy: 'None', egg: 'Not in Eggs', type: 'Ice'}, 
	{value:'Zapdos', data: '145', hp: '180', atk: '232', def: '194', candy: 'None', egg: 'Not in Eggs', type: 'Electric'}, 
	{value:'Moltres', data: '146', hp: '180', atk: '242', def: '194', candy: 'None', egg: 'Not in Eggs', type: 'Fire'}, 
	{value:'Dratini', data: '147', hp: '82', atk: '128', def: '110', candy: '25 Dratini candy', egg: '10km', type: 'Dragon'}, 
	{value:'Dragonair', data: '148', hp: '122', atk: '170', def: '152', candy: '100 Dratini candy', egg: 'Not in Eggs', type: 'Dragon'}, 
	{value:'Dragonite', data: '149', hp: '182', atk: '250', def: '212', candy: 'None', egg: 'Not in Eggs', type: 'Dragon'}, 
	{value:'Mewtwo', data: '150', hp: '212', atk: '284', def: '202', candy: 'None', egg: 'Not in Eggs', type: 'Psychic'}, 
	{value:'Mew', data: '151', hp: '200', atk: '220', def: '220', candy: 'None', egg: 'Not in Eggs', type: 'Psychic'},
  ];

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: pokemon,
    onSelect: function (suggestion) {
	  if (suggestion.value == 'Mew'){
		  var infoLoc = 'This Pokemon hasn\'t been seen in the game yet. We think it would most likely appear in areas where other Psychic Pokemon exist. These include Hospitals and residential neighborhoods at night.';
		} else if (suggestion.type == "Psyhic" && suggestion.value != "Mew" && suggestion.value != "Mewtwo") {
			var infoLoc = 'Psychic Pokemon like '+suggestion.value+' have been frequently found near Hospitals during the day. At night, they can be frequently found in residential neighborhoods with parks.';
			var pokeResult = 'hospital';
		} else if (suggestion.type == "Dragon") {
			var infoLoc = 'Dragon Pokemon like '+suggestion.value+' have been found at major landmarks and golf courses (how weird)! In small towns, your best bet may be city hall!';
			var pokeResult = 'golf';
		} else if (suggestion.type == "Water") {
			var infoLoc = 'Water Pokemon are frequently found by rivers, lakes and oceans. You can also find them in wetlands or parks near fountains.';
			var pokeResult = 'pond';
		} else if (suggestion.type == "Fire") {
			var infoLoc = 'Farmlands have a higher than normal rate for spawning fire Pokemon like '+suggestion.value+'. They can also commonly in most areas mid afternoon.';
			var pokeResult = 'field';
		} else if (suggestion.type == "Rock") {
			var infoLoc = 'Hiking trails and mountainous regions are the best for finding Rock type Pokemon, especially in the evening. We\'ve also seen high number of reports for Rock Pokemon at golf course.';
			var pokeResult = 'trial';
		} else if (suggestion.type == "Electric"){
			var infoLoc = 'Electric Pokemon like '+suggestion.value+' have frequently been spotted on University/College Campuses.';
			var pokeResult = 'College';
		} else if (suggestion.type == "Normal"){
			var infoLoc = 'Normal type Pokemon like '+suggestion.value+' are everywhere. Rarer ones are commonly found in the early evening in residential areas, or in weekends at Malls.';
			var pokeResult = 'mall';
		} else if (suggestion.type == "Poison"){
			var infoLoc = 'Poison type Pokemon are frequently found near industrial parks and in wetlands. They seem most active during the early evening hours.'
			var pokeResult = 'industrial area';
		} else if (suggestion.type == "Ghost"){
			var infoLoc = 'Ghost Pokemon seem fairly rare so far. The do appear in residential areas but it is uncommon. They seem to appear more frequently at night, and may have a higher spawn rate near graveyards.';
			var pokeResult = 'cemetery';
		} else if (suggestion.type == "Bug"){
			var infoLoc = 'Bug type Pokemon frequently appear in grasslands and public parks. They are most active in the day especially in the afternoon.';
			var pokeResult = 'park';
		} else if (suggestion.type == "Fighting"){
			var infoLoc = 'Fighting type Pokemon are frequently found near local gyms (especially if they are a Pokestop) and sporting stadiums.';
			var pokeResult = 'gym';
		} else if (suggestion.type == "Fairy"){
			var infoLoc = 'Fairy type Pokemon are frequently found near major landmarks and beaches. They\'ve been found in some residential zones.';
			var pokeResult = 'landmarks';
		} else {
			var infoLoc = 'Scan your city to find where '+suggestion.value+' is most likely to appear based on recent sightings!'
			var pokeResult = 'Neighborhood';
		};
  var thehtml = '<center><script>$(document).ready(function(){$(\'#show-map\').on(\'click\',initialize)});</script></br><img src=\'/img/'+suggestion.data+'.ico\' height=70px width=70px><\/img></br>' + suggestion.value + ' </br></br> <strong>National Pokedex Number:</strong> ' + suggestion.data + ' <br> <strong>Attack:</strong> ' + suggestion.atk + ' <br> <strong>Defense:</strong> ' + suggestion.def + ' <br> <strong>Health:</strong> ' + suggestion.hp + ' </br></br> <strong>Candies Needed to Evolve:</strong> ' + suggestion.candy + ' <br> <strong>Distance to Hatch from Egg:</strong> ' + suggestion.egg + ' <br> <strong>Primary Type:</strong> ' + suggestion.type + '</br> </br>'+infoLoc+'</br></br><button id="show-map" height=50px width=200px">Search For This Pokemon</button></center><script>var pokeImage = '+suggestion.data+'; var pokeType = \''+pokeResult+'\';</script>';
      $('#outputcontent').html(thehtml);
    }
  });

});