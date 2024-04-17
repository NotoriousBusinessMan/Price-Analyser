import Image from "next/image";
import Headset from '../../public/assets/images/headset.jpg'
import Crocs from '../../public/assets/images/crocs.jpg'
import Chair from '../../public/assets/images/chair.jpg'

export default function BottomHero() {
    return (
      <section>
        <div className="items">
            <div className="item">
                <div className="img-container">
                    <Image src={Headset} alt="headset_image" width={50} height={50}/>
                </div>
                <h4 className="product-title">Razor headset</h4>
                <h4><b>Price: </b> INR 4,500</h4>
            </div>
        </div>
      </section>
    );
  }