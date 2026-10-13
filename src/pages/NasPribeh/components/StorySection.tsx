
type StorySection = {
  title: string
  description: string
  image: string
}

function StorySection({ title, description, image }: StorySection) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 mt-5">

      {title === 'Od nápadu ke skutečnosti' ?
        <>
          <img src={image} alt="" className="w-full rounded-md order-2 lg:order-1"/>
          <div className="flex flex-col gap-6 my-auto xl:px-12 order-1 lg:order-2">
            <p className="text-4xl">{title}</p>
            <p className="text-[#2B241F]/80 max-w-[800px]">{description}</p>
          </div>
        </>
        :
        <>
          <div className="flex flex-col gap-6 my-auto xl:px-12">
            <p className="text-4xl">{title}</p>
            <p className="text-[#2B241F]/80 max-w-[800px]">{description}</p>
          </div>
          <img src={image} alt=""  className="w-full rounded-md"/>
        </>
      }

    </div>
  )
}

export default StorySection;