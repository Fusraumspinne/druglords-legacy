import CookieBanner from "@/components/cookieBanner";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <div>
        <div className="image_container">
          <Image className='w_100 h_100' src={"/img/Platzhalter.png"} width={1920} height={1080} />
          <div className="text_white text_overlay">
            <p className="fs-1 fw-bold">Druglord&apos;s Legacy</p>
            <p className="fs-5 fw-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus labore voluptatem consectetur iure eligendi a libero nisi doloribus quaerat illo, sapiente vero esse vel.</p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center text_white">
          <div className="content_container mt-5">
            <p className="fs-2 fw-semibold">Latest News</p>
            <div className="row">
              <div className="col-8">
                <Image className='w_100 h_100 custom_border' src={"/img/Platzhalter.png"} width={1920} height={1080} />
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">1.1.24</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/Platzhalter.png"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">1.1.24</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/Platzhalter.png"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">1.1.24</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/Platzhalter.png"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">1.1.24</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/Platzhalter.png"} width={100} height={75} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content_container mt-5">
            <p className="fs-2 fw-semibold">Screenshots</p>
            <div className="row">
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Platzhalter.png" width={1920} height={1080} />
              </div>
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Platzhalter.png" width={1920} height={1080} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Platzhalter.png" width={1920} height={1080} />
              </div>
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Platzhalter.png" width={1920} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

      <CookieBanner />
    </div>
  );
}
