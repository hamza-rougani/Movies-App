import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const listOfImg = [
  "https://static.lpnt.fr/images/2020/04/18/20259720lpw-20259783-article-jpg_7055451_1250x625.jpg",
  "https://static.lpnt.fr/images/2013/01/07/breaking-1011331-jpg_882547_660x287.JPG",
  "https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/series/dark-sur-netflix-une-saison-4-est-elle-prevue-3868848/93610424-1-fre-FR/Dark-sur-Netflix-une-saison-4-est-elle-prevue.jpg",
  "https://occ-0-1555-3211.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTKNltbqj8mwGcjap_syLhMItvTAqvC0YWQB5FS3lb2QtjqW5rG3gXPFONGryHGMVN00Rxf5VWrNFhztgoEWMwjNyiuEhRPsVnZm.jpg?r=24c",
  "https://geotimes.id/wp-content/uploads/2019/04/How-to-Watch-Game-of-Thrones-Season-8-Live-Online.jpg",
  "https://static.lpnt.fr/images/2020/04/18/20259720lpw-20259783-article-jpg_7055451_1250x625.jpg",
  "https://static.lpnt.fr/images/2013/01/07/breaking-1011331-jpg_882547_660x287.JPG",
  "https://geotimes.id/wp-content/uploads/2019/04/How-to-Watch-Game-of-Thrones-Season-8-Live-Online.jpg",
]
// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Swiperpersons(e) {
 
  return (
    <div className="sw1">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {e.mov && e.mov.map((r)=>{
            return(
            <SwiperSlide >
            <img src={
                e.type!="Actors"?
                `https://image.tmdb.org/t/p/w220_and_h330_face/${r.poster_path}`
                :
                r.profile_path
                ?
                `https://image.tmdb.org/t/p/w220_and_h330_face/${r.profile_path}` 
                
                :
                'https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg'

                } alt="" />
           {e.type=="Actors" ?<><span id='spanAc'>{r.known_for_department && r.known_for_department}</span><h4 id="h4">{r.name}</h4></>:""} 
           {e.type=="Reco" ?<><span id='spanAc'>{r.air_date && r.air_date.split('-')[0]}</span><h4 id="h4">{r.name}</h4></>:""} 
            </SwiperSlide>
         
      
            )
        
        }
        )}
        
      
      
      
        
      </Swiper>
    </div>
  );
}
