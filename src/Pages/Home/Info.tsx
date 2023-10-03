import InfoBlock from "./InfoBlock"
import BeautyDes from "/home/desktop/beautiful-stories.jpg"
import BeautyTab from "/home/tablet/beautiful-stories.jpg"
import BeautyMob from "/home/mobile/beautiful-stories.jpg"
import DesignMob from "/home/mobile/designed-for-everyone.jpg"
import DesignTab from "/home/tablet/designed-for-everyone.jpg"
import DesignDes from "/home/desktop/designed-for-everyone.jpg"

export default function Info() {
  return (
    <section>
      <InfoBlock
        title="beautiful stories every time"
        des={BeautyDes}
        mob={BeautyMob}
        tab={BeautyTab}
        alt="beautiful storied image"
      >
        We provide design templates to ensure your stories look terrific. Easily
        add photos, text, embed maps and media from other networks. Then share
        your story with everyone.
      </InfoBlock>
      <InfoBlock
        title="designed for everyone"
        des={DesignDes}
        mob={DesignMob}
        tab={DesignTab}
        alt="design image"
        right={true}
      >
        Photosnap can help you create stories that resonate with your audience.
        Our tool is designed for photographers of all levels, brands, businesses
        you name it.
      </InfoBlock>
    </section>
  )
}
