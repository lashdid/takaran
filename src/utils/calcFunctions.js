export function count({sizeA, sizeB, ingredients, amount, result, countMethod}) {
  if (amount == null) {
    result = "Masukkan Angka";
    ingredients = [];
    countMethod = "";
  } else {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
    ingredients = [];
    countMethod = "";
    if (sizeA == sizeB) result = amount;
    if (sizeA == "cup" && sizeB == "gram") {
      countMethod = `${amount} x n ( setiap bahan memiliki n yang berbeda )`;
      result = `${Math.round(amount * 250 * 10) / 10}`;
      const formula = (i) => Math.round(amount * i * 10) / 10;
      ingredients = [
        {
          name: "Sirup / Madu",
          value: formula(340),
        },
        {
          name: "Susu Encer",
          value: formula(200),
        },
        {
          name: "Tepung Terigu",
          value: formula(150),
        },
        {
          name: "Tepung Maizena",
          value: formula(130),
        },
        {
          name: "Tepung Kanji",
          value: formula(130),
        },
        {
          name: "Tepung Sagu",
          value: formula(100),
        },
        {
          name: "Tepung Beras",
          value: formula(100),
        },
        {
          name: "Tepung Roti",
          value: formula(150),
        },
        {
          name: "Gula Pasir",
          value: formula(250),
        },
        {
          name: "Gula Halus",
          value: formula(175),
        },
        {
          name: "Gula Palem",
          value: formula(175),
        },
        {
          name: "Mentega",
          value: formula(225),
        },
        {
          name: "Buah Kering (sukade, kismis, dll)",
          value: formula(175),
        },
        {
          name: "Bubuk Coklat",
          value: formula(100),
        },
      ];
    }
    if (sizeA == "gram" && sizeB == "cup") {
      countMethod = `${amount} : n ( setiap bahan memiliki n yang berbeda )`;
      result = `${Math.round((amount / 250) * 100) / 100}`;
      const formula = (i) => Math.round((amount / i) * 100) / 100;
      ingredients = [
        {
          name: "Sirup / Madu",
          value: formula(340),
        },
        {
          name: "Susu Encer",
          value: formula(200),
        },
        {
          name: "Tepung Terigu",
          value: formula(150),
        },
        {
          name: "Tepung Maizena",
          value: formula(130),
        },
        {
          name: "Tepung Kanji",
          value: formula(130),
        },
        {
          name: "Tepung Sagu",
          value: formula(100),
        },
        {
          name: "Tepung Beras",
          value: formula(100),
        },
        {
          name: "Tepung Roti",
          value: formula(150),
        },
        {
          name: "Gula Pasir",
          value: formula(250),
        },
        {
          name: "Gula Halus",
          value: formula(175),
        },
        {
          name: "Gula Palem",
          value: formula(175),
        },
        {
          name: "Mentega",
          value: formula(225),
        },
        {
          name: "Buah Kering (sukade, kismis, dll)",
          value: formula(175),
        },
        {
          name: "Bubuk Coklat",
          value: formula(100),
        },
      ];
    }
    if (sizeA == "cup" && sizeB == "tbsp") {
      countMethod = `${amount} x 16`;
      result = Math.round(amount * 16 * 10) / 10;
    }
    if (sizeA == "tbsp" && sizeB == "cup") {
      countMethod = `${amount} : 16`;
      result = Math.round((amount / 16) * 10) / 10;
    }
    if (sizeA == "cup" && sizeB == "tsp") {
      countMethod = `${amount} x 32`;
      result = Math.round(amount * 32 * 10) / 10;
    }
    if (sizeA == "tsp" && sizeB == "cup") {
      countMethod = `${amount} : 32`;
      result = Math.round((amount / 32) * 100) / 100;
    }
    if (sizeA == "cup" && sizeB == "ml") {
      countMethod = `${amount} x 200`;
      result = Math.round(amount * 200 * 10) / 10;
    }
    if (sizeA == "ml" && sizeB == "cup") {
      countMethod = `${amount} / 200`;
      result = Math.round((amount / 200) * 100) / 100;
    }
    if (sizeA == "tbsp" && sizeB == "ml") {
      countMethod = `${amount} * 12.5`;
      result = Math.round(amount * 12.5 * 10) / 10;
    }
    if (sizeA == "ml" && sizeB == "tbsp") {
      countMethod = `${amount} / 12.5`;
      result = Math.round((amount / 12.5) * 100) / 100;
    }
    if (sizeA == "gram" && sizeB == "tbsp") {
      countMethod = `${amount} : n ( setiap bahan memiliki n yang berbeda )`;
      result = Math.round(amount * 0.07 * 100) / 100;
      const formula = (i) => Math.round((amount / i) * 100) / 100;
      ingredients = [
        {
          name: "Gula Pasir",
          value: formula(15),
        },
        {
          name: "Gula Halus",
          value: formula(12),
        },
        {
          name: "Gula Merah",
          value: formula(15),
        },
        {
          name: "Brown Sugar",
          value: formula(10),
        },
        {
          name: "Garam",
          value: formula(10),
        },
        {
          name: "Tepung Terigu",
          value: formula(8),
        },
        {
          name: "Tepung Maizena",
          value: formula(12),
        },
        {
          name: "Tepung Tapioka",
          value: formula(15),
        },
        {
          name: "Tepung Beras",
          value: formula(15),
        },
        {
          name: "Tepung Jagung",
          value: formula(15),
        },
        {
          name: "Margarine",
          value: formula(15),
        },
        {
          name: "Soda Kue",
          value: formula(15),
        },
        {
          name: "Mentega Cair",
          value: Math.round(amount * 0.123 * 10) / 10,
        },
      ];
    }
    if (sizeA == "tbsp" && sizeB == "gram") {
      countMethod = `${amount} x n ( setiap bahan memiliki n yang berbeda )`;
      result = Math.round((amount / 0.07) * 10) / 10;
      const formula = (i) => Math.round(amount * i * 10) / 10;
      ingredients = [
        {
          name: "Gula Pasir",
          value: formula(15),
        },
        {
          name: "Gula Halus",
          value: formula(12),
        },
        {
          name: "Gula Merah",
          value: formula(15),
        },
        {
          name: "Brown Sugar",
          value: formula(10),
        },
        {
          name: "Garam",
          value: formula(10),
        },
        {
          name: "Tepung Terigu",
          value: formula(8),
        },
        {
          name: "Tepung Maizena",
          value: formula(12),
        },
        {
          name: "Tepung Tapioka",
          value: formula(15),
        },
        {
          name: "Tepung Beras",
          value: formula(15),
        },
        {
          name: "Tepung Jagung",
          value: formula(15),
        },
        {
          name: "Margarine",
          value: formula(15),
        },
        {
          name: "Soda Kue",
          value: formula(15),
        },
        {
          name: "Mentega Cair",
          value: Math.round((amount / 0.123) * 10) / 10,
        },
      ];
    }
    if (sizeA == "gram" && sizeB == "tsp") {
      countMethod = `${amount} : n ( setiap bahan memiliki n yang berbeda )`;
      result = Math.round((amount / 4.8) * 100) / 100;
      const formula = (i) => Math.round((amount / i) * 100) / 100;
      ingredients = [
        {
          name: "Gula Pasir",
          value: formula(5),
        },
        {
          name: "Gula Halus",
          value: formula(4),
        },
        {
          name: "Gula Merah",
          value: formula(5),
        },
        {
          name: "Brown Sugar",
          value: formula(3.3),
        },
        {
          name: "Garam",
          value: formula(3.3),
        },
        {
          name: "Tepung Terigu",
          value: formula(2.7),
        },
        {
          name: "Tepung Maizena",
          value: formula(4),
        },
        {
          name: "Tepung Tapioka",
          value: formula(5),
        },
        {
          name: "Tepung Beras",
          value: formula(5),
        },
        {
          name: "Tepung Jagung",
          value: formula(15),
        },
        {
          name: "Margarine",
          value: formula(5),
        },
        {
          name: "Soda Kue",
          value: formula(5),
        },
        {
          name: "Mentega Cair",
          value: Math.round(amount * 0.041 * 100) / 100,
        },
      ];
    }
    if (sizeA == "tsp" && sizeB == "gram") {
      countMethod = `${amount} x n ( setiap bahan memiliki n yang berbeda )`;
      result = Math.round(amount * 4.8 * 100) / 100;
      const formula = (i) => Math.round(amount * i * 10) / 10;
      ingredients = [
        {
          name: "Gula Pasir",
          value: formula(5),
        },
        {
          name: "Gula Halus",
          value: formula(4),
        },
        {
          name: "Gula Merah",
          value: formula(5),
        },
        {
          name: "Brown Sugar",
          value: formula(3.3),
        },
        {
          name: "Garam",
          value: formula(3.3),
        },
        {
          name: "Tepung Terigu",
          value: formula(2.7),
        },
        {
          name: "Tepung Maizena",
          value: formula(4),
        },
        {
          name: "Tepung Tapioka",
          value: formula(5),
        },
        {
          name: "Tepung Beras",
          value: formula(5),
        },
        {
          name: "Tepung Jagung",
          value: formula(15),
        },
        {
          name: "Margarine",
          value: formula(5),
        },
        {
          name: "Soda Kue",
          value: formula(5),
        },
        {
          name: "Mentega Cair",
          value: Math.round(amount * 0.041 * 100) / 100,
        },
      ];
    }
    if (sizeA == "ml" && sizeB == "gram") {
      countMethod = `${amount} x n ( setiap bahan memiliki n yang berbeda ) atau ${amount} ml = ${amount} gram`;
      result = amount;
      const formula = (i) => Math.round(amount * i * 100) / 100;
      ingredients = [
        {
          name: "Madu",
          value: formula(1.36),
        },
        {
          name: "Susu",
          value: formula(1.03),
        },
        {
          name: "Tepung",
          value: formula(0.593),
        },
        {
          name: "Minyak",
          value: formula(0.933),
        },
        {
          name: "Margarin",
          value: formula(0.865),
        },
      ];
    }
    if (sizeA == "gram" && sizeB == "ml") {
      countMethod = `${amount} x n ( setiap bahan memiliki n yang berbeda ) atau ${amount} gram = ${amount} ml`;
      result = amount;
      const formula = (i) => Math.round((amount / i) * 100) / 100;
      ingredients = [
        {
          name: "Madu",
          value: formula(1.36),
        },
        {
          name: "Susu",
          value: formula(1.03),
        },
        {
          name: "Tepung",
          value: formula(0.593),
        },
        {
          name: "Minyak",
          value: formula(0.933),
        },
        {
          name: "Margarin",
          value: formula(0.865),
        },
      ];
    }
    if (sizeA == "tsp" && sizeB == "ml") {
      countMethod = `${amount} x 4.2`;
      result = Math.round(amount * 4.2 * 10) / 10;
    }
    if (sizeA == "ml" && sizeB == "tsp") {
      countMethod = `${amount} : 4.2`;
      result = Math.round((amount / 4.2) * 10) / 10;
    }
    if (sizeA == "tbsp" && sizeB == "tsp") {
      countMethod = `${amount} x 3`;
      result = Math.round(amount * 3 * 10) / 10;
    }
    if (sizeA == "tsp" && sizeB == "tbsp") {
      countMethod = `${amount} : 3`;
      result = Math.round((amount / 3) * 10) / 10;
    }
  }

  return {
    sizeA,
    sizeB,
    ingredients,
    amount,
    result,
    countMethod,
  };
}
