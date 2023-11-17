import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'React',
      description: {
        en: 'I build modern and advanced websites and applications with React or NextJS.',
        id_ID: 'Tôi xây dựng các trang web và ứng dụng hiện đại và nâng cao bằng React hoặc NextJS.',
      },
      icon: 'devicon:react',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: 'I use Vue or NuxtJS, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
        id_ID: 'Tôi sử dụng Vue hoặc NuxtJS, một khung JavaScript và Typescript hiện đại, đồng thời tạo các trang web và ứng dụng động và tĩnh.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'Flutter',
      description: {
        en: 'For an app, I also use Flutter.',
        id_ID: 'Đối với một ứng dụng mobile, tôi sử dụng Flutter.',
      },
      icon: 'devicon:flutter',
      image: null,
    },
    {
      id: 4,
      title: 'NodeJS',
      description: {
        en: 'In Backend, I use NodeJS for most of my personal applications to connect to the database.',
        id_ID: 'Về phía back end Tôi sử dụng NodeJS cho hầu hết các ứng dụng cá nhân của mình để thao tác với cơ sỡ dữ liệu.',
      },
      icon: 'devicon:nodejs',
      image: null,
    },
  ]
})
