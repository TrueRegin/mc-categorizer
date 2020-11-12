export const PORT = 30350;

export function SITE_URL(path?:string) {
    if(path) return `http://localhost:${PORT}${path}`  
    return `http://localhost:${PORT}`
}