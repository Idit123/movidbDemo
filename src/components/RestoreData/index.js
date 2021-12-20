import { useEffect, useState } from "react"

const RestoreData = (data, pagecount) => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    localStorage.setItem("ScrollIndex", position)
    localStorage.setItem("Data", JSON.stringify(data))
    localStorage.setItem("PageCount", pagecount)
  }, [position])

  const handleScroll = () => {
    const index = window.pageYOffset
    setPosition(index)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}
export default RestoreData
