//for now there are no server so i make a setTimout funciton
function getOrganizations() {
  const organizations = {
    1: {
      name: "Русскоязычная общемировая Демографическая Статистика",
      link: "",
    },
    2: {
      name: "Русское объединение Древо Фамилий",
      link: "",
    },
    3: {
      name: "Страницы памяти - Бессмертный Полк",
      link: "",
    },
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(organizations);
    }, 2000);
  });
}

function getAbbr() {
  const abbrs = {
    1: {
      name: "Русскоязычное объединение Дань",
      data: {
        1: {
          name: "Добро",
          desc: "нормативно-оценочная категория морального сознания, характеризующая положительные нравственные ценности.",
        },
        2: {
          name: "Деньги",
          desc: "всеобщий эквивалент, служащий мерой цен и способный непосредственно легко обмениваться на предлагаемые товары или услуги.",
        },
        3: {
          name: "Дело",
          desc: "работа, занятие, деятельность.",
        },
        4: {
          name: "Дети",
          desc: "люди в период детства.",
        },
      },
    },
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(abbrs);
    }, 2000);
  });
}
export { getOrganizations, getAbbr };
