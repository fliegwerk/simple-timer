export function serializeDate(date: Date): string {
	return date.toISOString();
}

export function deserializeDate(date: string): Date {
	return new Date(Date.parse(date));
}
