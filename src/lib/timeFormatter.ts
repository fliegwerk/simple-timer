import DateMillis from "../types/DateMillis";

export default function(dateMillis: DateMillis): string {
    const seconds = Math.floor(dateMillis / 1000) % 60;
    const minutes = Math.floor(dateMillis / (60 * 1000)) % 60;
    const hours = Math.floor(dateMillis / (60 * 60 * 1000)) % 24;
    const days = Math.floor(dateMillis / (24 * 60 * 60 * 1000));

    const strBuilder: string[] = [`${seconds}s`];
    if (minutes > 0) {
        strBuilder.unshift(`${minutes}m `);
        if (hours > 0) {
            strBuilder.unshift(`${hours}h `);
            if (days > 0) {
                strBuilder.unshift(`${days}d `);
            }
        }
    }
    return strBuilder.join('');
}
