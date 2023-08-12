import React from 'react'
import "./Home.scss"
import VideoPlayer from "./VideoPlayer"
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import { random } from 'lodash';

function Home() {
  const places =["https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-cover.jpeg", "https://cdnimg.vietnamplus.vn/t620/uploaded/ngtnnn/2021_02_09/0902dulich.jpg", "https://photo-cms-vovworld.zadn.vn/w500/uploaded/vovworld/jcqpivou/2020_12_28/sapa_dtxo.jpg", "https://static.vinwonders.com/2022/11/khu-du-lich-viet-nam-1.jpg", "https://www.haydocla.com/wp-content/uploads/2021/09/Gioi-thieu-cac-dia-diem-du-lich-o-Viet-Nam-2-1.jpg", "https://loca.vn/wp-content/uploads/diem-du-lich-sai-gon.jpeg"]
  const festivals=["https://danangxanh.vn/data/images/festival-hue%281%29.jpg", "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/4/1144189/Den-Long.jpg", "https://static.vinwonders.com/2023/01/cac-le-hoi-o-viet-nam-1.jpg", "https://dichungtaxi.com/blog/wp-content/uploads/2016/03/02c2b1ec85f9862f27b4c89ea20dd926.jpg", "https://toquoc.mediacdn.vn/Uploaded/anhcinet/2018_07_05/nhat_BPJZ.jpg"]
  const foods=["https://cafebiz.cafebizcdn.vn/162123310254002176/2023/6/16/a-production-webs3amazonawscom2fbrightspot2f082f652fccfbc191437fb8f616aaadf84c132fshutterstock-2144279725-16868161084101499888520-1686884259615-1686884260082199846633.jpg", "https://media.cooky.vn/recipe/g3/26101/s/recipe26101-cook-step5-636875695270855127.JPG", "https://images2.thanhnien.vn/528068263637045248/2023/5/22/bun-bo-nam-bo-16847360191061617508934.jpeg"]
  const combine = [...places, ...festivals, ...foods,...festivals, ...foods, ...places, ...places, ...festivals]
  const quoteText = "Your Gateway to Experiencing Vietnam's Vibrant Culture and Delights!";
  const words = quoteText.split(' ');
  const widthR = random(80, 150);
  const slideImg =
    combine.map((c, index)=>
            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
          >
            <span>
              &nbsp;
            </span>
              <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 100,
                  }}
                  key={index}
                  className="header-img-container"
                  >
                  <img src={c} alt="viet-name-img"/>
                   
                </div>
    
              </motion.div>       
          </motion.section>)

          
        
  
  return (
    <div className="home-container">
      <div className="header">
        <h1>VNhub</h1>
        <div className="header-img">{ slideImg}</div>
        {/* <div className="header-img back">{ slideImg}</div> */}
       

      </div>
        
        <p className="quote">
        {words.map((word) => (
                    <>
                      <span className="highlighted-word">{word}</span> <span> </span>
                    </>
                   
            ))}
        </p>
        <div className="video-container">
          <div className="video">
            <VideoPlayer />
          </div>
        </div>
        <div className="home-body">
          <div className="container">
            <div className="body">
              <h3>Discover Vietnam's Rich Tapestry of Festivals, Cuisine, and Captivating Destinations</h3>
              <p>Embark on a journey through the heart of Vietnam's cultural treasures with VNhub. Immerse yourself in a world where age-old traditions meet modern excitement, where every corner tells a story, and where every dish is a masterpiece.</p>

            </div>
            <div class="slideshow-container">
        
            </div>
          </div>
            
       
          
          <div className="body">
            <h2>Festivals that Ignite the Spirit</h2>
            <p>Experience the pulse of Vietnam through its captivating festivals. From the electrifying lantern spectacle of the Mid-Autumn Festival in Hoi An to the colorful pageantry of Tet Nguyen Dan (Lunar New Year), our festivals resonate with centuries of history and unbridled joy. Witness dragon dances, floral displays, and join locals in their traditional celebrations, creating memories that last a lifetime.</p>

          </div>
          <div className="body">
            <h2>Culinary Odyssey Beyond Compare:</h2>
            <p>Vietnamese cuisine is a symphony of flavors, a delicate balance of sweet, savory, and tangy notes that awaken the senses. Savor the iconic Pho, a soul-soothing noodle soup, or dive into the crispy freshness of Goi Cuon (spring rolls). Our culinary adventure spans bustling street markets to elegant restaurants, where you'll learn the art of crafting these delectable dishes yourself.</p>

          </div>
          <div className="body">
            <h2>Captivating Destinations Aplenty</h2>
            <p>Whether you're captivated by the charm of ancient Hanoi's Old Quarter, entranced by the ethereal beauty of Ha Long Bay's emerald waters, or intrigued by the bustling energy of Ho Chi Minh City, VNhub guides you to Vietnam's most enchanting destinations. Trek through the terraced fields of Sapa, cruise along the Mekong Delta's intricate waterways, and wander the historic streets of Hoi An – each step is an exploration of wonder.</p>

          </div>
          
          
          
          
          <h1>Why VNhub:</h1>
          <div>
          Local Insights: Our curated experiences are designed by locals, ensuring an authentic and immersive encounter with Vietnam's cultural gems.
  Tailored Itineraries: Craft your journey according to your preferences, be it a culinary escapade, festival immersion, or leisurely exploration.
  Expert Guides: Our knowledgeable guides are passionate storytellers, adding depth to every place you visit.
  Unforgettable Memories: From sunrise at Angkor Wat to savoring street food under the stars, VNhub creates moments that become cherished memories.
  Book Your Adventure Today!
  Let VNhub be your passport to the heart and soul of Vietnam. Whether you're an adventurous explorer, a culture enthusiast, or a culinary connoisseur, there's a world of experiences waiting for you. Begin your journey with VNhub today and unlock the secrets of Vietnam's festivals, food, and fascinating destinations.

          </div>
          <p>Your Adventure Awaits. Your Memories Begin. Explore Vietnam with VNhub.</p>


        </div>
        

    </div>
  )
}

export default Home