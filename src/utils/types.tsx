interface Kill {
  eventId: number;
  victmin: string;
  killFame: number;
  timestamp: Date;
}

interface Death {
  eventId: number;
  killer: string;
  killFame: number;
  timestamp: Date;
}

type Item = {
  Type: string;
  Quality: number;
};

type Equipment = {
  MainHand: Item;
  OffHand: Item;
  Head: Item;
  Armor: Item;
  Shoes: Item;
  Bag: Item;
  Cape: Item;
  Mount: Item;
  Potion: Item;
  Food: Item;
};

interface Event {
  killFame: number;
  timestamp: string;
  killerName: string;
  killerIp: number;
  killerEquipment: Equipment;
  victimName: string;
  victimIp: number;
  victimEquipment: Equipment;
}

interface PlayerDetails {
  name: string;
  guild: string;
  alliance: string;
  pvpFame: number;
  ratio: number;
  id: string;
  pveFame: {
    Total: number;
    Royal: number;
    Outlands: number;
    Avalon: number;
    Hellgate: number;
    CorruptedDungeon: number;
  };
  gatheringFame: {
    Fiber: {
      Total: number;
    };
    Hide: {
      Total: number;
    };
    Ore: {
      Total: number;
    };
    Rock: {
      Total: number;
    };
    Wood: {
      Total: number;
    };
  };
}

interface PlayerBasic {
  name: string;
  guild: string;
  alliance: string;
  pvpFame: number;
  ratio: number;
  id: string;
}

export type { Kill, Death, Item, Equipment, Event, PlayerDetails, PlayerBasic };
