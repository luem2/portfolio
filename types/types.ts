import type { UseFormRegisterReturn } from 'react-hook-form'

import { StaticImageData } from 'next/image'

export interface SideBarObject {
    id: string
    title: string
    path: string
    icon: JSX.Element
}

export type SimpleColors =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'

export interface IProject {
    id: string
    name: string
    src: StaticImageData
    alt: string
    gh: string
    web: string
    logo: StaticImageData
    description: string
    technologies: {
        frontend: string
        backend: string
    }
}

export interface ITech {
    name: string
    img: StaticImageData
    secondLine?: string
    dark?: boolean
}

export interface IHelper {
    text: string | React.ReactNode
    color: SimpleColors
}

export interface InputForm {
    [name: string]: IHelper | UseFormRegisterReturn<string>
}
