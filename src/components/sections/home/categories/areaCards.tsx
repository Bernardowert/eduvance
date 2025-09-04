import { CardCategory } from "@/components/cardCategorie";




const listing = [
     {
        title:"Health & Wellness",
        href:"#",
        subtitle:"120 Total Courses",
        svg: <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.2379 0.838867C24.4738 0.838867 0.358643 24.954 0.358643 54.7181C30.1227 54.7181 54.2379 30.6029 54.2379 0.838867Z" fill="currentcolor"/><path d="M56.1465 0.838867C56.1465 30.6029 80.2616 54.7181 110.065 54.7181C110.065 24.954 85.9105 0.838867 56.1465 0.838867Z" fill="currentcolor"/><path d="M57.0818 110C86.8458 110 111 85.8849 111 56.1208C81.2359 56.1208 57.0818 80.236 57.0818 110Z" fill="currentcolor"/><path d="M55.2116 110C55.2116 80.236 31.0575 56.1208 1.29346 56.1208C1.29346 85.8849 25.4475 110 55.2116 110Z" fill="currentcolor"/></svg>
     },
     {
        title:"Technology & Development",
        href:"#",
        subtitle:"241 Total Courses",
        svg: <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.2702 37.21H0.358643L0.358643 0.838623L37.2702 0.838623V37.21Z" fill="currentcolor"/><path d="M74.134 73.6317H37.269L37.269 37.2144L74.134 37.2144V73.6317Z" fill="currentcolor"/><path d="M37.2705 109.998H0.358887L0.358887 73.6266H37.2705V109.998Z" fill="currentcolor"/><path d="M110.998 110H74.1335V73.6285H110.998V110Z" fill="currentcolor"/><path d="M111 37.21H74.135V0.838623L111 0.838623V37.21Z" fill="currentcolor"/></svg>

     },
     {
        title:"Language & Communication",
        href:"#",
        subtitle:"70 Total Courses",
        svg: <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0001 28.9094C13.0205 28.9094 0.0456543 41.8843 0.0456543 57.8638H58C58 41.8843 45.0252 28.9094 29.0001 28.9094Z" fill="currentcolor"/><path d="M87 87.0908C103.025 87.0908 116 74.1159 116 58.0908H58C58 74.1159 70.9749 87.0908 87 87.0908Z" fill="currentcolor"/><path d="M28.9092 87.0001C28.9092 102.98 41.884 116 57.9091 116V58.0001C41.884 58.0001 28.9092 70.975 28.9092 87.0001Z" fill="currentcolor"/><path d="M87.0912 29.0001C87.0912 12.975 74.1163 0.00012207 58.1367 0.00012207V58C74.1163 58 87.0912 45.0252 87.0912 29.0001Z" fill="currentcolor"/></svg>

     },
     {
        title:"Design & Creativity",
        href:"#",
        subtitle:"151 Total Courses",
        svg: <svg width="111" height="110" viewBox="0 0 111 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.6603 55.3063L55.1308 59.0951C55.0803 59.0701 55.0299 59.0576 54.9794 59.0576L46.6956 109.287C49.646 109.737 52.6721 110 55.6603 110C59.0268 110 62.4312 109.7 65.722 109.1L56.152 57.7446L55.6603 55.3063Z" fill="currentcolor"/><path d="M55.5845 55.1948L52.6719 57.8207C52.6467 57.7957 52.6215 57.7707 52.5963 57.7457L13.8247 91.0571C18.0234 95.8587 23.0164 99.8726 28.6146 102.986L54.4497 57.333L55.5845 55.1948Z" fill="currentcolor"/><path d="M55.7361 55.2322L57.7787 58.4958C57.7535 58.5208 57.7156 58.5458 57.6652 58.5708L83.6516 102.461C89.1742 99.2347 94.0916 95.1083 98.1768 90.2317L56.6817 55.9824L55.7361 55.2322Z" fill="currentcolor"/><path d="M51.6506 55.2726V55.2351L0.358643 56.2104C0.47212 62.6251 1.68256 68.8522 3.98994 74.8168L55.6223 55.16L51.6506 55.2726Z" fill="currentcolor"/><path d="M110.924 52.9451L59.6702 54.9708C59.6702 54.9958 59.6702 55.0208 59.6702 55.0458L55.6985 55.1583L59.4432 56.3962C59.4432 56.4212 59.4432 56.4463 59.4432 56.4713L107.709 73.8022C109.865 67.8001 111 61.5355 111 55.1208C111 54.3956 110.975 53.6703 110.924 52.9451Z" fill="currentcolor"/><path d="M55.6985 55.119L56.3793 54.8564L106.915 34.4119C104.456 28.5224 101.052 23.1205 96.7396 18.3939L58.6489 52.4556C58.6489 52.4806 58.6615 52.5056 58.6867 52.5306L56.3415 54.5188L55.6985 55.119Z" fill="currentcolor"/><path d="M51.8775 53.7696L55.5845 55.1201H55.6223L12.4251 20.8708C8.41557 25.8601 5.31384 31.487 3.27124 37.5265L51.8775 53.8446C51.8775 53.8196 51.8775 53.7946 51.8775 53.7696Z" fill="currentcolor"/><path d="M53.6181 51.7052L55.585 54.9688L44.5399 1.40051C38.1851 2.67595 32.2086 5.00174 26.7239 8.37789L53.5803 51.7427C53.5803 51.7177 53.5929 51.7052 53.6181 51.7052Z" fill="currentcolor"/><path d="M81.7605 6.72814C76.0488 3.72711 69.921 1.73893 63.5284 0.838623L56.2659 51.1808L55.6985 54.9696L81.7605 6.72814Z" fill="currentcolor"/></svg>
     }
]

export function AreaCards(){
    return(
        <div className="flex items-center justify-between gap-8 mt-16">
              {
                listing.map(({title,href,subtitle,svg},index) => (
                    <CardCategory key={index} title={title} href={href} subtitle={subtitle}>{svg}</CardCategory>
                ))
              }
        </div>
    )
}