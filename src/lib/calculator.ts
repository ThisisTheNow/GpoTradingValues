import { values, ItemKey } from './values';

export type OfferMap = Partial<Record<ItemKey, number>>;

export function calculateItemValue(item: ItemKey, quantity: number): number {
    const meta = values[item];
    if (!meta || quantity <= 0) {
        return 0;
    }
    return meta.value * quantity;
}

export function calculateOfferTotal(offer: OfferMap): number {
    return Object.entries(offer).reduce((sum, [key, qty]) => {
        const quantity = qty ?? 0;
        return sum + calculateItemValue(key as ItemKey, quantity);
    }, 0);
}

