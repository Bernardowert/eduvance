
interface SubtitleProps{
    text:string;
    className?:string;
}

export function SubTitle({text, className}: SubtitleProps){
    return(
        <span className={`inline-block py-2 px-6 text-lg font-bold text-primary-600 rounded-full bg-primary-20 ${className ? className : ""}`}>{text}</span>
    )
}