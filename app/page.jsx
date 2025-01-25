import CookieBanner from "@/components/cookieBanner";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import Image from "next/image";
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <div>
        <div className="image_container" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image className="w_100 h_100" src={"/img/Hauptmenu.png"} width={1920} height={1080} />
          <div className="text_white text_overlay normal_version" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <p className="fs-1 fw-bold">Druglord&apos;s Legacy</p>
            <p className="fs-5 fw-medium">&quot;Druglord&apos;s Legacy&quot; is a tycoon game where you build a drug empire by growing, harvesting, and selling drugs to expand your business and rise to the top of the market.</p>
          </div>

          <div className="text_white text_overlay responsive_header" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <p className="fs-3 fw-bold">Druglord&apos;s Legacy</p>
            <p className="fs-6 fw-medium">&quot;Druglord&apos;s Legacy&quot; is a tycoon game where you build a drug empire by growing, harvesting, and selling drugs to expand your business and rise to the top of the market.</p>
          </div>

          <div className="text_white text_overlay last_header" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -10%)',
            textAlign: 'center'
          }}>
            <p className="fs-4 fw-bold m-0">Druglord&apos;s Legacy</p>
            <p className="small_text fw-medium">&quot;Druglord&apos;s Legacy&quot; is a tycoon game where you build a drug empire by growing, harvesting, and selling drugs to expand your business and rise to the top of the market.</p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center text_white">
          <div className="content_container mt-5 normal_version">
            <p className="fs-2 fw-semibold">Latest News</p>
            <div className="row">
              <div className="col-8">
                <iframe
                  className='w_100 h_100 custom_border'
                  width="1920"
                  height="1080"
                  src="https://www.youtube.com/embed/Uxe6uFr8isc?si=yhxWfGISFI9eQatA&autoplay=0&mute=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </div>

              <div className="col-4">
                <div className="row">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">v0.1.2 | Current Version</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Major Bugfixes from the Test Version Realese</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/BugImage.jpg"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">v0.1.1</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Major Bugfixes from the Test Version Realese</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/BugImage.jpg"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">v0.1.0 | Realese</p>
                    </div>
                    <div>
                      <p className="small_text m-0 mt-2">Realese from the Test Version, join on our Discord</p>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <Image className='w_100 border_r' src={"/img/Hauptmenu.png"} width={100} height={75} />
                  </div>
                </div>
                <div className="row mt-4 news_4">
                  <div className="col-8 border_l gradient_background">
                    <div>
                      <p className="small_text m-0 mt-1">v0.1.0</p>
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

          <div className="content_container mt-5 responsive_version">
            <p className="fs-2 fw-semibold">Latest News</p>
            <div>
              <iframe
                className='w_100 custom_border custom_video'
                width="1920"
                height="1080"
                src="https://www.youtube.com/embed/OEkEPuziyiU?si=QgQg43wjU-Fc-l9b&autoplay=0&mute=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>

            <div>
              <div className="row w-100 mt-2 mx-0">
                <div className="col-8 border_l gradient_background">
                  <div>
                    <p className="small_text m-0 mt-1">v0.1.2 | Current Version</p>
                  </div>
                  <div>
                    <p className="small_text m-0 mt-2">Major Bugfixes from the Test Version Realese</p>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <Image className='w_100 border_r' src={"/img/BugImage.jpg"} width={300} height={80} />
                </div>
              </div>
              <div className="row mt-3 w-100  mx-0">
                <div className="col-8 border_l gradient_background">
                  <div>
                    <p className="small_text m-0 mt-1">v0.1.1</p>
                  </div>
                  <div>
                    <p className="small_text m-0 mt-2">Major Bugfixes from the Test Version Realese</p>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <Image className='w_100 border_r' src={"/img/BugImage.jpg"} width={300} height={80} />
                </div>
              </div>
              <div className="row mt-3 w-100  mx-0">
                <div className="col-8 border_l gradient_background">
                  <div>
                    <p className="small_text m-0 mt-1">v0.1.0 | Realese</p>
                  </div>
                  <div>
                    <p className="small_text m-0 mt-2">Realese from the Test Version, join on our Discord</p>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <Image className='w_100 border_r' src={"/img/Hauptmenu.png"} width={300} height={80} />
                </div>
              </div>
              <div className="row mt-3 news_4 w-100  mx-0">
                <div className="col-8 border_l gradient_background">
                  <div>
                    <p className="small_text m-0 mt-1">v0.1.0</p>
                  </div>
                  <div>
                    <p className="small_text m-0 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <Image className='w_100 border_r' src={"/img/Platzhalter.png"} width={300} height={80} />
                </div>
              </div>
            </div>
          </div>

          <div className="content_container mt-5 normal_screenshots">
            <p className="fs-2 fw-semibold">Screenshots</p>
            <div className="row">
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/StarterHaus.png" width={1920} height={1080} />
              </div>
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Lagerhaus.png" width={1920} height={1080} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Anwalt.png" width={1920} height={1080} />
              </div>
              <div className="col-6">
                <Image className="w-100 h-100 custom_border" src="/img/Shop.png" width={1920} height={1080} />
              </div>
            </div>
          </div>

          <div className="content_container mt-5 responsive_screenshots">
            <p className="fs-2 fw-semibold">Screenshots</p>
            <div className="row">
              <div className="col-6 pe-1">
                <Image className="w-100 h-100 custom_border" src="/img/StarterHaus.png" width={1920} height={1080} />
              </div>
              <div className="col-6 ps-1">
                <Image className="w-100 h-100 custom_border" src="/img/Lagerhaus.png" width={1920} height={1080} />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-6 pe-1">
                <Image className="w-100 h-100 custom_border" src="/img/Anwalt.png" width={1920} height={1080} />
              </div>
              <div className="col-6 ps-1">
                <Image className="w-100 h-100 custom_border" src="/img/Shop.png" width={1920} height={1080} />
              </div>
            </div>
          </div>

          <div className="content_container mt-5">
            <div className="normal_font">
              Are you ready to dive into the adventure of our game? Step into the world of &apos;Druglord&apos;s Legacy&apos; and face exciting challenges. Build your empire from the ground up and become the ultimate master!
            </div>
            <div className="normal_font">
              Download the latest version now and join our growing community. The download is just one click away, and you can start playing right away. What are you waiting for?
            </div>
            <br />
            <div>
              <a className='text-decoration-none text_white' href="/download">
                <Button className='custom_btn border-0 w_100'>
                  <div className="normal_font"><DownloadIcon /> Download now</div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <CookieBanner />
    </div>
  );
}
