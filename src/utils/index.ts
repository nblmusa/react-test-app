/**
 * Sort objects by specified key
 * @param key
 * @param order
 */
export const sortByKey = (key: string, order: string = 'asc') => (a: any, b: any) => {
    return order === 'asc'
        ? (resolvePath(key, a) > resolvePath(key, b) ? 1 : -1)
        : (resolvePath(key, a) < resolvePath(key, b) ? 1 : -1);
}

/**
 * resolve object path.
 * @example 'a.b.c' => obj[a][b][c]
 * @param path
 * @param obj
 * @param separator
 */
export const resolvePath = (path: string, obj: {}, separator: string = '.') => {
    const properties: any = Array.isArray(path) ? path : path.split(separator)
    return properties.reduce((prev: any, curr: any) => prev && prev[curr], obj)
}
