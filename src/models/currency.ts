export interface ICurrency {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    total_volume: number,
    price_change_percentage_24h: number,
    total_supply: number,
    market_cap: number
}