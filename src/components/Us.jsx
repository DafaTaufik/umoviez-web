import "./AboutUs.css";
import data from "./assets/data.jpg";
import gt from "./assets/gilbert.jpg";
import citop from "./assets/citops.jpg";
import damu from "./assets/damu.jpg";
import yori from "./assets/yori.jpg";
import InstagramIcon from "./assets/ig.png";

const Us = () => {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 md:px-10 pb-16">
      <div id="model3" className="">
        <h1 className="model-title font-montserrat text-white">OUR TEAM</h1>
        <div className="divider"></div>
        <div className="gabunganPoto">
          <div className="members flex justify-center align-middle ">
            <div className="member">
              <img width={320} height={320} src={gt} />
              <div className="descriptionatas">
                <h1 className="">Gilbert Tiovan</h1>
                <h2>00000066811</h2>
                <p>Aman sajaa...... </p>
                <div className="social-media">
                  <a href="https://www.instagram.com/gilbert_tiovan/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="member">
              <img width={320} height={320} src={citop} />
              <div className="descriptionatas">
                <h1>Christopher Andrew Radharjo</h1>
                <h2>00000066460</h2>
                <p>Fix Golll Bang Messi</p>
                <div className="social-media">
                  <a href="https://www.instagram.com/christopher_rahardjo/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="member">
              <img width={320} height={320} src={yori} />
              <div className="descriptionatas">
                <h1>Yohanes Riangto</h1>
                <h2>00000065501</h2>
                <p>Kuliah menyenangkan kalau punya pacar</p>
                <div className="social-media">
                  <a href="https://www.instagram.com/yohanes_riangto/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="members bawah mt-5">
            <div className="member">
              <img width={300} height={300} src={data} />
              <div className="description">
                <h1>Dafa Taufik Al Latief</h1>
                <h2>00000067476</h2>
                <p>Izin abangda..</p>
                <div className="social-media">
                  <a href="https://www.instagram.com/dafataufk/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="member">
              <img width={300} height={300} src={damu} />
              <div className="description">
                <h1>Daffa Muflih Purnama</h1>
                <h2>00000067437</h2>
                <p>Kita memang teman, tapi kalo urusan polisi kita masing-masing</p>
                <div className="social-media">
                  <a href="https://www.instagram.com/daffamflh/">
                    <img src={InstagramIcon} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Us;
