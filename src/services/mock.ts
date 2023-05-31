export const recipes: any = [
  {
    name: "Pasta Boloñesa",
    ingredients: [
      {
        name: "Pasta",
        quantity: {
          amount: 100,
          units: "gr"
        },
      },
      {
        name: "Tomate Triturado",
        quantity: {
          amount: 100,
          units: "gr"
        },
      },
      {
        name: "Aceite",
        quantity: {
          amount: 10,
          units: "ml"
        }
      },
      {
        name: "Azucar",
        quantity: {
          amount: 5,
          units: "gr"
        }
      },
      {
        name: "Cebolla",
        quantity: {
          amount: 1,
          units: "pieza"
        },
      },
    ],
    instructions: "Primer paso",
    cookingTime: 30,
    people: 2,
    dayMoment: ["lunch"]
  },
  {
    name: "Pizza",
    ingredients: [
      {
        name: "Harina",
        quantity: {
          amount: 200,
          units: "gr"
        }
      },
      {
        name: "Tomate Frito",
        quantity: {
          amount: 100,
          units: "gr"
        }
      },
      {
        name: "Queso Rallado",
        quantity: {
          amount: 200,
          units: "gr"
        }
      },

      {
        name: "Champiñones",
        quantity: {
          amount: 5,
          units: "pieza"
        }
      },
    ],
    instructions: "Primer paso",
    cookingTime: 45,
    people: 2,
    dayMoment: ["dinner"]
  },
  {
    name: "Sopa",
    ingredients: [
      {
        name: "Caldo",
        quantity: {
          amount: 1000,
          units: "ml"
        }
      },
      {
        name: "Fideos",
        quantity: {
          amount: 200,
          units: "gr"
        }
      }
    ],
    instructions: "Primer paso",
    cookingTime: 5,
    people: 2,
    dayMoment: ["lunch", "dinner"]
  },
  {
    name: "Hamburgues",
    ingredients: [],
    instructions: "Haciendo hamburguesas con Jose",
    cookingTime: 15,
    people: 2,
    dayMoment: ["lunch", "dinner"]
  }
]