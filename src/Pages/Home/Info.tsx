import BeautyDes from "/home/desktop/beautiful-stories.jpg"
import BeautyTab from "/home/tablet/beautiful-stories.jpg"
import BeautyMob from "/home/mobile/beautiful-stories.jpg"
import DesignMob from "/home/mobile/designed-for-everyone.jpg"
import DesignTab from "/home/tablet/designed-for-everyone.jpg"
import DesignDes from "/home/desktop/designed-for-everyone.jpg"
import PhotoText from "../../Components/PhotoText/PhotoText"

export default function Info() {
  return (
    <section>
      <PhotoText
        title="beautiful stories every time"
        desktop={BeautyDes}
        mobile={BeautyMob}
        tablet={BeautyTab}
        gradient={false}
        color="white"
        vh={true}
        subtitle="We provide design templates to ensure your stories look terrific. Easily
        add photos, text, embed maps and media from other networks. Then share
        your story with everyone."
        alt="beautiful storied image"
        flip={true}
        cta="view the stories"
      />
      <PhotoText
        title="designed for everyone"
        desktop={DesignDes}
        mobile={DesignMob}
        tablet={DesignTab}
        gradient={false}
        color="white"
        vh={true}
        subtitle="Photosnap can help you create stories that resonate with your audience.
        Our tool is designed for photographers of all levels, brands, businesses
        you name it."
        alt="design image"
        cta="view the stories"
      />
    </section>
  )
}
