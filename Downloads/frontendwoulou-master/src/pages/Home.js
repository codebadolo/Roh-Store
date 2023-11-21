import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4> SUPERCHARGE FOR PROS.</h4>
                  <h5>ipad S3+ pro</h5>
                  <p>A partir 500Fr ou 1000Fr</p>
                  <Link className="button">Achetez maintenant</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> SUPERCHARGE FOR PROS.</h4>
                    <h5>ipad S3+ pro</h5>
                    <p>A partir 500Fr ou 1000Fr</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRIVAL .</h4>
                    <h5>Iphone 15 pro</h5>
                    <p>
                      A partir 700Fr <br /> ou 9000Fr
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> BEST SALE .</h4>
                    <h5>Iphone 15 pro</h5>
                    <p>
                      A partir 700Fr <br /> ou 9000Fr
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> AJOUTE TA BOUTIQUE .</h4>
                    <h5>Divers</h5>
                    <p>
                      A partir 700Fr <br /> ou 9000Fr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Envoie Gratuit</h6>
                    <p className="mb-0">Pour tout Achats plus de 5000f</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Deal du jours </h6>
                    <p className="mb-0">Plus de -50% </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Service 24/7</h6>
                    <p className="mb-0">Acheter avec de experts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Les Meilleur Prix</h6>
                    <p className="mb-0">Obtenir une reductions</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Payement securise</h6>
                    <p className="mb-0">100% Fiable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Montre</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart-TV</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Musique et jeux</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Montre</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart-TV</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Musique et jeux</h6>
                    <p>10 Articles</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="conatainer-xxl">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="Brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Notre espece blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
