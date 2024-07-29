export function getNestedPropertyIgnoreCase(obj : any, path : string) {
    return path.split('.').reduce((o, p) => {
        if (o) {
            const key = Object.keys(o).find(k => k.toLowerCase() === p.toLowerCase());
            return key ? o[key] : undefined;
        }
        return undefined;
    }, obj);
}