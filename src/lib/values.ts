export const values = {
  pcc: {
    value: 2000,
    image: "gpoitems/pcc.png",
    name: "PCC",
  },
  legchest: {
    value: 1000,
    image: "gpoitems/legchest.png",
    name: "Legendary Chest",
  },
} as const;

export type ItemKey = keyof typeof values;

export const valueItems = Object.entries(values).map(([key, data]) => ({
  key: key as ItemKey,
  ...data,
}));