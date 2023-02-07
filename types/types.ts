export interface SideBarObject {
    id: string
    title: string
    path: string
    icon: JSX.Element
}

export type Color =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
