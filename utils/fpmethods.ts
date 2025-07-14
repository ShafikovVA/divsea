export function compose(...fns: Function[]) {
	return (x: any) => fns.reduceRight((v: any, f: Function) => f(v), x)
}