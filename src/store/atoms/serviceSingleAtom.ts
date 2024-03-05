import { atom } from "recoil";

export const serviceData = atom({
  key: "serviceTitle",
  default: {
    title: "Video Editing",
    description: {
      para1:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",

      para2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
    },
    descriptionimg: "/Unblue.in/public/images/service/thumb-one.png",
    approachimg: "/Unblue/public/images/service/thumb-two.png",
    approach: {
      para1:
        "We employ proven website design strategies in each and every work, whether it&apos;s a simple informational website or a full-blown e-commerce website.",
      para2:
        "First we create sitemaps, user flows, and wireframes to hone your message and desired interaction. Then comes our aesthetically remarkable designs. Every design is optimized for mobile and desktop to create a consistent.",
    },
  },
});
