export function getParagraphs(paragraphs: string): string[] {
    return paragraphs.split(".").map(p => p.trim()).filter(p => p.length > 0);
}