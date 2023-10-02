import Domain from "../Icons/Domain"
import Drag from "../Icons/Drag"
import Embed from "../Icons/Embed"
import Exposure from "../Icons/Exposure"
import NoLimit from "../Icons/NoLimit"
import Responsive from "../Icons/Responsive"

const allFeatures = [
  {
    name: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    Icon: Responsive,
  },
  {
    name: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    Icon: NoLimit,
  },
  {
    name: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    Icon: Embed,
  },
  {
    name: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    Icon: Domain,
  },
  {
    name: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    Icon: Exposure,
  },
  {
    name: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    Icon: Drag,
  },
]

export { allFeatures }
