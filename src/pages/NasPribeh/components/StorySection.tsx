import { motion } from "motion/react";

type StorySection = {
  title: string
  description: string
  image: string
  imageAlt: string
}

function StorySection({ title, description, image, imageAlt }: StorySection) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 mt-5">

      {title === 'Od nápadu ke skutečnosti' ?
        <>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            src={image}
            alt={imageAlt}
            className="w-[90%] h-auto place-self-center rounded-md order-2 lg:order-1" />
          <div className="flex flex-col gap-6 my-auto xl:px-12 order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-4xl text-[#38271F]">
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              className="text-[#2B241F] max-w-[800px]">
              {description}
            </motion.p>
          </div>
        </>
        :
        <>
          <div className="flex flex-col gap-6 my-auto xl:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-4xl text-[#38271F]">
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              className="text-[#2B241F] max-w-[800px]">
              {description}
            </motion.p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            src={image}
            alt={imageAlt}
            className="w-[90%] h-auto place-self-center rounded-md" />
        </>
      }

    </div>
  )
}

export default StorySection;
