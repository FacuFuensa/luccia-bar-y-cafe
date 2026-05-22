export type MenuItem = {
  name: string
  description?: string
  price: number
  isNew?: boolean
  sinTacc?: boolean
}

export type MenuSection = {
  id: string
  title: string
  items: MenuItem[]
  note?: string
}

export const menuSections: MenuSection[] = [
  {
    id: 'cafeteria',
    title: 'Cafetería',
    items: [
      { name: 'Pocillo', price: 3700 },
      { name: 'Jarrita', price: 4000 },
      { name: 'Café Doble', price: 5000 },
      { name: 'Café con Leche', price: 4800 },
      { name: 'Cappuccino', price: 5000 },
      { name: 'Moka', description: 'con salsa de chocolate', price: 5000 },
      { name: 'Nutelatte', description: 'shot de café, nutelatte y leche', price: 5500 },
      { name: 'Frapuccino', description: 'doble shot de café con helado', price: 6500 },
      { name: 'Affogatto', description: 'shot de café con helado de vainilla', price: 6300 },
      { name: 'Submarino', price: 5300 },
      { name: 'Té / Mate', price: 3500 },
    ],
  },
  {
    id: 'para-acompanar',
    title: 'Para Acompañar',
    items: [
      { name: 'Croissant J&Q', price: 8600 },
      { name: 'Croissant con Nutella', price: 8600, isNew: true },
      { name: 'Alfajor de Coco y DDL', price: 4200 },
      { name: 'Alfajor de Alm & Nuez', description: 'Sin TACC disponible', price: 5400, sinTacc: true },
      { name: 'Alfajor de Chocolate', price: 4500 },
      { name: 'Alfajor de Maicena', price: 4000 },
      { name: 'Cuadrado', description: 'Brownie / Coco & Dulce de leche / Ricota / Manzana', price: 5300, sinTacc: true },
      { name: 'Porción de Torta', description: 'Consultar variedad', price: 7500, sinTacc: true },
      { name: 'Porción de Budín', description: 'Limón con Glasé / Banana y Nuez / Carrot con Frosting', price: 4500 },
      { name: 'Tortilla / Medialuna', price: 1800 },
      { name: 'Bowl de Frutas', price: 7500 },
    ],
  },
  {
    id: 'desayunos',
    title: 'Desayunos & Meriendas',
    note: 'Todos incluyen infusión + shot de jugo de naranja',
    items: [
      { name: 'Clásico', description: '2 medialunas o tortillas', price: 7000 },
      { name: 'Saludable', description: 'Tostadas de pan integral, queso crema, mermelada, mini granola bowl', price: 8500, sinTacc: true },
      { name: 'Feliz', description: 'Croissant de jamón y queso', price: 12000 },
      { name: 'Luccia', description: 'Waffle tibio con ddl/choco/miel, con bananas o frutilla según estación', price: 11500 },
      { name: 'Luccia Nut', description: 'Waffle tibio con nutella, helado de americana, lluvia de nueces, bananas o frutilla según estación', price: 14000 },
      { name: 'Energético', description: 'Tostadas en pan integral untadas en mantequilla de maní, bananas, miel y nueces', price: 10500 },
      { name: 'Avocado Toast', description: 'Tostón de campo, queso crema, palta y cherrys', price: 13200, sinTacc: true },
      { name: 'Granola Bowl', description: 'Bowl de yogurt griego, frutas de estación, granola y miel', price: 13200 },
      { name: 'Banana Pancakes', description: 'Pancakes de avena y banana, dip de miel y fruta de estación', price: 11500 },
      { name: 'Fit', description: 'Omelette de jamón & queso, mix de verdes y tostada rústica en pan de campo', price: 14000, sinTacc: true },
      { name: 'Proteico', description: 'Huevo revuelto, dip queso crema, fetas de jamón & queso y tostadas', price: 11500, sinTacc: true },
      { name: 'Americano', description: 'Huevos revueltos, tostada rústica de pan de campo y fruta de estación', price: 11500, sinTacc: true },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Nuestros Sandwiches',
    items: [
      { name: 'Jamón y Queso', description: 'Pan árabe / Pan de miga', price: 10900, sinTacc: true },
      { name: 'Ternera, Tomate & Queso', description: 'Pan árabe / Pan de miga', price: 12500, sinTacc: true },
      { name: 'Queso Tybo, Palta & Tomate', description: 'Pan árabe', price: 12500, sinTacc: true },
      { name: 'Jamón Crudo, Rúcula & Tybo', description: 'Pan árabe', price: 12500, sinTacc: true },
    ],
  },
  {
    id: 'brunch',
    title: 'Brunch Para Compartir',
    items: [
      { name: 'Feliz Compartido', description: '2 infusiones, 2 shots de naranja, sandwich de J&Q en pan árabe, porción de budín y cuadrado dulce a elección', price: 24500 },
      { name: 'Fit Compartido', description: '2 infusiones, 2 shots de naranja, huevos revueltos, fetas de J&Q, tostadas en pan integral, 2 mini granola bowls', price: 24500 },
      { name: 'Trío de Bruschettas', description: '2 infusiones o Stella 975ml, Trío de bruschettas (Rúcula & Jamón Crudo / Caprese / Queso azul, Peras caramelizadas & Nueces)', price: 24500 },
    ],
  },
  {
    id: 'entre-panes',
    title: 'Entre Panes',
    items: [
      { name: 'Argentino', description: 'Lomito a la plancha en pan árabe con lechuga y tomate + papas fritas', price: 14500 },
      { name: 'Argentino Completo', description: 'Lomito completo (Jamón, queso y huevo)', price: 17000 },
      { name: 'Americano', description: 'Lomito en pan árabe, queso cheddar, panceta, cebolla caramelizada + papas fritas', price: 17000 },
      { name: 'Pollo', description: 'Pollo a la plancha en pan árabe con rúcula, tomate y queso tybo. Opción liviana', price: 14500 },
      { name: 'Mexicano (1 persona)', description: 'Pan de miga, lomito gratinado con queso, jamón, tomate y huevo frito + papas fritas', price: 18000 },
      { name: 'Mexicano (2 personas)', description: 'Pan de miga, lomito gratinado con queso, jamón, tomate y huevo frito + papas fritas', price: 30000 },
      { name: 'Milanesa', description: 'Milanesa en pan árabe con lechuga, tomate y aderezo + papas fritas', price: 15000 },
    ],
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    items: [
      { name: 'Muzzarela', description: 'Salsa de tomate y muzzarela', price: 19000 },
      { name: 'Especial', description: 'Salsa de tomate, muzzarela, jamón, morrones y aceitunas', price: 22000 },
      { name: 'Napolitana', description: 'Salsa de tomate, muzzarela, tomate & ajo', price: 22000 },
      { name: 'Fugazzeta Especial', description: 'Salsa de tomate, muzzarela, cebolla salteada y queso azul', price: 22000 },
      { name: 'Crudo y Rúcula', description: 'Salsa de tomate, muzzarela, jamón crudo y rúcula', price: 22000 },
      { name: 'Ternera', description: 'Salsa de tomate, muzzarela, ternera, morrón y huevo', price: 22000 },
    ],
  },
  {
    id: 'entradas',
    title: 'Entradas',
    items: [
      { name: 'Rabas', description: 'Anillos de calamar rebozados con dip de la casa', price: 22900 },
      { name: 'Papas Fritas', price: 8500 },
      { name: 'Papas Gratinadas', price: 10600 },
      { name: 'Papas con Cheddar, Verdeo & Bacon', price: 12500 },
      { name: 'Bastones de Pollo Crispy', description: 'Tiras de pollo crujiente rebozadas con 3 dips de la casa', price: 15500 },
      { name: 'Empanadas (unidad)', description: 'Carne / Pollo / J&Q / Sfija', price: 2300 },
      { name: 'Docena de Empanadas', price: 21500 },
    ],
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    items: [
      { name: 'Fresca', description: 'Mix de hojas verdes, pollo salteado, cherrys, manzana verde, aros de cebolla morada y queso azul, vinagreta de aceto y miel', price: 16500, sinTacc: true },
      { name: 'Luccia', description: 'Colchón de lechuga, cubitos de pollo, palta, choclo, cherrys, cebolla morada, vinagreta de yogurt griego, aceite de oliva y jugo de limón', price: 17500, sinTacc: true },
      { name: 'César', description: 'Colchón de lechuga, bastones de pollo, queso en hebras, croutones y salsa cesar', price: 16500, sinTacc: true },
      { name: 'Mediterránea', description: 'Colchón mix de verdes, langostinos salteados, queso pategras, cherrys y gajos de palta', price: 19300, sinTacc: true },
    ],
  },
  {
    id: 'al-plato',
    title: 'Al Plato',
    items: [
      { name: 'Bife de Lomo a Caballo', description: '+ papas fritas o ensalada mixta', price: 24000 },
      { name: 'Bife de Lomo al Verdeo', description: '+ papas fritas o ensalada mixta', price: 25000 },
      { name: 'Bife de Lomo al Malbec', description: '+ papas fritas o ensalada mixta', price: 26000 },
      { name: 'Bife de Pollo', description: 'A la plancha + papas fritas o ensalada mixta', price: 21900 },
      { name: 'Sorrentinos', description: 'J&Q o Calabaza & Mozzarella en salsa filetto / bechamel / parisienne / bolognesa', price: 19000 },
      { name: 'Fettuccines', description: 'En salsa filetto / bechamel / parisienne / bolognesa', price: 19000 },
      { name: 'Milanesa/Suprema con papas (1p)', price: 15000 },
      { name: 'Milanesa/Suprema con papas (2p)', price: 26000 },
      { name: 'Milanesa/Suprema Napolitana (1p)', description: '+ papas fritas', price: 20500 },
      { name: 'Milanesa/Suprema Napolitana (2p)', description: '+ papas fritas', price: 35000 },
      { name: 'Milanesa/Suprema al Verdeo (1p)', description: '+ papas fritas', price: 20500 },
      { name: 'Milanesa/Suprema al Verdeo (2p)', description: '+ papas fritas', price: 35000 },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    items: [
      { name: 'Brownie', description: 'Tibio con helado de dulce de leche y coulis de frutos rojos', price: 8000 },
      { name: 'Copa Helada', description: '2 sabores de helado a elección con fruta de estación', price: 8000 },
      { name: 'Copa Norteña', description: 'Cayote con helado de americana y nueces', price: 8000 },
      { name: 'Panqueques', description: 'Rellenos de dulce de leche con helado de americana', price: 8000 },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas sin Alcohol',
    items: [
      { name: 'Agua con/sin gas', price: 3800 },
      { name: 'Agua Saborizada', description: 'Manzana / Naranja / Pera / Pomelo / Pomelo rosado', price: 3800 },
      { name: 'Gaseosas (350ml)', description: 'Línea Coca-Cola', price: 3800 },
      { name: 'Gaseosas (1lt)', description: 'Línea Coca-Cola', price: 7900 },
      { name: 'Jugo de Naranja', price: 4900 },
      { name: 'Limonada Clásica (vaso)', price: 4500 },
      { name: 'Limonada Clásica (jarra)', price: 7900 },
      { name: 'Limonada Frozen', description: 'Con helado de limón y menta', price: 6600 },
    ],
  },
  {
    id: 'batidos',
    title: 'Batidos Refrescantes',
    items: [
      { name: 'Licuados', description: 'Banana / frutilla / durazno / andino', price: 6000 },
      { name: 'Detox Verde', description: 'Manzana verde, limón, jengibre, espinaca & menta', price: 6500 },
      { name: 'Orange Detox', description: 'Zanahoria, jugo de naranja, jengibre & miel', price: 6500 },
      { name: 'Milkshake', description: 'Helado a elección batido con leche', price: 6500 },
      { name: 'Energético', description: 'Ananá, durazno, frutilla & jugo de naranja (*100% fruta)', price: 6500 },
      { name: 'Passion Blend', description: 'Maracuyá, banana, ananá & jugo de naranja (*100% fruta)', price: 6500 },
      { name: 'Andino', description: 'Frutilla, banana, arándanos & jugo de naranja (*100% fruta)', price: 6500 },
    ],
  },
  {
    id: 'bebidas-alcohol',
    title: 'Bebidas con Alcohol',
    items: [
      { name: 'Stella 975cc', price: 11200 },
      { name: 'Stella 473cc', price: 6900 },
      { name: 'Corona 710cc', price: 13300 },
      { name: 'Andes 975cc', price: 9700 },
      { name: 'Andes 473cc', price: 5900 },
      { name: 'Vinos / Whisky / Espumante', description: 'Consultar variedad', price: 0 },
    ],
  },
  {
    id: 'tragos',
    title: 'Nuestros Tragos',
    items: [
      { name: 'Garibaldi', description: 'Campari & Jugo de naranja', price: 8500 },
      { name: 'Gin Nacional', price: 8600 },
      { name: 'Beefeater', price: 9200 },
      { name: 'Aperol Orange', description: 'Aperol, Jugo de naranja & Soda', price: 10000 },
      { name: 'Fernet con Coca', price: 9200 },
      { name: 'Negroni', description: 'Gin, Campari & Vermouth', price: 11000 },
      { name: 'Copa de Vino', description: 'Consultar variedad', price: 7000 },
    ],
  },
]

export const menuEjecutivo = {
  price: 18000,
  hours: 'Lunes a Domingos 12 a 16hs',
  includes: 'entrada (pan de campo & dip de la casa), bebida y postre o café',
}
