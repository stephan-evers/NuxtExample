type VisibleError = {
  messages: string[];
  idents: string[];
};

type Drawing = {
  deadline: string;
  drawing: string;
  originalDrawing: string;
  drawingShifted: string;
  ticketFee: number;
  pricePerField: number;
  additionalOptions: {
    fee: number;
    game: string;
    price: number;
  }[];
  additionalGames: {
    game: string;
    price: number;
    fee: number;
  }[];
};

type Share = {
  from: string;
  id: string;
  name: string;
  price: number;
  shares: string;
  sharesSelection: string;
  system: string;
  till: string;
  type: string;
};

type GameCommunityLotteries = {
  count: number;
  gluecksspirale: string;
  megaPlier: string;
  plus5: string;
  powerPlay: string;
  sharesFrom: string;
  siegerchance: string;
  spiel77: string;
  super6: string;
  system: string;
  type: string;
  weekdays: string;
};

type GameCommunity = {
  available: boolean;
  gameCommunityLotteries: GameCommunityLotteries[];
  id: string;
  isAbonnement: boolean;
  jackpotCracker: string;
  name: string;
  participations: string;
  price: string;
  variant: string;
};

export type TicketDefinitionResponse = {
  ticketDefinition: {
    backendError: string | null;
    success: boolean;
    visibleErrors: VisibleError[];
    available: boolean;
    fields: number;
    numbersPerField: {
      base: number;
      extra: number;
    };
    jackpotDrawsSinceLastHit: number;
    jackpotLastHit: string | null;
    tipsPerField: {
      base: number;
      extra: number;
    };
    jackpot: number;
    drawings: Drawing[];
    shares: Share[];
    discounts: {
      percent: number;
      type: string;
    }[];
    gameCommunities: GameCommunity[];
  }
};
