const storage = window.localStorage;

export let cards;

cards = loadTasks();

async function timeout(time = 3000) {
  await new Promise(resolve => setTimeout(resolve, time));
}

function loadTasks() {
  const obj = storage.getItem("cards");
  if (obj == null) return [];
  return [...JSON.parse(obj)];
}

export const add = async newCard => {
  console.log("adding: ", newCard);
  const date = new Date();
  if (!cards) cards = [];
  const obj = newCard;
  obj.id = date.getTime();
  cards.push(obj);
  storage.setItem("cards", JSON.stringify(cards));
  await timeout(1300);
  return { data: obj, result: true };
};

export const remove = async id => {
  const index = cards.findIndex(el => el.id === id);
  if (index > -1) {
    await timeout(900);
    cards.splice(index, 1);
    storage.setItem("cards", JSON.stringify(cards));
    return true;
  }
  return false;
};