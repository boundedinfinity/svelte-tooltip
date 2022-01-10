export interface TTEntry {
    title: string
    abbr?: string
    description?: string
    references?: TTReference[]
}

export interface TTReference {
    text?: string
    url: string
    description?: string
}