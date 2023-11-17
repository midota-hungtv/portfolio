import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: 'Hello, my name is Tran Van Hung. I am a Frontend Software Engineer from Ho Chi Minh, Viet Nam. Currently, I am employed by Midota as an Web Developer. I love working on a variety of technologies. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.',
        id_ID: 'Xin chào, tôi tên là Trần Văn Hùng. Tôi là Kỹ sư phần mềm Frontend đến từ Hồ Chí Minh, Việt Nam. Hiện tại, tôi đang làm việc tại Midota với vị trí Nhà phát triển web. Tôi thích làm việc trên nhiều công nghệ khác nhau. Mục tiêu của tôi là xây dựng các ứng dụng có hiệu suất cao nhằm giải quyết các vấn đề trong thế giới thực và cung cấp cho người dùng trải nghiệm tuyệt vời.',
      },
    },
  ]
})
