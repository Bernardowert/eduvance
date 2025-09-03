
interface SubtitleProps{
    text:string;
}

export function SubTitle({text}: SubtitleProps){
    return(
        <span className="inline-block py-2 px-6 text-lg font-bold text-primary-600 rounded-full bg-primary-20">{text}</span>
    )
}