import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: { street: { title: string } }
}
export type LessonType = {
    title: string
}

type propsType = {
    title: string
    man: ManType
}

function useCustomState(m: string) {
    return [m, function () {}]
}
function useCustomState2(m:string) {
    return {
        message: m,
        setMessage: function () {}
    }
}

export const ManComponent: React.FC<propsType> = ({title, man}) => {

    const [message, setMessage] = useCustomState('message')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )
}