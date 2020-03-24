export type Unpacked<T> = T extends Array<infer U> ? U : T extends (...args: any[]) =>
	infer K ? K : T extends Promise<infer K> ? K : T;

export type ReturnTypeFulfilled<T> = T extends (...args: any[]) => infer R ? { [K in keyof R]: Unpacked<R[K]> } : any;
